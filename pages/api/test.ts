import { PrismaClient, Role } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(request: any, response: any) {
	// const userGuido = await prisma.user.findUnique({ where: { email: "guido98q@gmail.com" } });
	// console.log("userGuido", userGuido);
	// const allAccs = await prisma.account.findMany();
	// console.log("allAccs", allAccs);
	// const accGuido = await prisma.account.findUnique({ where: { id: userGuido?.id } });
	// console.log("accGuido", accGuido);
	// const updatedAcc = await prisma.account.updateMany({
	// 	where: { userId: userGuido?.id },
	// 	data: { role: "ADMIN" },
	// });
	// console.log("updatedAcc", updatedAcc);
	// return response.status(200).json({ updatedAcc });
}
