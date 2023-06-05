import React from "react";
import styles from "./ExpandBtn.module.scss";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

type Props = {
	expanded: boolean;
	onToggleExpand: Function;
	className?: any;
};

const ExpandBtn = (props: Props) => {
	const { className, expanded, onToggleExpand } = props;

	return (
		<div className={`${styles.expandBtn} ${className}`} onClick={() => onToggleExpand()}>
			{expanded ? <FaChevronUp /> : <FaChevronDown />}
		</div>
	);
};

export default ExpandBtn;
