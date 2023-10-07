import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

import { z } from "zod";

export const userRouter = createTRPCRouter({
  subscriptionStatus: protectedProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ ctx, input }) => {
      const { session, db: prisma } = ctx;

      if (!session.user?.id) {
        return "erorr und so";
      }

      const data = await prisma.user.findUnique({
        where: {
          id: input.userId,
        },
        select: {
          stripeSubscriptionStatus: true,
        },
      });

      if (!data) {
        throw new Error("Could not find user");
      }

      return data.stripeSubscriptionStatus;
    }),
});
