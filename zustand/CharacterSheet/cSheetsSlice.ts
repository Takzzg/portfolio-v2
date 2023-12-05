import { CSheetsStateType, StateSlice } from "@/types/zustand/store";
import { applyAllModifiers } from "./modifiers";
import { initialCSheetsState } from "@/types/zustand/cSheets";

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
