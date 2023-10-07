import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  GradientDefault,
  GradientFromBlueToPink,
  GradientFromOrangeToRed,
  GradientFromPinkToPurple,
  GradientFromPinkToRed,
  GradientFromPurpleToBlue,
  GradientFromPurpleToPink,
} from "./components/util/Gradients";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const carouselBreakpoints = {
  largeDesktop: {
    breakpoint: { max: 3000, min: 1886 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1886, min: 1430 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1430, min: 940 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 940, min: 0 },
    items: 1,
  },
};

export const Themes = {
  FromPinkToPurple: {
    name: "FromPinkToPurple",
    classNameString: GradientFromPurpleToPink,
  },
  FromPurpleToPink: {
    name: "FromPurpleToPink",
    classNameString: GradientFromPurpleToPink,
  },
  FromPurpleToBlue: {
    name: "FromPurpleToBlue",
    classNameString: GradientFromPurpleToBlue,
  },
  FromPinkToRed: {
    name: "FromPinkToRed",
    classNameString: GradientFromPinkToRed,
  },
  FromOrangeToRed: {
    name: "FromOrangeToRed",
    classNameString: GradientFromOrangeToRed,
  },
  FromBlueToPink: {
    name: "FromBlueToPink",
    classNameString: GradientFromBlueToPink,
  },
  Default: {
    name: "Default",
    classNameString: GradientDefault,
  },
};

export const ThemesArray = [
  {
    name: "FromPinkToPurple",
    classNameString: GradientFromPinkToPurple,
  },
  {
    name: "FromPurpleToPink",
    classNameString: GradientFromPurpleToPink,
  },
  {
    name: "FromPurpleToBlue",
    classNameString: GradientFromPurpleToBlue,
  },
  {
    name: "FromPinkToRed",
    classNameString: GradientFromPinkToRed,
  },
  {
    name: "FromOrangeToRed",
    classNameString: GradientFromOrangeToRed,
  },
  {
    name: "FromBlueToPink",
    classNameString: GradientFromBlueToPink,
  },
  {
    name: "Default",
    classNameString: GradientDefault,
  },
];
