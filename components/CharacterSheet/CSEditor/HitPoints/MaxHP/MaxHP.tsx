import React from "react";
import styles from "./MaxHP.module.scss";
import { FaMinus, FaPlus } from "react-icons/fa";

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
			<button disabled={disabled} className={styles.decreaseBtn} onClick={() => onDecrease()}>
				<FaMinus />
			</button>
			<button disabled={disabled} className={styles.increaseBtn} onClick={() => onIncrease()}>
				<FaPlus />
			</button>
		</span>
	);
};

export default MaxHP;
