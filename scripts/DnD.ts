import { StatModifier } from "@/types/csEditor/utils";

export const DEFAULT_MODIFIER_KEYS = {
	BASE_ARMOR_CLASS: "BASE_ARMOR_CLASS",
	BASE_INITIATIVE_DEX: "BASE_INITIATIVE_DEX",
};

export const getModifierString = (value: number) => {
	if (value < 0) return `${value}`;
	return `+${value}`;
};

export const getStringModifierFromValue = (value: number): string => {
	let mod = getAbilityModifierFromValue(value);
	return getModifierString(mod);
};

export const getAbilityModifierFromValue = (value: number): number => {
	let mod = Math.ceil((value - 10) / 2);
	return mod;
};

export const BaseArmorClassModifier: StatModifier = {
	key: DEFAULT_MODIFIER_KEYS.BASE_ARMOR_CLASS,
	type: "STATIC",
	value: 10,
	enabled: true,
	title: "base armor class",
	description: "base armor class",
};

export const BaseInitiativeDexModifier: StatModifier = {
	key: DEFAULT_MODIFIER_KEYS.BASE_INITIATIVE_DEX,
	type: "ABILITY",
	ability: "dex",
	enabled: true,
	title: "dex modifier",
	description: "your dex modifier is added to your initiative",
};
