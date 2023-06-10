import React, { useState } from "react";
import styles from "./CurrentHP.module.scss";
import PlusMinus from "@/components/UI/Buttons/PlusMinus/PlusMinus";

type Props = {
	disabled: boolean;
	max: number;
	onIncrease: Function;
	onDecrease: Function;
	current: number;
	colorWarnings?: boolean;
};

// const colorKeys = [
// 	{ value: 0, color: "red" },
// 	{ value: 10, color: "orange" },
// 	{ value: 25, color: "yellow" },
// 	{ value: 100, color: "white" },
// ];

// const parseHPcolor = (value: number, max: number) => {
// 	const percent = (value * 100) / max;
// 	// console.log("percent", percent);

// 	const aplicableColors = colorKeys.filter((key) => value < key.value);
// 	// console.log("aplicableColors", aplicableColors);

// 	return aplicableColors.pop()!.color;
// };

const CurrentHP = (props: Props) => {
	const { disabled, max, onDecrease, onIncrease, current, colorWarnings } = props;

	// const [currentColor, setCurrentColor] = useState(colorKeys[-1]);
	// console.log("currentColor", currentColor);

	return (
		<span className={`${styles.current} ${disabled && styles.disabled}`}>
			<span>[]</span>
			<span className={styles.values}>
				<span className={styles.current}>{current}</span>
				<span className={styles.separator}>/</span>
				<span className={styles.max}>{max}</span>
			</span>
			<PlusMinus disabled={disabled} onIncrease={onIncrease} onDecrease={onDecrease} />
		</span>
	);
};

export default CurrentHP;
