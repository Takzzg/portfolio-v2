import React from "react";
import PanelTemplate from "../PanelTemplate/PanelTemplate";
import { FaShieldAlt } from "react-icons/fa";
import styles from "./ArmorClass.module.scss";

type Props = {};

const ArmorClass = (props: Props) => {
	console.log("props", props);
	return (
		<PanelTemplate Icon={FaShieldAlt} iconColor="blue" title="Armor Class" className={styles.armorClass}>
			ArmorClass
		</PanelTemplate>
	);
};

export default ArmorClass;
