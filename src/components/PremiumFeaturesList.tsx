import { Themes } from "~/utils";
import { Heading } from "./Heading";

import { GradientButton } from "./GradientButton";
import { PremiumFeatures } from "~/types/PremiumFeature";
import { signIn, useSession } from "next-auth/react";
import { spawn } from "child_process";
import { BsFillBalloonHeartFill } from "react-icons/bs";

import { useState } from "react";
import { api } from "~/utils/api";
import { useRouter } from "next/router";

export const PremiumFeaturesList = ({
  premiumFeatures,
}: {
  premiumFeatures: PremiumFeatures[];
}) => {
  const { data: session, status: sessionStatus } = useSession();
  const [priceModel, setPriceModel] = useState(0);

  const { mutateAsync: createCheckoutSession } =
    api.stripe.createCheckoutSession.useMutation();

  const router = useRouter();

  return (
    <div className="px-10 py-5">
      <div className="relative flex flex-col items-center justify-around gap-5 ">
        <Heading title="Preise" />
        <div className="flex flex-col gap-10 lg:flex-row">
          {premiumFeatures.map((feature) => (
            <div
              key={feature.name}
              className={`${feature.theme.classNameString} group relative flex flex-col items-center justify-center rounded-lg p-1 transition-all hover:scale-105`}
            >
              <div className="h-full">
                <div className="flex h-full flex-col items-center gap-5 rounded-lg bg-black px-7 py-7">
                  <div className="my-7 text-center">
                    <span className="text-2xl">Packet</span>
                    <h3
                      className={`${feature.theme.classNameString} ${feature.rotationClass} w-fit text-center text-4xl font-bold`}
                    >
                      {feature.name}
                    </h3>
                  </div>
                  <div className="flex h-full flex-col gap-5">
                    {feature.features.map((featureName) => (
                      <span>
                        {featureName.replace("*klick*", "")}
                        {featureName.includes("*klick*") ? (
                          <span
                            className={`${feature.theme.classNameString} cursor-pointer bg-clip-text font-bold text-transparent`}
                          >
                            *klick*
                          </span>
                        ) : null}
                      </span>
                    ))}
                  </div>
                  <div className="my-5 text-center">
                    <GradientButton
                      onClick={async () => {
                        if (!session) {
                          signIn("discord");
                        }

                        const { checkoutUrl } = await createCheckoutSession({
                          priceModel: feature.name,
                        });
                        if (checkoutUrl) {
                          router.push(checkoutUrl);
                        }
                      }}
                      classes="lg:w-fit w-full"
                      theme={feature.theme}
                    >
                      {feature.price}/m upgraden
                      <BsFillBalloonHeartFill className="ml-2" />
                    </GradientButton>
                    <span
                      className={`${feature.theme.classNameString} bg-clip-text text-4xl font-bold text-transparent`}
                    ></span>
                  </div>
                </div>
              </div>
              <div
                className={`${feature.theme.classNameString} absolute -z-10 h-full w-full opacity-0 blur-3xl transition-opacity group-hover:opacity-100`}
              ></div>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-7 text-center">
        <p className="text-white/60">*Zeitlich begrenztes Angebot</p>
      </div>
    </div>
  );
};
