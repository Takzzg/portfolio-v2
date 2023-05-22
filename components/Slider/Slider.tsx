import styles from "./Slider.module.scss";
import { TiRefresh } from "react-icons/ti";
import { useState } from "react";

interface Props {
	label: string;
	min: number;
	max: number;
	step: number;
	value: number;
	onChange: Function;
	onReset: Function;
	symbol?: string;
}

const Slider = (props: Props) => {
	const [defaultValue, setDefaultValue] = useState(props.value);

	return (
		<div className={styles.sliderContainer}>
			<div className={styles.inputLabel}>
				{props.label} = {props.value}
				{props.symbol}
			</div>
			<div className={styles.refresh} onClick={() => props.onReset(defaultValue)}>
				<TiRefresh />
			</div>
			<input
				type="range"
				min={props.min}
				max={props.max}
				step={props.step}
				value={props.value}
				onChange={(event) => props.onChange(event.target.value)}
			/>
		</div>
	);
};

export default Slider;
