import { BaseArmorClassModifier, BaseInitiativeDexModifier, DEFAULT_MODIFIER_KEYS } from "@/scripts/DnD";
import { DeepCopy } from "@/scripts/utilities/DeepCopy";
import {
	Abilities_I,
	AbilityKey_I,
	ArmorClass_I,
	CharacterSheet_I,
	HitPoints_I,
	Initiative_I,
} from "@/types/csEditor/characterSheet";
import { getTotal } from "./modifiers";

// --------------------------------- Hitpoints ---------------------------------

export const applyHitPointModifiers = (sheet: CharacterSheet_I): HitPoints_I => {
	const csCopy: CharacterSheet_I = DeepCopy(sheet);
	const hpCopy = csCopy.character.stats.hp;
	return hpCopy;
};

// --------------------------------- Armor Class ---------------------------------

export const addArmorClassModifier = (armorClass: ArmorClass_I): ArmorClass_I => {
	const armorClassCopy: ArmorClass_I = DeepCopy(armorClass);
	const missing = !armorClassCopy.modifiers.find((m) => m.key === DEFAULT_MODIFIER_KEYS.BASE_ARMOR_CLASS);
	if (missing) armorClassCopy.modifiers.unshift(BaseArmorClassModifier);
	return armorClassCopy;
};

export const applyArmorClassModifiers = (sheet: CharacterSheet_I): ArmorClass_I => {
	const csCopy: CharacterSheet_I = DeepCopy(sheet);
	const acCopy = csCopy.character.stats.ac;
	acCopy.value = getTotal(0, acCopy.modifiers, sheet);
	return acCopy;
};

// --------------------------------- Initiative ---------------------------------

export const addInitiativeModifier = (initiative: Initiative_I): Initiative_I => {
	const initiativeCopy: Initiative_I = DeepCopy(initiative);
	const missing = !initiativeCopy.modifiers.find((m) => m.key === DEFAULT_MODIFIER_KEYS.BASE_INITIATIVE_DEX);
	if (missing) initiativeCopy.modifiers.unshift(BaseInitiativeDexModifier);
	return initiativeCopy;
};

export const applyInitiativeModifiers = (sheet: CharacterSheet_I): Initiative_I => {
	const csCopy: CharacterSheet_I = DeepCopy(sheet);
	const initiativeCopy = csCopy.character.stats.initiative;
	initiativeCopy.value = getTotal(initiativeCopy.baseRoll, initiativeCopy.modifiers, sheet);
	return initiativeCopy;
};

// --------------------------------- Abilities ---------------------------------

export const applyAllAbilityModifiers = (sheet: CharacterSheet_I): Abilities_I => {
	const csCopy: CharacterSheet_I = DeepCopy(sheet);
	const abilitiesCopy = csCopy.character.stats.abilities;
	Object.keys(abilitiesCopy).forEach((key: string) => {
		const ability = abilitiesCopy[key as AbilityKey_I];
		ability.value = getTotal(ability.baseRoll, ability.modifiers, sheet);
	});
	return abilitiesCopy;
};
