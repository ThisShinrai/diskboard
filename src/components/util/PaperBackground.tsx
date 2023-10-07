import { HTMLAttributes, HTMLProps, ReactNode } from "react";

export const PaperBackground = ({
  children,
  classes,
}: {
  children?: ReactNode;
  classes?: HTMLProps<HTMLElement>["className"];
}) => {
  return (
    <div
      className={classes}
      style={{
        backgroundColor: "#000000",
        opacity: "0.8",
        backgroundImage:
          "linear-gradient(#161616 1px, transparent 1px), linear-gradient(to right, #161616 1px, #000000 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      {children}
    </div>
  );
};
