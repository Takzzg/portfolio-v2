import React from "react";
import styles from "./Accordion.module.scss";
import { IconType } from "react-icons";
import ExpandBtn from "../Buttons/ExpandBtn/ExpandBtn";

type Props = {
	title: string;
	Icon: IconType;
	expanded: boolean;
	onToggleAccordion: Function;
	children?: JSX.Element | JSX.Element[];
};

const Accordion = (props: Props) => {
	const { title, Icon, expanded, onToggleAccordion, children } = props;

	return (
		<div className={styles.accordion}>
			<span onClick={() => onToggleAccordion()} className={styles.header}>
				<span className={styles.info}>
					<Icon /> {title}
				</span>
				<ExpandBtn expanded={expanded} onToggleExpand={() => onToggleAccordion()} />
			</span>
			<span className={styles.body} style={{ height: expanded ? "unset" : 0 }}>
				{children || "CONTENIDO"}
			</span>
		</div>
	);
};

export default Accordion;
