import {
  Gochi_Hand,
  Splash,
  Bree_Serif,
} from "next/font/google";

export const gochi = Gochi_Hand({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-gochi",
});

export const splash = Splash({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-splash",
});

export const bree = Bree_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bree",
});