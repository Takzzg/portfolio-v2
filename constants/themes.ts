import { IconType } from "react-icons/lib";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";

import { BackgroundColors, TextColors } from "./palette";

export interface ThemeOption {
	name: string;
	key: ThemeOptionKey_I;
	Icon: IconType;
	settings: {
		bgColor: string;
		textColor: string;
	};
}

export type ThemeOptionKey_I = "light" | "dark";

export const ThemeOptions: Record<ThemeOptionKey_I, ThemeOption> = {
	light: {
		key: "light",
		name: "Light",
		Icon: BsFillSunFill,
		settings: {
			bgColor: BackgroundColors.light,
			textColor: TextColors.dark,
		},
	},
	dark: {
		key: "dark",
		name: "Dark",
		Icon: BsMoonFill,
		settings: {
			bgColor: BackgroundColors.light,
			textColor: TextColors.dark,
		},
	},
};

export const ThemeOptionKeys = Object.keys(ThemeOptions);
