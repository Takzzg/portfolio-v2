import { LOCAL_STORAGE_KEYS } from "@/types/localStorage";
import { compareExpiration, getNewDisclaimerExpiration } from "../utilities/DateTime";
import { lsm_readSingleKey, lsm_updateDisclaimerValue } from "./localStorageManager";

export const createNewDisclaimerExpiration = () => {
	// create new expiration date
	lsm_updateDisclaimerValue(getNewDisclaimerExpiration());
};

export const checkDisclaimerExpiration = () => {
	// read disclaimer from local storage
	let disclaimerExpiration = lsm_readSingleKey(LOCAL_STORAGE_KEYS.DISCLAIMER_EXPIRATION);

	// check if disclaimer exists
	if (!disclaimerExpiration || disclaimerExpiration === null) return false;

	// sometimes i hate typescript
	if (typeof disclaimerExpiration !== "string") {
		console.warn("lsm_readSingleKey(DISCLAIMER_EXPIRATION) returned something else than a string");
		return false;
	}

	// check expiration date (24hs)
	let expValid = compareExpiration(disclaimerExpiration);
	console.log("disclaimer expiration validity =", expValid);
	return expValid;
};
