import { HTMLAttributes, HTMLProps, ReactNode } from "react";

export const CircleBackground = ({
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
        backgroundColor: "#e5e5f7",
        backgroundImage:
          "radial-gradient(circle at center center, #000000, #e5e5f7), repeating-radial-gradient(circle at center center, #000000, #000000, 10px, transparent 20px, transparent 10px)",
        backgroundBlendMode: "multiply",
      }}
    >
      {children}
    </div>
  );
};
