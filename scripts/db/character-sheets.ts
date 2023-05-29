import { prisma } from "./prisma";

export const getFeaturedSheets = async () => {
	const featured = await prisma.characterSheet.findMany({
		orderBy: { LikesOnCharacterSheet: { _count: "asc" } },
		take: 20,
	});
	return featured;
};
