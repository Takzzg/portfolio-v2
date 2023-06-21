import React from "react";
import { SavingThrowKey, SavingThrowSingular_I } from "@/types/csEditor/characterSheet/stats/savingThrows";
import { CharacterSheet_I } from "@/types/csEditor/characterSheet/characterSheet";
import { DeepCopy } from "@/scripts/utilities/DeepCopy";
import { useCombinedStore } from "@/zustand/store";
import ModifierList from "@/components/CharacterSheet/ModifierList/ModifierList";
import BaseRoll from "@/components/CharacterSheet/BaseRoll/BaseRoll";
import styles from "./SavingThrowSingular.module.scss";

// update with translations
const getSavingThrowTitle = (type: SavingThrowKey) => {
	switch (type) {
		case "fortitude":
			return { stName: "Fortitude", stAbility: "con" };
		case "reflex":
			return { stName: "Reflex", stAbility: "dex" };
		case "will":
			return { stName: "Will", stAbility: "wis" };
	}
};

type Props = { savingThrowType: SavingThrowKey };

const SavingThrowSingular = (props: Props) => {
	const { savingThrowType } = props;

	const editingCS = useCombinedStore((state) => state.cSheets.editingSheet);
	const setEditingCS = useCombinedStore((state) => state.cSheets.setEditingSheet);

	const savingThrow = editingCS?.character.stats.savingThrows[savingThrowType];

	if (!savingThrow) return <div>Loading...</div>;

	const setEditingSavingThrow = (savingThrow: SavingThrowSingular_I) => {
		const editingCopy: CharacterSheet_I = DeepCopy(editingCS);
		editingCopy.character.stats.savingThrows[savingThrowType] = savingThrow;
		setEditingCS(editingCopy);
	};

	const toggleModifier = (key: string) => {
		const savingThrowCopy: SavingThrowSingular_I = DeepCopy(savingThrow);
		const mod = savingThrowCopy.modifiers.find((m) => m.key === key);

		if (!mod) return;
		mod.enabled = !mod.enabled;

		setEditingSavingThrow(savingThrowCopy);
	};

	const modifyBaseRoll = (value: number) => {
		console.log("value", value);
		const savingThrowCopy: SavingThrowSingular_I = DeepCopy(savingThrow);
		savingThrowCopy.baseSave = value;
		setEditingSavingThrow(savingThrowCopy);
	};

	const { stName, stAbility } = getSavingThrowTitle(savingThrowType);

	return (
		<span className={styles.savingThrowSingular}>
			<div className={styles.title}>
				<span className={styles.name}>{stName}</span>
				<span className={styles.ability}>({stAbility})</span>
			</div>
			<BaseRoll
				value={savingThrow.value}
				onIncrease={() => modifyBaseRoll(savingThrow.baseSave + 1)}
				onDecrease={() => modifyBaseRoll(savingThrow.baseSave - 1)}
			/>
			<ModifierList modifiers={savingThrow.modifiers} toggleModifier={toggleModifier} />
		</span>
	);
};

export default SavingThrowSingular;
