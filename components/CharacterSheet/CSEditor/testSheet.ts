import { CharacterSheet_I } from "@/types/csEditor/characterSheet";

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
						value: 35,
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
						value: 5,
						enabled: true,
						description: {
							source: "Dex",
							text: "you get a bonus equal to your Dex modifier",
						},
					},
					{
						value: 2,
						enabled: false,
						description: {
							source: "Wild shape",
							text: "you get +2 CA when you are in wild shape",
						},
					},
				],
			},
			abilities: {
				str: {},
				dex: {},
				con: {},
				int: {},
				wis: {},
				cha: {},
			},
			initiative: {},
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
