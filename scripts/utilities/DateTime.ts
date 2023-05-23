// Luxon
import { DateTime } from "luxon";

const getDate = () => {};
const getTime = () => {};

const _formatHuman2Machine = (value: string) => {
	return DateTime.fromFormat(value, "ff");
};

const _formatMachine2Human = (value: DateTime) => {
	return value.toLocaleString(DateTime.DATETIME_MED);
};

export const getNewDisclaimerExpiration = (): string => {
	let expiration = DateTime.now().plus({ hours: 24 });
	let parsedDate = _formatMachine2Human(expiration);
	return parsedDate;
};

export const compareExpiration = (expirationString: string): boolean => {
	let expiration = _formatHuman2Machine(expirationString);
	return expiration > DateTime.now();
};
