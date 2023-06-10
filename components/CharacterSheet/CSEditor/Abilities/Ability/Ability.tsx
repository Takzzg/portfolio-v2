"use client";

import React from "react";
import PanelTemplate from "../../../PanelTemplate/PanelTemplate";
import { FaMale } from "react-icons/fa";
import styles from "./Ability.module.scss";
import ModifierList from "../../../ModifierList/ModifierList";
import { DeepCopy } from "@/scripts/utilities/DeepCopy";
import { useCombinedStore } from "@/zustand/store";
import BaseRoll from "@/components/CharacterSheet/BaseRoll/BaseRoll";
import { AbilityKey_I, Ability_I } from "@/types/csEditor/characterSheet/stats/abilities";
import { CharacterSheet_I } from "@/types/csEditor/characterSheet/characterSheet";

const AbilityNames = {
	str: "Strength",
	dex: "Dexterity",
	con: "Constitution",
	int: "Inteligence",
	wis: "Wisdom",
	cha: "Charisma",
};

type Props = { abilityKey: AbilityKey_I };

const Ability = (props: Props) => {
	const { abilityKey } = props;

	const editingCS = useCombinedStore((state) => state.cSheets.editingSheet);
	const setEditingCS = useCombinedStore((state) => state.cSheets.setEditingSheet);
	const ability = useCombinedStore((state) => state.cSheets.editingSheet?.character.stats.abilities[abilityKey]);

	if (!ability) return <div>Loading...</div>;

	const setEditingAbility = (ability: Ability_I) => {
		const editingCopy: CharacterSheet_I = DeepCopy(editingCS);
		editingCopy.character.stats.abilities[abilityKey] = ability;
		setEditingCS(editingCopy);
	};

	const toggleModifier = (modKey: string) => {
		const abilityCopy: Ability_I = DeepCopy(ability);
		const mod = abilityCopy.modifiers.find((m) => m.key === modKey);
		if (!mod) return;
		mod.enabled = !mod.enabled;
		setEditingAbility(abilityCopy);
	};

	const modifyBaseRoll = (value: number) => {
		const abilityCopy: Ability_I = DeepCopy(ability);
		abilityCopy.baseRoll = value;
		setEditingAbility(abilityCopy);
	};

	return (
		<PanelTemplate Icon={FaMale} className={styles.ability} title={AbilityNames[abilityKey]}>
			<span className={styles.total}>Total: {ability.value}</span>
			<BaseRoll
				value={ability.baseRoll}
				onIncrease={() => modifyBaseRoll(ability.baseRoll + 1)}
				onDecrease={() => modifyBaseRoll(ability.baseRoll - 1)}
			/>
			<ModifierList modifiers={ability.modifiers} toggleModifier={toggleModifier} />
		</PanelTemplate>
	);
};

export default Ability;
