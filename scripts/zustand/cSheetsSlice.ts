import type { CSheetsState_I, CSheetsStateType, StateSlice } from "./types";

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
			state.cSheets.editingSheet = value;
		});
	},
});
