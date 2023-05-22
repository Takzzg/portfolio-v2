import React, { createContext, ReactNode, useState } from "react";

import en from "../translations/en.json";
import es from "../translations/es.json";

type Props = {
	children: ReactNode;
};

export const langCtx = createContext({
	lang: en,
	changeLang: (val: "en" | "es") => {},
});

const LangProvider = ({ children }: Props) => {
	const [lang, setLang] = useState<"en" | "es">("en");

	return (
		<langCtx.Provider
			value={{
				lang: lang === "en" ? en : es,
				changeLang: (val) => setLang(val),
			}}
		>
			{children}
		</langCtx.Provider>
	);
};

export default LangProvider;
