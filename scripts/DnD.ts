import { StatModifier } from "@/types/csEditor/characterSheet";

export const getAbilityModifierFromValue = (value: number) => {
	let mod = Math.ceil((value - 10) / 2);
	if (mod < 0) return `${mod}`;
	return `+${mod}`;
};

export const BaseArmorClass: StatModifier = {
	value: 10,
	enabled: true,
	description: {
		source: "base armor class",
		text: "base armor class",
	},
};
