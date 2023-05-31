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
	ac: any;
	initiative: any;
	abilities: any;
};

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
