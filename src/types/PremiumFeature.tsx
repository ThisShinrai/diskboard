import { Theme } from "./Themes";

export type PremiumFeatures = {
  name: string;
  features: string[];
  theme: Theme;
  rotationClass?: string;
  price: string;
};
