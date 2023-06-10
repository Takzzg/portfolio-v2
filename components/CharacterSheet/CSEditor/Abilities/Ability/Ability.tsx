"use client";

import { AbilityKey_I, Ability_I, CharacterSheet_I } from "@/types/csEditor/characterSheet";
import React from "react";
import PanelTemplate from "../../../PanelTemplate/PanelTemplate";
import { FaMale } from "react-icons/fa";
import styles from "./Ability.module.scss";
import ModifierList from "../../../ModifierList/ModifierList";
import { DeepCopy } from "@/scripts/utilities/DeepCopy";
import { useCombinedStore } from "@/zustand/store";
import PlusMinus from "@/components/UI/Buttons/PlusMinus/PlusMinus";

type Props = { abilityKey: AbilityKey_I };

const calculateFinalModifier = (ability: Ability_I) => {
	let finalValue = ability.baseRoll;
	ability.modifiers.forEach((m) => {
		if (m.enabled) finalValue += m.value;
	});
	return finalValue;
};

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
		const mod = abilityCopy.modifiers.find((m) => m.description.source === modKey);
		if (!mod) return;
		mod.enabled = !mod.enabled;
		abilityCopy.value = calculateFinalModifier(abilityCopy);
		setEditingAbility(abilityCopy);
	};

	const modifyBaseRoll = (value: number) => {
		const abilityCopy: Ability_I = DeepCopy(ability);
		abilityCopy.baseRoll = value;
		abilityCopy.value = calculateFinalModifier(abilityCopy);
		setEditingAbility(abilityCopy);
	};

	return (
		<PanelTemplate Icon={FaMale} className={styles.ability} title={ability.key}>
			<span className={styles.total}>Total: {ability.value}</span>
			<span className={styles.baseRoll}>
				<span className={styles.title}>Base: {ability.baseRoll}</span>
				<PlusMinus
					onIncrease={() => modifyBaseRoll(ability.baseRoll + 1)}
					onDecrease={() => modifyBaseRoll(ability.baseRoll - 1)}
				/>
			</span>
			<ModifierList modifiers={ability.modifiers} toggleModifier={toggleModifier} />
		</PanelTemplate>
	);
};

export default Ability;
