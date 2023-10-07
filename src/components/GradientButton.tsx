import { Theme } from "~/types/Themes";
import { Button } from "./ui/button";
import { MouseEventHandler, ReactNode } from "react";

export const GradientButton = ({
  children,
  classes,
  theme,
  onClick,
}: {
  children: ReactNode;
  classes?: string;
  theme: Theme;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <Button
      onClick={onClick}
      className={`${theme.classNameString} ${classes} text-lg2 group h-auto p-1 font-bold text-white`}
    >
      <div className="flex h-full w-full items-center justify-center bg-black px-8 py-3 transition-colors group-hover:bg-transparent">
        {children}
      </div>
    </Button>
  );
};
