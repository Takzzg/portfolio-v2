import { Ability_I } from "@/types/csEditor/characterSheet";
import React, { useState } from "react";
import PanelTemplate from "../../PanelTemplate/PanelTemplate";
import { FaMale } from "react-icons/fa";
import styles from "./Ability.module.scss";
import ModifierList from "../../ModifierList/ModifierList";

type Props = { ability: Ability_I; toggleMod: Function };

const Ability = (props: Props) => {
	const { ability, toggleMod } = props;

	const [modifiers, setModifiers] = useState(ability.modifiers);

	return (
		<PanelTemplate Icon={FaMale} className={styles.ability} title={ability.key}>
			<span className={styles.total}>Total: {ability.value}</span>
			<ModifierList modifiers={modifiers} toggleMod={toggleMod} />
		</PanelTemplate>
	);
};

export default Ability;
