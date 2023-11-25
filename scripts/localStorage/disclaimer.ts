import { compareExpiration, getNewDisclaimerExpiration } from "../utilities/DateTime";
import { LOCAL_STORAGE_KEYS, lsm_readSingleValue, lsm_updateSingleValue } from "./localStorageManager";

export const createNewDisclaimerExpiration = () => {
	// create new expiration date
	lsm_updateSingleValue(LOCAL_STORAGE_KEYS.DISCLAIMER_EXPIRATION, getNewDisclaimerExpiration());
};

export const checkDisclaimerExpiration = () => {
	// read disclaimer from local storage
	let disclaimerExpiration = lsm_readSingleValue(LOCAL_STORAGE_KEYS.DISCLAIMER_EXPIRATION);

	// check if disclaimer exists
	if (disclaimerExpiration === null) return false;

	// check expiration date (24hs)
	let expValid = compareExpiration(disclaimerExpiration);
	console.log("disclaimer expiration validity =", expValid);
	return expValid;
};
