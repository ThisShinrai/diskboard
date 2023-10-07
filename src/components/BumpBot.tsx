import { Themes } from "~/utils";
import { HeadingWithSubTitle } from "./HeadingWithSubtitle";
import { GradientButton } from "./GradientButton";
import { HeadingWithSubTitleAndTooltip } from "./HeadingWithSubTitleAndToolTip";

const BumpText = ({ text }: { text: string }) => {
  return <span className="text-2xl text-white">{text}</span>;
};

export const BumpBot = () => {
  return (
    <div>
      <HeadingWithSubTitleAndTooltip
        title="Bumpen"
        subTitle="wie gewohnt"
        tooltipText="Der /bump Befehl aktualisiert deinen Server in unserer
        Serverliste und lässt ihn in der Suche weiteroben stehen."
        center={true}
      />
      <div className="flex flex-col gap-5 p-10 text-center">
        <div>
          <BumpText text="1. /bump in den Chat eingeben" />
        </div>
        <div>
          <BumpText text="2. Server an die Spitze kataputlieren lassen" />
        </div>
      </div>
      <div className="text-center">
        <GradientButton theme={Themes.FromPurpleToPink}>
          Bot hinufügen
        </GradientButton>
      </div>
      <div className="mt-10 text-center text-sm text-white/60 lg:hidden">
        <span>
          *Der /bump Befehl aktualisiert deinen Server in unserer Serverliste
          und lässt ihn in der Suche weiter oben stehen.
        </span>
      </div>
    </div>
  );
};
