import { compareExpiration, getNewDisclaimerExpiration } from "../utilities/DateTime";
import { LOCAL_STORAGE_KEYS, lsm_getKVPair, lsm_saveKVPair } from "./manager";

const _createNewDisclaimerExpiration = () => {
	lsm_saveKVPair(LOCAL_STORAGE_KEYS.DISCLAIMER_EXPIRATION, getNewDisclaimerExpiration());
};

export const checkDisclaimerExpiration = () => {
	let disclaimerExpiration = lsm_getKVPair(LOCAL_STORAGE_KEYS.DISCLAIMER_EXPIRATION);

	if (disclaimerExpiration === null) {
		_createNewDisclaimerExpiration();
		return false;
	}

	// check expiration date (24hs)
	let expValid = compareExpiration(disclaimerExpiration.value);
	if (!expValid) _createNewDisclaimerExpiration();
	return expValid;
};
