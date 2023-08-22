import React from "react";
import styles from "./Accordion.module.scss";

type Props = {
	expanded: boolean;
	onToggleAccordion: Function;
	header: JSX.Element;
	content?: JSX.Element;
	className?: string;
};

const Accordion = (props: Props) => {
	const { expanded, onToggleAccordion, header, content, className = "" } = props;

	return (
		<div className={`${className} ${styles.accordion}`}>
			<span className={styles.header} onClick={() => onToggleAccordion()}>
				{header || "PLACEHOLDER HEADER"}
			</span>
			<span className={`${styles.body} ${!expanded && styles.hidden}`}>{content || "PLACEHOLDER CONTENT"}</span>
		</div>
	);
};

export default Accordion;
