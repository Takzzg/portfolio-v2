import { AbilityKey_I, Abilities_I } from "@/types/csEditor/characterSheet/stats/abilities";
import { StatModifier } from "@/types/csEditor/modifiers";

export const DEFAULT_MODIFIER_KEYS = {
	BASE_STR: "BASE_STR",
	BASE_DEX: "BASE_DEX",
	BASE_CON: "BASE_CON",
	BASE_INT: "BASE_INT",
	BASE_WIS: "BASE_WIS",
	BASE_CHA: "BASE_CHA",
	BASE_ARMOR_CLASS: "BASE_ARMOR_CLASS",
};

const BaseArmorClassModifier: StatModifier = {
	key: DEFAULT_MODIFIER_KEYS.BASE_ARMOR_CLASS,
	type: "STATIC",
	value: 10,
	enabled: true,
	title: "base armor class",
	description: "base armor class",
};

const mappedAbilityNames: Record<keyof Abilities_I, string> = {
	str: "strength",
	dex: "dexterity",
	con: "constitution",
	int: "intelligence",
	wis: "wisdom",
	cha: "charisma",
};

const createBaseAbilityModifier = (key: AbilityKey_I): StatModifier => {
	let abilityName = mappedAbilityNames[key];
	let modifierKey = `BASE_${key.toUpperCase()}` as keyof typeof DEFAULT_MODIFIER_KEYS;

	let modifier: StatModifier = {
		key: DEFAULT_MODIFIER_KEYS[modifierKey],
		type: "ABILITY",
		ability: key,
		enabled: true,
		// update with translations
		title: key,
		description: `your ${abilityName} modifier`,
	};

	return modifier;
};

export const commonModifiers: Record<keyof typeof DEFAULT_MODIFIER_KEYS, StatModifier> = {
	BASE_ARMOR_CLASS: BaseArmorClassModifier,
	BASE_STR: createBaseAbilityModifier("str"),
	BASE_DEX: createBaseAbilityModifier("dex"),
	BASE_CON: createBaseAbilityModifier("con"),
	BASE_INT: createBaseAbilityModifier("int"),
	BASE_WIS: createBaseAbilityModifier("wis"),
	BASE_CHA: createBaseAbilityModifier("cha"),
};
