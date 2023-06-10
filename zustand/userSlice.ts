import type { UserState_I, UserStateType, StateSlice } from "./types";

const initialUserState: UserState_I = {
	id: "",
	name: "",
	email: "",
	image: "",
};

export const createUserSlice: StateSlice<UserStateType> = (set) => ({
	...initialUserState,
	setUser: (value) => {
		set(() => ({ user: value }));
	},
});
