import { DataStruct } from "@/types/localStorage";

const LOCAL_STORAGE_ID = "guidoq-portfolio-v2";
const LOCAL_STORAGE_DEFAULTS: DataStruct = {};

export const LOCAL_STORAGE_KEYS = {
	DISCLAIMER_EXPIRATION: "DISCLAIMER_EXPIRATION",
	USER_DETAILS: "USER_DETAILS",
};

const _readFromLS = (): DataStruct | null => {
	let oldData: string | null = localStorage.getItem(LOCAL_STORAGE_ID);
	if (oldData === null) return oldData;
	return JSON.parse(oldData);
};

const _writeToLS = (newData: DataStruct) => {
	let stringifiedData = JSON.stringify(newData);
	localStorage.setItem(LOCAL_STORAGE_ID, stringifiedData);
};

export const lsm_checkForPreviousData = (): DataStruct | null => {
	let previousData = _readFromLS();
	return previousData;
};

export const lsm_updateData = (newData: DataStruct | null): DataStruct => {
	if (newData === null) {
		_writeToLS(LOCAL_STORAGE_DEFAULTS);
		return LOCAL_STORAGE_DEFAULTS;
	}

	// possibly more operations here...
	_writeToLS(newData);
	return newData;
};

export const lsm_readSingleValue = (key: string): any => {
	let localStorageData = _readFromLS();
	if (!localStorageData || !localStorageData[key]) return null;
	return localStorageData[key];
};

export const lsm_updateSingleValue = (key: string, value: any): DataStruct => {
	let localStorageData = _readFromLS();
	if (!localStorageData) localStorageData = LOCAL_STORAGE_DEFAULTS;

	localStorageData[key] = value;
	_writeToLS(localStorageData);
	return localStorageData;
};
