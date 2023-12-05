import { LOCAL_STORAGE_DEFAULTS, LOCAL_STORAGE_ID, LocalStorageDataStructure_I } from "@/types/localStorage";
import { UserPreferences_I } from "@/types/zustand/userPreferences";
import lodash from "lodash";

const LOCAL_STORAGE_LOGGER = !true;
const LSM_INTERNAL_LOGGER = !true;
const LSM_EXTERNAL_LOGGER = !true;

// ---------------------------------- BASICS ----------------------------------

const _readFromLS = (): LocalStorageDataStructure_I | null => {
	const oldData: string | null = localStorage.getItem(LOCAL_STORAGE_ID);

	if (LOCAL_STORAGE_LOGGER) {
		console.log("----------------- READING FROM LOCAL STORAGE -----------------");
		console.log("data on local storage:", oldData ? JSON.parse(oldData) : null);
	}

	if (!oldData) return null;
	return JSON.parse(oldData);
};

const _writeToLS = (newData: LocalStorageDataStructure_I) => {
	if (LOCAL_STORAGE_LOGGER) {
		console.log("----------------- WRITTING TO LOCAL STORAGE -----------------");
		console.log(newData);
	}

	const stringifiedData = JSON.stringify(newData);
	localStorage.setItem(LOCAL_STORAGE_ID, stringifiedData);
};

// ---------------------------------- INTERNAL ----------------------------------

const _lsm_updateData = (newData: LocalStorageDataStructure_I | null): LocalStorageDataStructure_I => {
	if (LSM_INTERNAL_LOGGER) {
		console.log("----------------- WRITTING WITH LSM INTERNAL -----------------");
		console.log("data to write:", newData);
	}

	if (newData === null) {
		if (LSM_INTERNAL_LOGGER)
			console.warn("lsm_updateData() recieved null, using defaults:", LOCAL_STORAGE_DEFAULTS);

		_writeToLS(LOCAL_STORAGE_DEFAULTS);
		return LOCAL_STORAGE_DEFAULTS;
	}

	// possibly more operations here...
	_writeToLS(newData);
	return newData;
};

const _lsm_updateValueOfKey = (key: keyof LocalStorageDataStructure_I, value: any) => {
	let oldData = lsm_readPreviousData();
	let updatedData: LocalStorageDataStructure_I = oldData ? { ...oldData } : { ...LOCAL_STORAGE_DEFAULTS };
	updatedData[key] = value;

	if (lodash.isEqual(updatedData, oldData)) {
		console.warn("new data is deep equal to old data, skipping write to local storage");
		return;
	}
	_lsm_updateData(updatedData);
};

const _lsm_readOrCreateLocalStorageData = (): LocalStorageDataStructure_I => {
	if (LSM_INTERNAL_LOGGER) console.log("reading existing LS data, or creating new if needed");

	let oldData = lsm_readPreviousData();
	if (oldData) {
		if (LSM_INTERNAL_LOGGER) console.log("Found existing data:", oldData);
		return oldData;
	}

	if (LSM_INTERNAL_LOGGER) console.log("No previous data saved, using defaults");
	_lsm_updateData(null);
	return LOCAL_STORAGE_DEFAULTS;
};

// ---------------------------------- EXTERNAL ----------------------------------

export const lsm_readPreviousData = (): LocalStorageDataStructure_I | null => {
	const previousData = _readFromLS();

	if (LSM_EXTERNAL_LOGGER) {
		console.log("----------------- READING FROM LSM -----------------");
		console.log("data on local storage:", previousData);
	}

	return previousData;
};

export const lsm_readSingleKey = (key: keyof LocalStorageDataStructure_I) => {
	let oldData = _lsm_readOrCreateLocalStorageData();
	return oldData[key];
};

export const lsm_updateUserPrefsValue = (key: keyof UserPreferences_I, value: any) => {
	if (LSM_EXTERNAL_LOGGER) {
		console.log("----------------- UPDATING USER PREFS -----------------");
		console.log("key to update:", key);
		console.log("value to save:", value);
	}

	let oldData = _lsm_readOrCreateLocalStorageData();
	oldData.USER_PREFERENCES[key] = value;
	_lsm_updateValueOfKey("USER_PREFERENCES", oldData.USER_PREFERENCES);
};

export const lsm_updateDisclaimerValue = (value: string) => {
	if (LSM_EXTERNAL_LOGGER) {
		console.log("----------------- UPDATING DISCLAIMER EXP -----------------");
		console.log("new disclaimer date:", value);
	}

	let oldData = _lsm_readOrCreateLocalStorageData();
	oldData.DISCLAIMER_EXPIRATION = value;
	_lsm_updateValueOfKey("DISCLAIMER_EXPIRATION", oldData.DISCLAIMER_EXPIRATION);
};

export const lsm_updateUserDetails = () => {
	// some day...
};
