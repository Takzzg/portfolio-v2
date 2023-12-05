import { StateCreator } from "zustand";
import { UserActions_I, UserState_I } from "./user";
import { CSheetsActions_I, CSheetsState_I } from "./cSheets";
import { UserPrefActions_I, UserPreferences_I } from "./userPreferences";

export type UserStateType = UserActions_I & UserState_I;
export type UserPrefType = UserPrefActions_I & UserPreferences_I;
export type CSheetsStateType = CSheetsActions_I & CSheetsState_I;

export interface CombinedState {
	user: UserStateType;
	userPrefs: UserPrefType;
	cSheets: CSheetsStateType;
}

export type StateSlice<T> = StateCreator<
	CombinedState,
	[["zustand/immer", never]],
	[["zustand/persist", Partial<T>]],
	T
>;
