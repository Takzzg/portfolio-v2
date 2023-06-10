import { AbilityKey_I } from "./characterSheet/stats/abilities";

type _baseStatModifier = {
	key: string;
	enabled: boolean;
	title: string;
	description: string;
};

export type StatModifier = _baseStatModifier &
	({ type: "ABILITY"; ability: AbilityKey_I } | { type: "STATIC"; value: number });
