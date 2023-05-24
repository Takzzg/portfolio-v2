import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import { UserLogIn } from "../../scripts/utilities/UserAuth";

type Props = {};

const Profile = (props: Props) => {
	const router = useRouter();
	const { data: session } = useSession({ required: true, onUnauthenticated: () => router.push("/user/Login") });

	return (
		<div>
			User Profile
			<pre>{JSON.stringify(session, null, 4)}</pre>
			<button onClick={() => signOut()}>Log Out</button>
			<button onClick={() => UserLogIn()}>test</button>
		</div>
	);
};

export default Profile;
