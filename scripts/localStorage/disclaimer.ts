import { compareExpiration, getNewDisclaimerExpiration } from "../utilities/DateTime";
import { LOCAL_STORAGE_KEYS, lsm_getKVPair, lsm_saveKVPair } from "./manager";

export const createNewDisclaimerExpiration = () => {
	// create new expiration date
	lsm_saveKVPair(LOCAL_STORAGE_KEYS.DISCLAIMER_EXPIRATION, getNewDisclaimerExpiration());
};

export const checkDisclaimerExpiration = () => {
	// read disclaimer from local storage
	let disclaimerExpiration = lsm_getKVPair(LOCAL_STORAGE_KEYS.DISCLAIMER_EXPIRATION);

	// check if disclaimer exists
	if (disclaimerExpiration === null) return false;

	// check expiration date (24hs)
	let expValid = compareExpiration(disclaimerExpiration.value);
	return expValid;
};
