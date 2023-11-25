import { IconType } from "react-icons/lib";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";

import { BackgroundColors, TextColors } from "./palette";

interface ThemeOption {
	name: string;
	Icon: IconType;
	settings: {
		bgColor: string;
		textColor: string;
	};
}

export const ThemeOptions: ThemeOption[] = [
	{
		name: "Light",
		Icon: BsFillSunFill,
		settings: {
			bgColor: BackgroundColors.light,
			textColor: TextColors.dark,
		},
	},
	{
		name: "Dark",
		Icon: BsMoonFill,
		settings: {
			bgColor: BackgroundColors.light,
			textColor: TextColors.dark,
		},
	},
];
