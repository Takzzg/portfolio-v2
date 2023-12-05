import React from "react";
import { MdBrightnessMedium } from "react-icons/md";

import styles from "./ThemePicker.module.scss";
import SlidingMenuItem from "../SlidingMenuItem/SlidingMenuItem";
import { ThemeOptionKey_I, ThemeOptions } from "constants/themes";
import { useCombinedStore } from "@/zustand/store";

const Picker = () => {
	const userPrefsStore = useCombinedStore((store) => store.userPrefs);

	return (
		<div className={styles.themePicker}>
			<span className={styles.title}>Theme picker</span>
			<span className={styles.themeOptions}>
				{Object.keys(ThemeOptions).map((themeKey) => {
					const { name, key, Icon } = ThemeOptions[themeKey as ThemeOptionKey_I];

					return (
						<div key={name} className={styles.theme}>
							<label htmlFor={name}>
								<Icon />
								{name}
							</label>
							<input
								type="radio"
								name="page-theme"
								id={key}
								value={key}
								checked={userPrefsStore.theme.key === key}
								onChange={() => userPrefsStore.setTheme(key)}
							/>
						</div>
					);
				})}
			</span>
		</div>
	);
};

type Props = {};

const ThemePicker = (props: Props) => {
	return <SlidingMenuItem Icon={<MdBrightnessMedium />} content={<Picker />} />;
};

export default ThemePicker;
