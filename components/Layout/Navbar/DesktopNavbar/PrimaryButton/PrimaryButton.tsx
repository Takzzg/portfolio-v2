"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

import styles from "./PrimaryButton.module.scss";

interface Props {
	title: string;
	children: React.ReactNode;
}

const TitleHidden = { opacity: 0, x: "-100%" };
const TitleShown = { opacity: 1, x: "0" };

const PrimaryButton = (props: Props) => {
	const { title, children } = props;
	const [titlePosition, setTitlePosition] = useState(TitleHidden);

	return (
		<div
			className={styles.ButtonCont}
			onMouseOver={() => setTitlePosition(TitleShown)}
			onMouseOut={() => setTitlePosition(TitleHidden)}
		>
			<div className={styles.icon}>{children}</div>
			<motion.div
				className={styles.hidden}
				animate={titlePosition}
				initial={false}
				transition={{ type: "tween" }}
			>
				<div className={styles.title}>{title}</div>
			</motion.div>
		</div>
	);
};

export default PrimaryButton;
