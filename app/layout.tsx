"use client";

import { SessionProvider } from "next-auth/react";
import LangProvider from "../context/Lang";
import Layout from "../components/Layout/Layout";
import "../styles/common/globals.scss";

export default function RootLayout({ children, session }: { children: React.ReactNode; session: any }) {
	return (
		<html lang="en">
			<body>
				<SessionProvider session={session}>
					<LangProvider>
						<Layout>{children}</Layout>
					</LangProvider>
				</SessionProvider>
			</body>
		</html>
	);
}
