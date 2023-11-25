import React from "react";
import { MdBrightnessMedium } from "react-icons/md";

import styles from "./ThemePicker.module.scss";
import SlidingMenuItem from "../SlidingMenuItem/SlidingMenuItem";
import { ThemeOptions } from "constants/themes";

const Picker = () => {
	return (
		<div className={styles.themePicker}>
			<span className={styles.title}>Theme picker</span>
			<span className={styles.themeOptions}>
				{ThemeOptions.map((theme) => {
					const { name, Icon } = theme;

					return (
						<div key={name} className={styles.theme}>
							<label htmlFor={name}>
								<Icon />
								{name}
							</label>
							<input type="radio" name="page-theme" id={name} value={name} />
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
