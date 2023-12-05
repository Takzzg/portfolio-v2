import { UserPrefDefaults } from "constants/userPreferences";
import { UserPreferences_I } from "./zustand/userPreferences";

export const LOCAL_STORAGE_ID = "guidoq-portfolio-v2";
export const LOCAL_STORAGE_DEFAULTS: LocalStorageDataStructure_I = {
	USER_PREFERENCES: UserPrefDefaults,
};

export type LocalStorageKey_I = "DISCLAIMER_EXPIRATION" | "USER_DETAILS" | "USER_PREFERENCES";

export const LOCAL_STORAGE_KEYS: Record<LocalStorageKey_I, string> = {
	DISCLAIMER_EXPIRATION: "DISCLAIMER_EXPIRATION",
	USER_DETAILS: "USER_DETAILS",
	USER_PREFERENCES: "USER_PREFERENCES",
};

export type LocalStorageDataStructure_I = {
	DISCLAIMER_EXPIRATION?: string;
	USER_DETAILS?: string;
	USER_PREFERENCES: UserPreferences_I;
};
