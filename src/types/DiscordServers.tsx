import { Theme } from "./Themes";

export type DiscordServer = {
  name: string;
  imageUrl: string;
  description: string;
  lastBump: string;
  clicks: number;
  createdAt: string;
  boosted: boolean;
  theme: Theme;
};
