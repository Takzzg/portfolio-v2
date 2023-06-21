export const getModifierString = (value: number) => {
	if (value < 0) return `${value}`;
	return `+${value}`;
};

export const getStringModifierFromValue = (value: number): string => {
	let mod = getAbilityModifierFromValue(value);
	return getModifierString(mod);
};

export const getAbilityModifierFromValue = (value: number): number => {
	let mod = Math.floor((value - 10) / 2);
	return mod;
};
