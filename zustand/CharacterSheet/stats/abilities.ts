import { DeepCopy } from "@/scripts/utilities/DeepCopy";
import { CharacterSheet_I } from "@/types/csEditor/characterSheet/characterSheet";
import { Abilities_I, AbilityKey_I } from "@/types/csEditor/characterSheet/stats/abilities";
import { getTotal } from "../modifiers";

export const applyAllAbilityModifiers = (sheet: CharacterSheet_I): Abilities_I => {
	const csCopy: CharacterSheet_I = DeepCopy(sheet);
	const abilitiesCopy = csCopy.character.stats.abilities;
	Object.keys(abilitiesCopy).forEach((key: string) => {
		const ability = abilitiesCopy[key as AbilityKey_I];
		ability.value = getTotal(ability.baseRoll, ability.modifiers, sheet);
	});
	return abilitiesCopy;
};
