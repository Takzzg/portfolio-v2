import { CombinedState } from "@/types/zustand/store";
import { lsm_readPreviousData } from "./localStorageManager";
import { LOCAL_STORAGE_DEFAULTS } from "@/types/localStorage";
import { UserPreferences_I } from "@/types/zustand/userPreferences";

export const syncStoreToLocalStorage = (store: CombinedState) => {
	let data: UserPreferences_I;
	const previousLSdata = lsm_readPreviousData();

	if (previousLSdata?.USER_PREFERENCES) {
		console.log("found existing user preferences");
		data = { ...LOCAL_STORAGE_DEFAULTS.USER_PREFERENCES, ...previousLSdata.USER_PREFERENCES };
	} else {
		console.log("using default user preferences");
		data = LOCAL_STORAGE_DEFAULTS.USER_PREFERENCES;
	}
	console.log("syncing with", data);

	store.userPrefs.setLang(data.language);
	store.userPrefs.setTheme(data.theme.key);
	store.userPrefs.setAccent(data.accent.accent, data.accent.inverted);

	console.log("finished sync:", store);
};
