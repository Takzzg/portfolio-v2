import type { CSheetsState_I, CSheetsStateType, StateSlice } from "./types";

const initialCSheetsState: CSheetsState_I = {
	thud: "",
	waldo: "",
};

export const createCSheetsSlice: StateSlice<CSheetsStateType> = (set) => ({
	...initialCSheetsState,
	setThud: (value) =>
		set((state) => {
			state.cSheets.thud = value;
		}),
	setWaldo: (value) =>
		set((state) => {
			state.cSheets.waldo = value;
		}),
});
