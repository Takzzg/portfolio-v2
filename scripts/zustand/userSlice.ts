import type { UserState_I, UserStateType, StateSlice } from "./types";

const initialUserState: UserState_I = {
	baz: "",
	qux: "",
};

export const createUserSlice: StateSlice<UserStateType> = (set) => ({
	...initialUserState,
	setBaz: (value) =>
		set((state) => {
			state.user.baz = value;
		}),
	setQux: (value) =>
		set((state) => {
			state.user.qux = value;
		}),
});
