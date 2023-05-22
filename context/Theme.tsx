import { createContext, ReactNode, useState } from "react";

type Props = {
	children: ReactNode;
};

export const themeCtx = createContext({
	theme: "dark",
	changeLang: (val: "light" | "dark") => {},
});

const ThemeProvider = ({ children }: Props) => {
	const [theme, setTheme] = useState<"light" | "dark">("dark");

	return (
		<themeCtx.Provider
			value={{
				theme: theme === "light" ? "dark" : "light",
				changeLang: (val) => setTheme(val),
			}}
		>
			{children}
		</themeCtx.Provider>
	);
};

export default ThemeProvider;
