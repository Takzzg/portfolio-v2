// ---------------------------------- Utils ----------------------------------

export type StatModifier = {
	value: number;
	enabled: boolean;
	description: {
		source: string;
		text: string;
	};
};

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
	initiative: any;
	abilities: Abilities_I;
};

// ---------------------------------- Stats ----------------------------------

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
	value: 15;
	modifiers: StatModifier[];
};

type Ability_I = {
	key: string;
	value: number;
	modifiers: StatModifier[];
};

export type Abilities_I = {
	str: Ability_I;
	dex: Ability_I;
	con: Ability_I;
	int: Ability_I;
	wis: Ability_I;
	cha: Ability_I;
};
