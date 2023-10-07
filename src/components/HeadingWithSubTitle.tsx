import { GradientFromPurpleToPink } from "./util/Gradients";

export const HeadingWithSubTitle = ({
  title,
  subTitle,
  classes,
  center = false,
}: {
  title: string;
  subTitle: string;
  classes?: string;
  center?: boolean;
}) => {
  return (
    <div
      className={`${classes} relative mb-10 flex flex-col ${
        center ? "items-center justify-center" : null
      }`}
    >
      <div>
        <h3 className="text-4xl font-bold text-white">{title}</h3>
      </div>
      <div className={`${GradientFromPurpleToPink} relative -rotate-2`}>
        <h4 className={`text-5xl font-bold text-white`}>{subTitle}</h4>
      </div>
    </div>
  );
};
