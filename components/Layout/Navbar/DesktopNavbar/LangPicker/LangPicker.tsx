import React from "react";
import Image from "next/image";

import SlidingMenuItem from "../SlidingMenuItem/SlidingMenuItem";
import styles from "./LangPicker.module.scss";
import { LangOptions } from "constants/languages";
import { GrLanguage } from "react-icons/gr";
import { LangOptionKey_I } from "@/types/language";
import { useCombinedStore } from "@/zustand/store";

const Picker = () => {
	const userPrefsStore = useCombinedStore((store) => store.userPrefs);

	return (
		<div className={styles.langPicker}>
			<span className={styles.title}>Lang picker</span>
			<span className={styles.langOptions}>
				{Object.keys(LangOptions).map((langKey) => {
					const { name, code, flagCode } = LangOptions[langKey as LangOptionKey_I];
					const FlagSize = 80;

					return (
						<div key={name} className={styles.langOption}>
							<label htmlFor={name} className={styles.langLabel}>
								<Image
									alt="country flag"
									src={`https://flagcdn.com/w${FlagSize}/${flagCode}.png`}
									width={0}
									height={0}
									sizes="100vw"
									style={{ width: `${FlagSize / 2}px`, height: "auto" }}
								/>
								{name}
							</label>
							<input
								type="radio"
								name="page-lang"
								id={name}
								value={code}
								checked={userPrefsStore.language === code}
								onChange={() => userPrefsStore.setLang(code)}
							/>
						</div>
					);
				})}
			</span>
		</div>
	);
};

type Props = {};

const LangPicker = (props: Props) => {
	return <SlidingMenuItem Icon={<GrLanguage />} content={<Picker />} />;
};

export default LangPicker;
