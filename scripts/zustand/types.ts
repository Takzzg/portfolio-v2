import { StateCreator } from "zustand";

export interface UserState_I {
	baz: string;
	qux: string;
}

export interface UserActions_I {
	setBaz: (value: string) => void;
	setQux: (value: string) => void;
}

export interface CSheetsState_I {
	thud: string;
	waldo: string;
}

export interface CSheetsActions_I {
	setThud: (value: string) => void;
	setWaldo: (value: string) => void;
}

export type UserStateType = UserActions_I & UserState_I;
export type CSheetsStateType = CSheetsActions_I & CSheetsState_I;

export interface CombinedState {
	user: UserStateType;
	cSheets: CSheetsStateType;
}

export type StateSlice<T> = StateCreator<
	CombinedState,
	[["zustand/immer", never]],
	[["zustand/persist", Partial<T>]],
	// [],
	T
>;
