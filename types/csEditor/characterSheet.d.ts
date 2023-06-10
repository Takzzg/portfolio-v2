// ---------------------------------- Utils ----------------------------------

type _baseStatModifier = {
	key: string;
	enabled: boolean;
	title: string;
	description: string;
};

export type StatModifier = _baseStatModifier &
	({ type: "ABILITY"; ability: AbilityKey_I } | { type: "STATIC"; value: number });

// ---------------------------------- Character Sheet ----------------------------------

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
};

// ---------------------------------- Stats ----------------------------------

export type HitPointKey_I = "current" | "max";

export type HitPoints_I = {
	current: number;
	max: number;
	temp: {
		override: boolean;
		current: {
			value: number;
			enabled: boolean;
		};
		max: {
			value: number;
			enabled: boolean;
		};
	};
};

export type ArmorClass_I = {
	value: number;
	modifiers: StatModifier[];
};

type Ability_I = {
	key: string;
	value: number;
	baseRoll: number;
	modifiers: StatModifier[];
};

export type AbilityKey_I = "str" | "dex" | "con" | "int" | "wis" | "cha";

export type Abilities_I = {
	str: Ability_I;
	dex: Ability_I;
	con: Ability_I;
	int: Ability_I;
	wis: Ability_I;
	cha: Ability_I;
};

export type Initiative_I = {
	value: number;
	baseRoll: number;
	modifiers: StatModifier[];
};
