import React from "react";
import styles from "./PalettePicker.module.scss";
import SlidingMenuItem from "../SlidingMenuItem/SlidingMenuItem";
import { FaPalette } from "react-icons/fa";
import { AccentColors } from "constants/palette";

type ColorPreviewProps = {
	color: string;
};

const ColorPreview = (props: ColorPreviewProps) => {
	const { color } = props;
	return <div className={styles.colorPreview} style={{ backgroundColor: color }} />;
};

const Picker = () => {
	return (
		<div className={styles.palettePicker}>
			<span className={styles.title}>palette picker</span>
			<span className={styles.colorPicker}>
				{AccentColors.map((color) => (
					<div key={color} className={styles.accentOption}>
						<ColorPreview color={color} />
						<input type="radio" name="accent-color" id={color} value={color} />
					</div>
				))}
			</span>
		</div>
	);
};

type Props = {};

const PalettePicker = (props: Props) => {
	return <SlidingMenuItem Icon={<FaPalette />} content={<Picker />} />;
};

export default PalettePicker;
