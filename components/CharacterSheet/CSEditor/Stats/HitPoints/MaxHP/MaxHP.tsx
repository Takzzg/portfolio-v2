import React from "react";
import styles from "./MaxHP.module.scss";
import PlusMinus from "@/components/UI/Buttons/PlusMinus/PlusMinus";

type Props = {
	value: number;
	disabled: boolean;
	onIncrease: Function;
	onDecrease: Function;
};

const MaxHP = (props: Props) => {
	const { value, disabled, onIncrease, onDecrease } = props;
	return (
		<span className={`${styles.max} ${disabled ? styles.disabled : ""}`}>
			<span>[]</span>
			<span className={styles.values}>{value}</span>
			<PlusMinus disabled={disabled} onIncrease={onIncrease} onDecrease={onDecrease} />
		</span>
	);
};

export default MaxHP;
