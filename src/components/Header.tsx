import { Themes } from "~/utils";
import { GradientButton } from "./GradientButton";

type HeaderStyles = {
  titleTextColor: string;
  subTitleTextColor: string;
  titleFontSize: string;
  subTitleFontSize: string;
  titleBackgroundColor?: string;
  subTitleBackgroundColor?: string;
  titleFontWeight?: string;
  subTitleFontWeight?: string;
};

export const Header = ({
  title,
  subTitle,
  headerStyles,
}: {
  title: string;
  subTitle: string;
  headerStyles: HeaderStyles;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <h1
        className={`${headerStyles.titleTextColor} ${headerStyles.titleBackgroundColor} ${headerStyles.titleFontSize} ${headerStyles.titleFontWeight} hover:animate-spin`}
      >
        {title}
      </h1>
      <h2
        className={`${headerStyles.subTitleTextColor} ${headerStyles.subTitleBackgroundColor} ${headerStyles.subTitleFontSize} ${headerStyles.subTitleFontWeight} hover:animate-pulse`}
      >
        {subTitle}
      </h2>
      <div className="mt-3">
        <GradientButton theme={Themes.FromPurpleToPink}>
          Entdecken
        </GradientButton>
      </div>
    </div>
  );
};
