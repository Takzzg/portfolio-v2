import { LOCAL_STORAGE_KEYS, lsm_getKVPair, lsm_saveKVPair } from "./manager";

type UserDetails = {
	id: string;
	name: string;
	email: string;
};

export const getUserData = () => {
	let data = lsm_getKVPair(LOCAL_STORAGE_KEYS.USER_DETAILS);
	if (!data) return null;
	return JSON.parse(data.value);
};

export const saveUserData = (userDetails: UserDetails) => {
	lsm_saveKVPair(LOCAL_STORAGE_KEYS.USER_DETAILS, JSON.stringify(userDetails));
};
