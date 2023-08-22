import React from "react";
import styles from "./Tech.module.scss";
import { Technology_I } from "@/types/home/technologies";
import Image from "next/image";

type Props = {
	tech: Technology_I;
	selected: boolean;
	onClick: Function;
};

const Tech = (props: Props) => {
	const { tech, selected, onClick } = props;

	return (
		<div className={`${styles.tech} ${selected && styles.selected}`} onClick={() => onClick()}>
			<Image className={styles.icon} src={tech.icon || ""} alt="tech logo" />
			<span className={styles.name}>{tech.name}</span>
		</div>
	);
};

export default Tech;
