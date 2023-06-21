import { CharacterSheet_I } from "./types/csEditor/characterSheet/characterSheet";

const testSheet: CharacterSheet_I = {
	title: "Test Sheet",
	image: "",
	character: {
		description: {
			name: "",
			race: "",
			alignment: "",
			deity: "",
			size: "",
			age: "",
			gender: "",
			height: "",
			weight: "",
			eyes: "",
			hair: "",
			skin: "",
			speed: "",
		},
		stats: {
			hp: {
				current: 15,
				max: 25,
				temp: {
					override: false,
					current: {
						// --------------- BUG ---------------
						value: 9999,
						// --------------- BUG ---------------
						enabled: false,
					},
					max: {
						value: 50,
						enabled: true,
					},
				},
			},
			ac: {
				value: 15,
				modifiers: [
					{
						key: "WILD_SHAPE",
						type: "STATIC",
						value: 2,
						enabled: false,
						title: "Wild Shape",
						description: "you get +2 CA while you are in wild shape",
					},
				],
			},
			abilities: {
				str: {
					key: "str",
					value: 11,
					baseRoll: 11,
					modifiers: [
						{
							key: "WILD_SHAPE",
							type: "STATIC",
							value: -2,
							enabled: false,
							title: "Wild Shape",
							description: "you get -2 to Strength while you are in wild shape",
						},
					],
				},
				dex: { key: "dex", value: 11, baseRoll: 11, modifiers: [] },
				con: { key: "con", value: 11, baseRoll: 11, modifiers: [] },
				int: { key: "int", value: 11, baseRoll: 11, modifiers: [] },
				wis: { key: "wis", value: 11, baseRoll: 11, modifiers: [] },
				cha: { key: "cha", value: 11, baseRoll: 11, modifiers: [] },
			},
			initiative: {
				value: 11,
				baseRoll: 11,
				modifiers: [],
			},
			savingThrows: {
				fortitude: { value: 0, baseSave: 0, modifiers: [] },
				reflex: { value: 0, baseSave: 0, modifiers: [] },
				will: { value: 0, baseSave: 0, modifiers: [] },
			},
		},
		feats: {},
		cantrips: {
			known: {
				level_0: 5,
			},
		},
		spells: {
			known: {
				level_1: 1,
				level_2: 5,
				level_3: 0,
				level_4: 0,
				level_5: 0,
				level_6: 0,
				level_7: 0,
				level_8: 0,
				level_9: 0,
				level_10: 0,
			},
			dailySlots: {},
			prepared: {},
		},
	},
};

export default testSheet;
