"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

import styles from "./PrimaryButton.module.scss";

interface Props {
	title: string;
	children: any;
}

const TitleHidden = { right: "0", left: "auto", opacity: 0 };
const TitleShown = { right: "auto", left: "100%", opacity: 1 };

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
			<motion.div animate={titlePosition} className={styles.hidden} initial={false}>
				<div className={styles.title}>{title}</div>
			</motion.div>
		</div>
	);
};

export default PrimaryButton;
