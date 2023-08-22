import React from "react";
import styles from "./Tech.module.scss";
import { Technology_I } from "@/types/home/technologies";

type Props = {
	tech: Technology_I;
	selected: boolean;
	onClick: Function;
};

const Tech = (props: Props) => {
	const { tech, selected, onClick } = props;

	return (
		<div className={`${styles.tech} ${selected && styles.selected}`} onClick={() => onClick()}>
			{tech.name}
		</div>
	);
};

export default Tech;
