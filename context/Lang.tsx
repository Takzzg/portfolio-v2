"use client";

import React, { createContext, ReactNode, useState } from "react";

import en from "../translations/en";
import es from "../translations/es";
import { Language } from "@/types/language";

type Props = {
	children: ReactNode;
};

export const AvailableLanguages: { [key: string]: any } = {
	en: { name: "English", value: "en", flag: "" },
	es: { name: "Español", value: "es", flag: "" },
};

const Translations: { [key: string]: Language } = {
	en: { ...AvailableLanguages.en, translation: en },
	es: { ...AvailableLanguages.es, translation: es },
};

export const langCtx = createContext({
	lang: Translations.en,
	changeLang: (val: string) => {},
});

const LangProvider = ({ children }: Props) => {
	const [lang, setLang] = useState(Translations.en);

	return (
		<langCtx.Provider
			value={{
				lang: Translations[lang.value],
				changeLang: (val) => setLang(Translations[val]),
			}}
		>
			{children}
		</langCtx.Provider>
	);
};

export default LangProvider;
