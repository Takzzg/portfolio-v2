export interface UserState_I {
	id: string | null;
	name: string | null;
	email: string | null;
	image: string | null;
}

export interface UserActions_I {
	setUser: (value: UserState_I) => void;
}
