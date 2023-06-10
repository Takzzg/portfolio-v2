import React from "react";
import styles from "./NumberInput.module.scss";

type Props = {
	value: number;
	onChange: Function;
};

const NumberInput = (props: Props) => {
	const { value, onChange } = props;

	return (
		<span className={styles.numberInput}>
			<input type="number" name="number_input" id="number_input" value={value} onChange={() => onChange()} />
		</span>
	);
};

export default NumberInput;
