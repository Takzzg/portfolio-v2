import { DeepCopy } from "@/scripts/utilities/DeepCopy";
import { CharacterSheet_I } from "@/types/csEditor/characterSheet/characterSheet";
import { HitPoints_I } from "@/types/csEditor/characterSheet/stats/hitPoints";

export const applyHitPointModifiers = (sheet: CharacterSheet_I): HitPoints_I => {
	const csCopy: CharacterSheet_I = DeepCopy(sheet);
	const hpCopy = csCopy.character.stats.hp;
	return hpCopy;
};
