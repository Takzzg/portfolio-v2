import { CharacterSheet_I } from "@/types/csEditor/characterSheet/characterSheet";

export const initialCSheetsState: CSheetsState_I = {
	userSheets: [],
	editingSheet: null,
};

export interface CSheetsState_I {
	userSheets: any[];
	editingSheet: CharacterSheet_I | null;
}

export interface CSheetsActions_I {
	setUserSheets: (value: any[]) => void;
	setEditingSheet: (value: CharacterSheet_I) => void;
}
