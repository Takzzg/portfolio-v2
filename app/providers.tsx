"use client";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import LangProvider from "../context/Lang";

type Props = {
	children?: React.ReactNode;
	session: Session;
};

export const ContextProviders = ({ children, session }: Props) => {
	return (
		<SessionProvider session={session}>
			<LangProvider>{children}</LangProvider>
		</SessionProvider>
	);
};
