import { BaseInitiativeDexModifier, DEFAULT_MODIFIER_KEYS } from "@/scripts/DnD";
import { DeepCopy } from "@/scripts/utilities/DeepCopy";
import { CharacterSheet_I } from "@/types/csEditor/characterSheet/characterSheet";
import { Initiative_I } from "@/types/csEditor/characterSheet/stats/initiative";
import { getTotal } from "../modifiers";

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
