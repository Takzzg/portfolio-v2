import React from "react";
import styles from "./PanelTemplate.module.scss";
import { IconType } from "react-icons";

type Props = {
	Icon: IconType;
	iconColor?: string;
	title: string;
	className: any;
	children: any | JSX.Element[];
};

const PanelTemplate = (props: Props) => {
	const { title, Icon, iconColor, children, className } = props;

	return (
		<div className={`${styles.panelTemplate} ${className}`}>
			<span className={styles.title}>
				<span className={styles.icon} style={{ color: iconColor || "inherit" }}>
					{<Icon />}
				</span>
				<span className={styles.text}>{title}</span>
			</span>
			<span className={styles.content}>{children}</span>
		</div>
	);
};

export default PanelTemplate;
