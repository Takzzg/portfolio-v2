import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const onUserLogIn = async (userDetails: any) => {
	// console.log("userDetails", userDetails);
	const alreadyRegistered = await prisma.user.findUnique({
		where: { id: userDetails.user.id },
	});

	if (alreadyRegistered) {
		console.log("alreadyRegistered", alreadyRegistered);
		return Promise.resolve(alreadyRegistered);
	}

	const { id, name, email, image } = userDetails.user;
	const addedUser = await prisma.user.create({
		data: { id, name, email, image },
	});
	console.log("addedUser", addedUser);

	return Promise.resolve(addedUser);
};
