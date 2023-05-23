import { compareExpiration, getNewDisclaimerExpiration } from "./DateTime";

const LOCAL_STORAGE_ID = "guidoq-portfolio-v2";

const LS_KEYS = {
	DisclaimerExpiration: "disclaimer_expiration",
};

type DataStruct = { [key: string]: any };

const DefaultLSValues: DataStruct = {};

// ------------------- Helpers -------------------

const _saveDefaultLSValues = () => {
	let stringifiedValues = JSON.stringify(DefaultLSValues);
	localStorage.setItem(LOCAL_STORAGE_ID, stringifiedValues);
};

const _getParsedData = (): DataStruct => {
	let allValues: string | null = localStorage.getItem(LOCAL_STORAGE_ID);

	if (!allValues) {
		_saveDefaultLSValues();
		allValues = JSON.stringify(DefaultLSValues);
	}

	return JSON.parse(allValues);
};

const _getKVPair = (id: string) => {
	let parsedValues = _getParsedData();
	console.log("parsed values", parsedValues);
	if (!parsedValues[id]) return null;
	return { id, value: parsedValues[id] };
};

const _saveKVPair = (id: string, value: any) => {
	let parsedValues = _getParsedData();
	console.log("parsed values", parsedValues);
	parsedValues[id] = value;
	localStorage.setItem(LOCAL_STORAGE_ID, JSON.stringify(parsedValues));
};

const _deleteKVPair = (id: string) => {
	let parsedValues = _getParsedData();
	delete parsedValues[id];
	localStorage.setItem(LOCAL_STORAGE_ID, JSON.stringify(parsedValues));
};

// ------------------- Disclaimer -------------------

const _createNewDisclaimerExpiration = () => {
	_saveKVPair(LS_KEYS.DisclaimerExpiration, getNewDisclaimerExpiration());
};

export const checkDisclaimerExpiration = () => {
	let disclaimerExpiration = _getKVPair(LS_KEYS.DisclaimerExpiration);
	console.log("disclaimer expiration", disclaimerExpiration);

	if (disclaimerExpiration === null) {
		_createNewDisclaimerExpiration();
		return false;
	}

	// check expiration date (24hs)
	let expValid = compareExpiration(disclaimerExpiration.value);
	console.log("expValid", expValid);
	if (!expValid) _createNewDisclaimerExpiration();
	return expValid;
};
