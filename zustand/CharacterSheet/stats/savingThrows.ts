import { DeepCopy } from "@/scripts/utilities/DeepCopy";
import { CharacterSheet_I } from "@/types/csEditor/characterSheet/characterSheet";
import { SavingThrowTypes, SavingThrows_I } from "@/types/csEditor/characterSheet/stats/savingThrows";
import { addMissingModifiers, getTotal } from "../modifiers";
import { StatModifier } from "@/types/csEditor/modifiers";
import { commonModifiers } from "@/scripts/DnD/commonModifiers";

export const applySavingThrowModifiers = (sheet: CharacterSheet_I): SavingThrows_I => {
	const csCopy: CharacterSheet_I = DeepCopy(sheet);
	const savingThrows = csCopy.character.stats.savingThrows;

	SavingThrowTypes.forEach((type) => {
		const selectedST = savingThrows[type];
		selectedST.value = getTotal(selectedST.baseSave, selectedST.modifiers, csCopy);
	});

	return savingThrows;
};

const CommonSTModifiers: { [key: string]: StatModifier[] } = {
	fortitude: [commonModifiers.BASE_CON],
	reflex: [commonModifiers.BASE_DEX],
	will: [commonModifiers.BASE_WIS],
};

export const addSavingThrowModifiers = (savingThrows: SavingThrows_I): SavingThrows_I => {
	const savingThrowsCopy: SavingThrows_I = DeepCopy(savingThrows);

	SavingThrowTypes.forEach((type) => {
		const combinedModifiers = addMissingModifiers(savingThrowsCopy[type].modifiers, CommonSTModifiers[type]);
		savingThrowsCopy[type].modifiers = combinedModifiers;
	});

	return savingThrowsCopy;
};
