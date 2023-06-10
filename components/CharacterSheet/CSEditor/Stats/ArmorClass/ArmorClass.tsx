"use client";

import React from "react";
import { FaShieldAlt } from "react-icons/fa";
import styles from "./ArmorClass.module.scss";
import PanelTemplate from "../../../PanelTemplate/PanelTemplate";
import { DeepCopy } from "@/scripts/utilities/DeepCopy";
import { ArmorClass_I, CharacterSheet_I, StatModifier } from "@/types/csEditor/characterSheet";
import ModifierList from "../../../ModifierList/ModifierList";
import { useCombinedStore } from "@/zustand/store";

const calculateTotalCA = (modifiers: StatModifier[]) => {
	let totalCA = 0;
	if (modifiers) modifiers.forEach((mod) => mod.enabled && (totalCA += mod.value));
	return totalCA;
};

type Props = {};

const ArmorClass = (props: Props) => {
	const editingCS = useCombinedStore((state) => state.cSheets.editingSheet);
	const setEditingCS = useCombinedStore((state) => state.cSheets.setEditingSheet);

	if (!editingCS) return <div>Loading...</div>;

	const armorClass = editingCS.character.stats.ac;

	const toggleModifier = (source: string) => {
		const acCopy: ArmorClass_I = DeepCopy(armorClass);
		const mod = acCopy.modifiers.find((m) => m.description.source === source);
		if (!mod) return;

		mod.enabled = !mod.enabled;
		acCopy.value = calculateTotalCA(acCopy.modifiers);

		const editingCopy: CharacterSheet_I = DeepCopy(editingCS);
		editingCopy.character.stats.ac = acCopy;
		setEditingCS(editingCopy);
	};

	return (
		<PanelTemplate Icon={FaShieldAlt} iconColor="blue" title="Armor Class" className={styles.armorClass}>
			<span className={styles.totalCA}>Total: {armorClass.value}</span>
			<ModifierList modifiers={armorClass.modifiers} toggleModifier={toggleModifier} />
		</PanelTemplate>
	);
};

export default ArmorClass;
