import React from "react";
import Image from "next/image";

import SlidingMenuItem from "../SlidingMenuItem/SlidingMenuItem";
import styles from "./LangPicker.module.scss";
import { LangOptions } from "constants/languagess";
import { GrLanguage } from "react-icons/gr";

const Picker = () => {
	return (
		<div className={styles.langPicker}>
			<span className={styles.title}>Lang picker</span>
			<span className={styles.langOptions}>
				{LangOptions.map((language) => {
					const { name, code, flagCode } = language;
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
							<input type="radio" name="page-lang" id={name} value={code} />
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
