import { ReactNode } from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { PaperBackground } from "./util/PaperBackground";

export const Layout = ({
  children,
  showTitle,
}: {
  children: ReactNode;
  showTitle: boolean;
}) => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation showTitle={showTitle} />
      {children}
      <PaperBackground>
        <Footer />
      </PaperBackground>
    </div>
  );
};
