import React from "react";
import styles from "./SavingThrows.module.scss";
import PanelTemplate from "@/components/CharacterSheet/PanelTemplate/PanelTemplate";
import { FaMale } from "react-icons/fa";
import { SavingThrowTypes } from "@/types/csEditor/characterSheet/stats/savingThrows";
import SavingThrowSingular from "./SavingThrowSingular/SavingThrowSingular";

type Props = {};

const SavingThrows = (props: Props) => {
	return (
		<PanelTemplate Icon={FaMale} title="Saving Throws" className={styles.savingThrows}>
			{SavingThrowTypes.map((type) => (
				<SavingThrowSingular key={type} savingThrowType={type} />
			))}
		</PanelTemplate>
	);
};

export default SavingThrows;
