import { Session } from "next-auth";
import { prisma } from "./prisma";

export const onUserLogIn = async (userDetails: any) => {
	// console.log("userDetails", userDetails);
};

export const getUserDetails = async (session: Session) => {
	if (!session.user) return;

	// search db for user
	const user = await prisma.user.findUnique({ where: { email: session.user.email || undefined } });
	console.log("user", user);

	return user;
};

export const getUserCS = async (session: Session | null) => {
	if (!session?.user) return [];

	// find user
	const user = await getUserDetails(session);
	if (!user) return [];

	// search db for character sheets
	const userCS = await prisma.characterSheet.findMany({ where: { authorId: user.id } });
	console.log("character sheets: ", userCS);

	return userCS;
};
