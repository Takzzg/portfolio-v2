import { DeepCopy } from "@/scripts/utilities/DeepCopy";
import { CharacterSheet_I } from "@/types/csEditor/characterSheet/characterSheet";
import { ArmorClass_I } from "@/types/csEditor/characterSheet/stats/armorClass";
import { getTotal } from "../modifiers";
import { DEFAULT_MODIFIER_KEYS, commonModifiers } from "@/scripts/DnD/commonModifiers";

export const addArmorClassModifier = (armorClass: ArmorClass_I): ArmorClass_I => {
	const armorClassCopy: ArmorClass_I = DeepCopy(armorClass);
	const missing = !armorClassCopy.modifiers.find((m) => m.key === DEFAULT_MODIFIER_KEYS.BASE_ARMOR_CLASS);
	if (missing) armorClassCopy.modifiers.unshift(commonModifiers.BASE_ARMOR_CLASS);
	return armorClassCopy;
};

export const applyArmorClassModifiers = (sheet: CharacterSheet_I): ArmorClass_I => {
	const csCopy: CharacterSheet_I = DeepCopy(sheet);
	const acCopy = csCopy.character.stats.ac;
	acCopy.value = getTotal(0, acCopy.modifiers, sheet);
	return acCopy;
};
