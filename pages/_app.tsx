import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

import "../styles/common/globals.scss";
import Layout from "../components/Layout/Layout";
import LangProvider from "../context/Lang";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	return (
		<SessionProvider session={session}>
			<LangProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</LangProvider>
		</SessionProvider>
	);
}

export default MyApp;
