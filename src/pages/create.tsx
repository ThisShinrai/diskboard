import { loadStripe } from "@stripe/stripe-js";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import { useEffect } from "react";
import { GradientButton } from "~/components/GradientButton";
import { Heading } from "~/components/Heading";
import { Layout } from "~/components/Layout";
import { Themes } from "~/utils";
import { api } from "~/utils/api";

export default function Create() {
  const router = useRouter();
  const { status: sessionStatus, data: session } = useSession();
  const authorized = sessionStatus === "authenticated";
  const unAuthorized = sessionStatus === "unauthenticated";
  const loading = sessionStatus === "loading";

  useEffect(() => {
    if (loading || !router.isReady) return;
    if (unAuthorized) {
      console.log("not authorized");
      router.push({
        pathname: "/",
        query: { returnUrl: router.asPath },
      });
    }
  }, [sessionStatus]);

  const { mutateAsync: createCheckoutSession } =
    api.stripe.createCheckoutSession.useMutation();

  const { data, isLoading } = api.user.subscriptionStatus.useQuery({
    userId: session?.user.id!,
  });

  return (
    <Layout showTitle={true}>
      <div className="px-10 py-28">
        <Heading title="Server hinzufügen" />
        <GradientButton
          theme={Themes.FromBlueToPink}
          onClick={async () => {
            const { checkoutUrl } = await createCheckoutSession();
            if (checkoutUrl) {
              router.push(checkoutUrl);
            }
          }}
        >
          Handle Checkout{" "}
        </GradientButton>
        <p className="text-xl text-gray-700">
          Your subscription is {data + ""}.
        </p>
        {!isLoading && data === null && (
          <>
            <p className="text-xl text-gray-700">You are not subscribed!!!</p>
          </>
        )}
      </div>
    </Layout>
  );
}
