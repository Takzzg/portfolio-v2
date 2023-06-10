import React from "react";
import styles from "./BaseRoll.module.scss";
import PlusMinus from "@/components/UI/Buttons/PlusMinus/PlusMinus";

type Props = { value: number; onIncrease: Function; onDecrease: Function };

const BaseRoll = (props: Props) => {
	const { value, onIncrease, onDecrease } = props;

	return (
		<span className={styles.baseRoll}>
			<span className={styles.title}>Base: {value}</span>
			<PlusMinus onIncrease={onIncrease} onDecrease={onDecrease} />
		</span>
	);
};

export default BaseRoll;
