import { z } from "zod";
import { env } from "~/env.mjs";
import { getOrCreateStripeCustomerIdForUser } from "~/server/stripe/stripe-webhook-handlers";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const stripes = createTRPCRouter({
  createCheckoutSession: protectedProcedure
    .input(z.object({ priceModel: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { stripe, session, db: prisma, req } = ctx;

      const customerId = await getOrCreateStripeCustomerIdForUser({
        prisma,
        stripe,
        userId: session.user?.id,
      });

      if (!customerId) {
        throw new Error("Could not create customer");
      }

      const baseUrl =
        env.NODE_ENV === "development"
          ? `http://${req.headers.host ?? "localhost:3000"}`
          : `https://${req.headers.host ?? env.NEXTAUTH_URL}`;

      const checkoutSession = await stripe.checkout.sessions.create({
        customer: customerId,
        client_reference_id: session.user?.id,
        payment_method_types: ["card", "paypal"],
        mode: "subscription",
        discounts: [
          {
            coupon: "O3ZSWSP9",
          },
        ],
        line_items: [
          {
            price:
              input.priceModel === "Unterstützer"
                ? process.env.STRIPE_PRICE_ID_FIRST
                : input.priceModel === "Unterstützer +"
                ? process.env.STRIPE_PRICE_ID_SECOND
                : process.env.STRIPE_PRICE_ID_THIRD,
            quantity: 1,
          },
        ],
        success_url: `${baseUrl}/create?checkoutSuccess=true`,
        cancel_url: `${baseUrl}/create?checkoutCanceled=true`,
        subscription_data: {
          metadata: {
            userId: session.user?.id,
          },
        },
      });

      if (!checkoutSession) {
        throw new Error("Could not create checkout session");
      }

      return { checkoutUrl: checkoutSession.url };
    }),
  createBillingPortalSession: protectedProcedure.mutation(async ({ ctx }) => {
    const { stripe, session, db: prisma, req } = ctx;

    const customerId = await getOrCreateStripeCustomerIdForUser({
      prisma,
      stripe,
      userId: session.user?.id,
    });

    if (!customerId) {
      throw new Error("Could not create customer");
    }

    const baseUrl =
      env.NODE_ENV === "development"
        ? `http://${req.headers.host ?? "localhost:3000"}`
        : `https://${req.headers.host ?? env.NEXTAUTH_URL}`;

    const stripeBillingPortalSession =
      await stripe.billingPortal.sessions.create({
        customer: customerId,
        return_url: `${baseUrl}/dashboard`,
      });

    if (!stripeBillingPortalSession) {
      throw new Error("Could not create billing portal session");
    }

    return { billingPortalUrl: stripeBillingPortalSession.url };
  }),
});
