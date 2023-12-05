import { AccentColors } from "./palette";
import { ThemeOptions } from "./themes";
import { LangOptions } from "./languages";
import { UserPrefAccent_I, UserPreferences_I } from "@/types/zustand/userPreferences";

const UserAccentDefaults: UserPrefAccent_I = { accent: AccentColors[0], inverted: false };

export const UserPrefDefaults: UserPreferences_I = {
	language: LangOptions.en.code,
	theme: ThemeOptions.dark,
	accent: UserAccentDefaults,
};
