"use client";

import React, { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";

type Props = {};

const Login = (props: Props) => {
	const { data: session, status } = useSession();

	useEffect(() => {
		console.log("user/login");

		console.log("session", session);
		console.log("status", status);

		if (!(status === "loading") && !session) void signIn("google", { redirect: false });
		if (session) {
			console.log("closing window ?");
			window.close();
		}
	}, [session, status]);

	return (
		<div
			style={{
				width: "100vw",
				height: "100vh",
				position: "absolute",
				left: 0,
				top: 0,
				background: "white",
			}}
		></div>
	);
};

export default Login;
