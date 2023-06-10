// --------------------------------- Modifiers ---------------------------------

import { DeepCopy } from "@/scripts/utilities/DeepCopy";
import { CharacterSheet_I, StatModifier } from "@/types/csEditor/characterSheet";
import {
	addArmorClassModifier,
	addInitiativeModifier,
	applyAllAbilityModifiers,
	applyArmorClassModifiers,
	applyHitPointModifiers,
	applyInitiativeModifiers,
} from "./utils";
import { getAbilityModifierFromValue } from "@/scripts/DnD";

export const applyAllModifiers = (sheet: CharacterSheet_I): CharacterSheet_I => {
	const csCopy: CharacterSheet_I = DeepCopy(sheet);

	const csModified = addCommonModifiers(csCopy);

	const { stats } = csModified.character;

	stats.abilities = applyAllAbilityModifiers(csModified);
	stats.initiative = applyInitiativeModifiers(csModified);
	stats.hp = applyHitPointModifiers(csModified);
	stats.ac = applyArmorClassModifiers(csModified);

	return csModified;
};

const addCommonModifiers = (sheet: CharacterSheet_I): CharacterSheet_I => {
	const csCopy: CharacterSheet_I = DeepCopy(sheet);
	csCopy.character.stats.ac = addArmorClassModifier(csCopy.character.stats.ac);
	csCopy.character.stats.initiative = addInitiativeModifier(csCopy.character.stats.initiative);
	return csCopy;
};

/**
 * checks provided modifier and returns the apropiate value
 *
 * @param modifier target modifier
 * @param sheet characterSheet, required for LINKED modifiers
 * @returns modifier value
 */
const getModifierValue = (modifier: StatModifier, sheet: CharacterSheet_I): number => {
	let value = 0;
	if (modifier.type === "STATIC") value = modifier.value;
	if (modifier.type === "ABILITY")
		value = getAbilityModifierFromValue(sheet.character.stats.abilities[modifier.ability].value);
	return value;
};

/**
 * runs through the modifiers array and adds the value of each one to initialValue
 *
 * @param initialValue initial value
 * @param modifiers modifier array, added to initialValue
 * @param sheet characterSheet, required for LINKED modifiers
 * @returns total value
 */
export const getTotal = (initialValue: number, modifiers: StatModifier[], sheet: CharacterSheet_I): number => {
	let total = initialValue;
	modifiers.forEach((mod) => {
		if (mod.enabled) total += getModifierValue(mod, sheet);
	});
	return total;
};
