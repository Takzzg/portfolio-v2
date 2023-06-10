import { StateSlice, UserStateType, UserState_I } from "@/types/zustand";

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
