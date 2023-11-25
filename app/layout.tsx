import Layout from "../components/Layout/Layout";
import "../styles/globals.scss";
import { prisma } from "../scripts/db/prisma";
import { getServerSession } from "next-auth";
import { ContextProviders } from "./providers";
import { NextAuthConfig } from "./api/auth/[...nextauth]/route";
import { Analytics } from "@vercel/analytics/react";
import { useCombinedStore } from "@/zustand/store";
import { Metadata } from "next";
import Disclaimer from "@/components/Layout/Disclaimer/Disclaimer";

export const metadata: Metadata = {
	title: "Guido Queiroz",
	description: "Guido Queiroz's Portfolio",
	icons: "/favicon.ico",
};

const initialServerLoad = async () => {
	// console.log("----------------- initial server load STARTED -----------------");

	// const initialState = useCombinedStore.getState();
	// console.log("initialState", initialState);

	const session = await getServerSession(NextAuthConfig);
	// console.log("session", session);
	if (!session) return;

	const user = await prisma.user.findUnique({ where: { id: session.user.id } });
	// console.log("user", user);
	if (!user) return;

	const userSheets = await prisma.characterSheet.findMany({ where: { authorId: user.id } });
	// console.log("characterSheets", userSheets);
	if (!userSheets) return;

	const previousState = useCombinedStore.getState();
	// console.log("previousState", previousState);
	useCombinedStore.setState({
		user: { ...previousState.user, ...user },
		cSheets: { ...previousState.cSheets, userSheets },
	});
	// const updatedStore = useCombinedStore.getState();
	// console.log("updatedStore", updatedStore);

	// console.log("----------------- initial server load FINISHED -----------------");
};

const RootLayout = async ({ children, session }: { children: React.ReactNode; session: any }) => {
	await initialServerLoad();

	return (
		<html lang="en">
			<body>
				<ContextProviders session={session}>
					<Disclaimer />
					<Layout>
						{children}
						<Analytics />
					</Layout>
				</ContextProviders>
			</body>
		</html>
	);
};

export default RootLayout;
