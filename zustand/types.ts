import { CharacterSheet_I } from "@/types/csEditor/characterSheet/characterSheet";
import { StateCreator } from "zustand";

export interface UserState_I {
	id: string | null;
	name: string | null;
	email: string | null;
	image: string | null;
}

export interface UserActions_I {
	setUser: (value: string) => void;
}

export interface CSheetsState_I {
	userSheets: any[];
	editingSheet: CharacterSheet_I | null;
}

export interface CSheetsActions_I {
	setUserSheets: (value: any[]) => void;
	setEditingSheet: (value: CharacterSheet_I) => void;
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
	T
>;
