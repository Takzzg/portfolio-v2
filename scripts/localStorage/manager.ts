type DataStruct = { [key: string]: any };

const DefaultLSValues: DataStruct = {};

const LOCAL_STORAGE_ID = "guidoq-portfolio-v2";

export const LOCAL_STORAGE_KEYS = {
	DISCLAIMER_EXPIRATION: "DISCLAIMER_EXPIRATION",
	USER_DETAILS: "USER_DETAILS",
};

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

export const lsm_getKVPair = (id: string) => {
	let parsedValues = _getParsedData();
	if (!parsedValues[id]) return null;
	return { id, value: parsedValues[id] };
};

export const lsm_saveKVPair = (id: string, value: any) => {
	let parsedValues = _getParsedData();
	parsedValues[id] = value;
	localStorage.setItem(LOCAL_STORAGE_ID, JSON.stringify(parsedValues));
};

export const lsm_deleteKVPair = (id: string) => {
	let parsedValues = _getParsedData();
	delete parsedValues[id];
	localStorage.setItem(LOCAL_STORAGE_ID, JSON.stringify(parsedValues));
};
