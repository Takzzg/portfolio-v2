import { lsm_updateUserPrefsValue } from "@/scripts/localStorage/localStorageManager";
import { StateSlice, UserPrefType } from "@/types/zustand/store";
import { UserPreferences_I } from "@/types/zustand/userPreferences";
import { ThemeOptions } from "constants/themes";
import { UserPrefDefaults } from "constants/userPreferences";

const initialUserPreferences: UserPreferences_I = UserPrefDefaults;

export const createUserPrefSlice: StateSlice<UserPrefType> = (set) => ({
	...initialUserPreferences,
	setLang: (langCode) => {
		set((state) => {
			console.log("updating LANG on local storage");
			lsm_updateUserPrefsValue("language", langCode);
			state.userPrefs.language = langCode;
		});
	},
	setTheme: (themeKey) => {
		set((state) => {
			console.log("updating THEME on local storage");
			lsm_updateUserPrefsValue("theme", ThemeOptions[themeKey]);
			state.userPrefs.theme = ThemeOptions[themeKey];
		});
	},
	setAccent: (accent: string, inverted: boolean) => {
		set((state) => {
			console.log("updating ACCENT on local storage");
			lsm_updateUserPrefsValue("accent", { accent, inverted });
			state.userPrefs.accent = { accent, inverted };
		});
	},
});
