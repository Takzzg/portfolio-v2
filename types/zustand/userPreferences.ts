import { ThemeOption, ThemeOptionKey_I } from "constants/themes";
import { LangOptionKey_I } from "../language";

export type UserPreferences_I = {
	language: LangOptionKey_I;
	theme: ThemeOption;
	accent: UserPrefAccent_I;
};

export type UserPrefAccent_I = { accent: string; inverted: boolean };

export interface UserPrefActions_I {
	setLang: (value: LangOptionKey_I) => void;
	setTheme: (value: ThemeOptionKey_I) => void;
	setAccent: (value: string, inverted: boolean) => void;
}
