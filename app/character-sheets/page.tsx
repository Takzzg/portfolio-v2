// import React, { useEffect, useMemo, useState } from "react";
import CSMannager from "../../components/CharacterSheet/CSMannager/CSMannager";
import CSEditor from "../../components/CharacterSheet/CSEditor/CSEditor";
// import { PrismaClient } from "@prisma/client";
// import { getServerSession } from "next-auth";
// import { authOptions } from "./api/auth/[...nextauth]";
// import { useSession } from "next-auth/react";
// import { getUserCS } from "./api/db/Users";
// import { CharacterSheet } from "@prisma/client";

type Props = {};

const CharacterSheets = (props: Props) => {
	// const { data: session } = useSession();
	// const [characterSheets, setCharacterSheets] = useState<CharacterSheet[]>([]);

	// useEffect(() => {
	// 	console.log("session", session);
	// 	getUserCS(session).then((sheets) => setCharacterSheets(sheets));
	// }, [session]);

	// console.log("props", props);
	// console.log("characterSheets", characterSheets);

	return (
		<div>
			<CSMannager />
			<CSEditor />
		</div>
	);
};

// export const getServerSideProps = async (context: any) => {
// 	const prisma = new PrismaClient();

// 	const session = await getServerSession(context.req, context.res, authOptions);
// 	if (!session) return redirectToLogin();

// 	const user = await prisma.user.findUnique({ where: { email: session?.user?.email } });
// 	if (!user) return redirectToLogin();

// 	const posts = await prisma.characterSheet.findMany({ where: { authorId: user.id } });
// 	return { props: { session, posts } };
// };

// const redirectToLogin = () => {
// 	return {
// 		redirect: { permanent: false, destination: "/user/Login" },
// 		props: {},
// 	};
// };

export default CharacterSheets;
