import { Translation_I } from "translations/en";

export type Language = {
	value: string;
	name: string;
	flag: string;
	translation: Translation_I;
};

export interface LanguageOption {
	name: string;
	code: LangOptionKey_I;
	flagCode: string;
}

export type LangOptionKey_I = "en" | "es";
