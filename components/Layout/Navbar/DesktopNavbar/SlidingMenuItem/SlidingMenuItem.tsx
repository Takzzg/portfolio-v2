"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

import styles from "./SlidingMenuItem.module.scss";

type Props = {
	Icon: React.ReactNode;
	content: React.ReactNode;
	verticalPosOverride?: { top?: string | number } | { bottom?: string | number };
	contentCustomStyles?: { padding?: string; margin?: string };
};

const PanelHidden = { opacity: 0, x: "0" };
const PanelShown = { opacity: 1, x: "100%" };

const SlidingMenuItem = (props: Props) => {
	const { Icon, content, verticalPosOverride, contentCustomStyles } = props;
	const [panelPosition, setPanelPosition] = useState(PanelHidden);

	const parentStyle: React.CSSProperties | undefined = verticalPosOverride ? undefined : { position: "relative" };
	const contentStyle: React.CSSProperties | undefined = verticalPosOverride
		? { ...verticalPosOverride, ...contentCustomStyles }
		: { height: "100%", ...contentCustomStyles };

	return (
		<div
			className={styles.slidingMenuItem}
			style={parentStyle}
			onMouseOver={() => setPanelPosition(PanelShown)}
			onMouseOut={() => setPanelPosition(PanelHidden)}
		>
			<div className={styles.icon}>{Icon}</div>
			<motion.div
				className={styles.slidingPanel}
				style={contentStyle}
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
