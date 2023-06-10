import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import styles from "./PlusMinus.module.scss";

type Props = { disabled?: boolean; onIncrease: Function; onDecrease: Function };

const PlusMinus = (props: Props) => {
	const { disabled = false, onIncrease, onDecrease } = props;

	return (
		<div className={styles.plusMinus}>
			<button disabled={disabled} className={styles.decreaseBtn} onClick={() => onDecrease()}>
				<FaMinus />
			</button>
			<button disabled={disabled} className={styles.increaseBtn} onClick={() => onIncrease()}>
				<FaPlus />
			</button>
		</div>
	);
};

export default PlusMinus;
