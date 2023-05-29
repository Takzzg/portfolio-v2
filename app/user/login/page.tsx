"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

type Props = {};

const Login = (props: Props) => {
	const { data: session } = useSession();

	if (session) {
		return (
			<div>
				<p>Welcome {session.user?.email}</p>
				<button onClick={() => signOut()}>Sign Out</button>
			</div>
		);
	}

	return (
		<div>
			<p>Please log in</p>
			<button onClick={() => signIn()}>Log In</button>
		</div>
	);
};

export default Login;
