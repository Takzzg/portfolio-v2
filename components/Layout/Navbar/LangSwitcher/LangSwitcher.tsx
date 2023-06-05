import React, { useContext } from "react";
import styles from "./LangSwitcher.module.scss";
import { AvailableLanguages, langCtx } from "@/context/Lang";

type Props = {};

const LangSwitcher = (props: Props) => {
	const languageCtx = useContext(langCtx);

	// console.log("Object.keys(AvailableLanguages)", Object.keys(AvailableLanguages));

	return (
		<div className={styles.languageSwitcher}>
			<div className={styles.title}>{languageCtx.lang.translation.nav.languageSwitcher}:</div>
			<div className={styles.switcher}>
				<button
					onClick={() => languageCtx.changeLang("es")}
					className={`${styles.languageBtn} ${languageCtx.lang.value === "es" ? styles.activeLang : ""}`}
				>
					Español
				</button>
				<span className={styles.separator}>|</span>
				<button
					onClick={() => languageCtx.changeLang("en")}
					className={`${styles.languageBtn} ${languageCtx.lang.value === "en" ? styles.activeLang : ""}`}
				>
					English
				</button>
			</div>
		</div>
	);
};

export default LangSwitcher;
