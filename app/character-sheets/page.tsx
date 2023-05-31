import CSMannager from "../../components/CharacterSheet/CSMannager/CSMannager";
import CSEditor from "../../components/CharacterSheet/CSEditor/CSEditor";
import { getFeaturedSheets } from "../../scripts/db/character-sheets";
import { getServerSession } from "next-auth";
import { NextAuthConfig } from "../api/auth/[...nextauth]/route";

type Props = {};

const getSession = async () => {
	const session = await getServerSession(NextAuthConfig);
	return session;
};

const CharacterSheets = async (props: Props) => {
	// const featuredCS = await getFeaturedSheets();
	// console.log("featuredCS", featuredCS);

	// const session = await getSession();
	// console.log("session", session);

	return (
		<div>
			<CSMannager />
			<CSEditor />
		</div>
	);
};

export default CharacterSheets;
