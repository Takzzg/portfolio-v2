import { StateSlice, UserStateType } from "@/types/zustand/store";
import { UserState_I } from "@/types/zustand/user";

const initialUserState: UserState_I = {
	id: "",
	name: "",
	email: "",
	image: "",
};

export const createUserSlice: StateSlice<UserStateType> = (set) => ({
	...initialUserState,
	setUser: (value) => {
		set((state) => {
			// state.user = value;
			state.user = { ...state.user, ...value };
		});
	},
});
