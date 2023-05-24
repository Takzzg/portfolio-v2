import { signIn } from "next-auth/react";

export const UserLogIn = () => {
	signIn().then((r) => {
		console.log("r", r);
	});
};
