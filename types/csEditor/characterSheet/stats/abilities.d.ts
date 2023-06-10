import { StatModifier } from "../../modifiers";

export type AbilityKey_I = "str" | "dex" | "con" | "int" | "wis" | "cha";

export type Abilities_I = {
	str: Ability_I;
	dex: Ability_I;
	con: Ability_I;
	int: Ability_I;
	wis: Ability_I;
	cha: Ability_I;
};

type Ability_I = {
	key: string;
	value: number;
	baseRoll: number;
	modifiers: StatModifier[];
};
