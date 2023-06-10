"use client";

import { AbilityKey_I, Ability_I, CharacterSheet_I } from "@/types/csEditor/characterSheet";
import React from "react";
import PanelTemplate from "../../../PanelTemplate/PanelTemplate";
import { FaMale } from "react-icons/fa";
import styles from "./Ability.module.scss";
import ModifierList from "../../../ModifierList/ModifierList";
import { DeepCopy } from "@/scripts/utilities/DeepCopy";
import { useCombinedStore } from "@/zustand/store";

type Props = { abilityKey: AbilityKey_I };

const Ability = (props: Props) => {
	const { abilityKey } = props;

	const editingCS = useCombinedStore((state) => state.cSheets.editingSheet);
	const setEditingCS = useCombinedStore((state) => state.cSheets.setEditingSheet);
	const ability = useCombinedStore((state) => state.cSheets.editingSheet?.character.stats.abilities[abilityKey]);

	if (!ability) return <div>Loading...</div>;

	const toggleModifier = (modKey: string) => {
		const abilityCopy: Ability_I = DeepCopy(ability);
		let mod = abilityCopy.modifiers.find((m) => m.description.source === modKey);
		if (!mod) return;
		mod.enabled = !mod.enabled;

		let editingCopy: CharacterSheet_I = DeepCopy(editingCS);
		setEditingCS(editingCopy);
	};

	return (
		<PanelTemplate Icon={FaMale} className={styles.ability} title={ability.key}>
			<span className={styles.total}>Total: {ability.value}</span>
			<ModifierList modifiers={ability.modifiers} toggleModifier={toggleModifier} />
		</PanelTemplate>
	);
};

export default Ability;
