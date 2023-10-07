import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { GradientFromPurpleToPink } from "./util/Gradients";

import { useState } from "react";

export const HeadingWithSubTitleAndTooltip = ({
  title,
  subTitle,
  classes,
  tooltipText,
  center = false,
}: {
  tooltipText: string;
  title: string;
  subTitle: string;
  classes?: string;
  center?: boolean;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`${classes} relative mb-10 flex flex-col ${
        center ? "items-center justify-center" : null
      }`}
    >
      <div>
        <h3 className="text-4xl font-bold text-white">
          <TooltipProvider>
            {title}
            <Tooltip>
              <TooltipTrigger>
                <p>*</p>
              </TooltipTrigger>
              <TooltipContent>
                <p>{tooltipText}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </h3>
      </div>
      <div className={`${GradientFromPurpleToPink} relative -rotate-2`}>
        <h4 className={`text-5xl font-bold text-white`}>{subTitle}</h4>
      </div>
    </div>
  );
};
