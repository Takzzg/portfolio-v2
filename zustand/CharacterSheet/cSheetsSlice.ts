import { CSheetsStateType, CSheetsState_I, StateSlice } from "@/types/zustand";
import { applyAllModifiers } from "./modifiers";

const initialCSheetsState: CSheetsState_I = {
	userSheets: [],
	editingSheet: null,
};

export const createCSheetsSlice: StateSlice<CSheetsStateType> = (set) => ({
	...initialCSheetsState,
	setUserSheets: (value) => {
		set((state) => {
			state.cSheets.userSheets = value;
		});
	},
	setEditingSheet: (value) => {
		set((state) => {
			state.cSheets.editingSheet = applyAllModifiers(value);
		});
	},
});
