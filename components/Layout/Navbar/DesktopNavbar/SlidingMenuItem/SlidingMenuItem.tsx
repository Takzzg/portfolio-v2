"use client";

import React, { useState } from "react";
import styles from "./SlidingMenuItem.module.scss";
import { motion } from "framer-motion";

type Props = {
	Icon: React.ReactNode;
	content: React.ReactNode;
};

const PanelHidden = { opacity: 0, x: "0" };
const PanelShown = { opacity: 1, x: "100%" };

const SlidingMenuItem = (props: Props) => {
	const { Icon, content } = props;
	const [panelPosition, setPanelPosition] = useState(PanelHidden);

	return (
		<div
			className={styles.slidingMenuItem}
			onMouseOver={() => setPanelPosition(PanelShown)}
			onMouseOut={() => setPanelPosition(PanelHidden)}
		>
			<div className={styles.icon}>{Icon}</div>
			<motion.div
				className={styles.slidingPanel}
				animate={panelPosition}
				initial={false}
				transition={{ type: "tween" }}
			>
				{content}
			</motion.div>
		</div>
	);
};

export default SlidingMenuItem;
