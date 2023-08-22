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
