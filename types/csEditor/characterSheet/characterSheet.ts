import { Abilities_I } from "./stats/abilities";
import { ArmorClass_I } from "./stats/armorClass";
import { HitPoints_I } from "./stats/hitPoints";
import { Initiative_I } from "./stats/initiative";
import { SavingThrows_I } from "./stats/savingThrows";

export type CharacterSheet_I = {
	title: string;
	image: string;
	character: CharacterData_I;
};

type CharacterData_I = {
	description: any;
	stats: CharacterStats_I;
	feats: any;
	cantrips: any;
	spells: any;
};

type CharacterStats_I = {
	hp: HitPoints_I;
	ac: ArmorClass_I;
	initiative: Initiative_I;
	abilities: Abilities_I;
	savingThrows: SavingThrows_I;
};
