import { Caveat, DM_Sans } from "next/font/google";
import { ColorScheme } from "./types/shared";

/**
 * "system" - follows the user's system appearance
 * "light" - forces your website to always use light theme
 * "dark" - forces your website to always use dark theme
 */
export const THEME: "system" | "light" | "dark" = "light";

/**
 * Your App Store App ID without the 'id' prefix.
 * Replace this once the new App Store Connect record shows the Apple ID.
 */
export const APP_ID = "1234567890";

export const WHIMSICAL_FONT = Caveat({ subsets: ["latin"] });
export const CURSIVE_FONT = DM_Sans({ subsets: ["latin"] });

export const MATERIAL_SYMBOLS = [
  "send",
  "check_circle",
  "star",
  "mail",
  "open_in_new",
  "open_in_full",
  "play_arrow",
  "pause",
  "lock",
  "target",
] as const;

export const COLORS: ColorScheme = {
  LIGHT: {
    "text-primary": "#000000",
    "text-secondary": "rgba(0, 0, 0, 0.55)",
    "fill-0": "#FFFFFF",
    "fill-1": "#F5F5F5",
    "fill-2": "#EBEBEB",
    "fill-3": "#D4D4D4",
    "accent-brand": "#000000",
    "accent-orange": "#000000",
    "accent-green": "#000000",
    "accent-red": "#000000",
    "accent-blue": "#000000",
    "accent-indigo": "#000000",
    "accent-mint": "#000000",
    "accent-purple": "#000000",
    "accent-pink": "#000000",
  },
  DARK: {
    "text-primary": "#FFFFFF",
    "text-secondary": "rgba(255, 255, 255, 0.55)",
    "fill-0": "#000000",
    "fill-1": "#0A0A0A",
    "fill-2": "#1A1A1A",
    "fill-3": "#2A2A2A",
    "accent-brand": "#FFFFFF",
    "accent-orange": "#FFFFFF",
    "accent-green": "#FFFFFF",
    "accent-red": "#FFFFFF",
    "accent-blue": "#FFFFFF",
    "accent-indigo": "#FFFFFF",
    "accent-mint": "#FFFFFF",
    "accent-purple": "#FFFFFF",
    "accent-pink": "#FFFFFF",
  },
} as const;

export const MAX_RELEASE_NOTES_PER_PAGE = 5;

export const IS_WAITLIST_ENABLED = false;
