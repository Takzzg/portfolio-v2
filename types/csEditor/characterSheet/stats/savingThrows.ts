import { StatModifier } from "../../modifiers";

export type SavingThrows_I = {
	fortitude: SavingThrowSingular_I;
	reflex: SavingThrowSingular_I;
	will: SavingThrowSingular_I;
};

export type SavingThrowSingular_I = {
	value: number;
	baseSave: number;
	modifiers: StatModifier[];
};

export type SavingThrowKey = "fortitude" | "reflex" | "will";

export const SavingThrowTypes: SavingThrowKey[] = ["fortitude", "reflex", "will"];
