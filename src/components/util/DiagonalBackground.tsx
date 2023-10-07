import { HTMLAttributes, HTMLProps, ReactNode } from "react";

export const DiagonalBackground = ({
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
        backgroundColor: "#ffffff",
        backgroundSize: "10px 10px",
        backgroundImage:
          "repeating-linear-gradient(45deg, #000000 0, #000000 1px, #ffffff 0, #ffffff 50%)",
      }}
    >
      {children}
    </div>
  );
};
