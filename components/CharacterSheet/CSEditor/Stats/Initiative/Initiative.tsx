import PanelTemplate from "@/components/CharacterSheet/PanelTemplate/PanelTemplate";
import React from "react";
import { FaClock } from "react-icons/fa";
import styles from "./Initiative.module.scss";
import ModifierList from "@/components/CharacterSheet/ModifierList/ModifierList";
import { useCombinedStore } from "@/zustand/store";
import { DeepCopy } from "@/scripts/utilities/DeepCopy";
import BaseRoll from "@/components/CharacterSheet/BaseRoll/BaseRoll";
import { Initiative_I } from "@/types/csEditor/characterSheet/stats/initiative";
import { CharacterSheet_I } from "@/types/csEditor/characterSheet/characterSheet";

type Props = {};

const Initiative = (props: Props) => {
	const editingCS = useCombinedStore((state) => state.cSheets.editingSheet);
	const setEditingCS = useCombinedStore((state) => state.cSheets.setEditingSheet);

	const initiative = editingCS?.character.stats.initiative;

	if (!initiative) return <div>Loading...</div>;

	const setEditingInitiative = (initiative: Initiative_I) => {
		const editingCopy: CharacterSheet_I = DeepCopy(editingCS);
		editingCopy.character.stats.initiative = initiative;
		setEditingCS(editingCopy);
	};

	const toggleModifier = (key: string) => {
		const initiativeCopy: Initiative_I = DeepCopy(initiative);
		const mod = initiativeCopy.modifiers.find((m) => m.key === key);
		if (!mod) return;

		mod.enabled = !mod.enabled;

		setEditingInitiative(initiativeCopy);
	};

	const modifyBaseRoll = (value: number) => {
		const InitiativeCopy: Initiative_I = DeepCopy(initiative);
		InitiativeCopy.baseRoll = value;
		setEditingInitiative(InitiativeCopy);
	};

	return (
		<PanelTemplate Icon={FaClock} className={styles.initiative} title="Initiative" iconColor="lightgray">
			<span className={styles.total}>Total: {initiative.value}</span>
			<BaseRoll
				value={initiative.baseRoll}
				onIncrease={() => modifyBaseRoll(initiative.baseRoll + 1)}
				onDecrease={() => modifyBaseRoll(initiative.baseRoll - 1)}
			/>
			<ModifierList modifiers={initiative.modifiers} toggleModifier={toggleModifier} />
		</PanelTemplate>
	);
};

export default Initiative;
