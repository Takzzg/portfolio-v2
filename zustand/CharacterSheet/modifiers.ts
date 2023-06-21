import { DeepCopy } from "@/scripts/utilities/DeepCopy";
import { CharacterSheet_I } from "@/types/csEditor/characterSheet/characterSheet";
import { applyAllAbilityModifiers } from "./stats/abilities";
import { applyHitPointModifiers } from "./stats/hitpoints";
import { addInitiativeModifier, applyInitiativeModifiers } from "./stats/initiative";
import { addArmorClassModifier, applyArmorClassModifiers } from "./stats/armorClass";
import { StatModifier } from "@/types/csEditor/modifiers";
import { addSavingThrowModifiers, applySavingThrowModifiers } from "./stats/savingThrows";
import { getAbilityModifierFromValue } from "@/scripts/DnD/utils";

/**
 * runs every time the character sheet changes, checks common modifiers and calculates total values
 *
 * @param sheet character sheet
 * @returns updated character sheet
 */
export const applyAllModifiers = (sheet: CharacterSheet_I): CharacterSheet_I => {
	const csCopy: CharacterSheet_I = DeepCopy(sheet);
	const csModified = addCommonModifiers(csCopy);
	const { stats } = csModified.character;

	stats.abilities = applyAllAbilityModifiers(csModified);
	stats.initiative = applyInitiativeModifiers(csModified);
	stats.hp = applyHitPointModifiers(csModified);
	stats.ac = applyArmorClassModifiers(csModified);
	stats.savingThrows = applySavingThrowModifiers(csModified);

	return csModified;
};

/**
 * add any missing common modifiers to sheet
 *
 * @param sheet character sheet
 * @returns character sheet with common modifiers
 */
const addCommonModifiers = (sheet: CharacterSheet_I): CharacterSheet_I => {
	const csCopy: CharacterSheet_I = DeepCopy(sheet);
	const { stats } = csCopy.character;

	stats.initiative = addInitiativeModifier(stats.initiative);
	stats.ac = addArmorClassModifier(stats.ac);
	stats.savingThrows = addSavingThrowModifiers(stats.savingThrows);

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

export const addMissingModifiers = (targetList: StatModifier[], sourceList: StatModifier[]) => {
	let combinedList: StatModifier[] = DeepCopy(targetList);

	sourceList.forEach((sMod) => {
		if (!combinedList.find((tMod) => tMod.key === sMod.key)) combinedList.push(sMod);
	});
	return combinedList;
};
