import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { onUserLogIn } from "../../../scripts/utilities/db/Users";

export const authOptions: AuthOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		}),
	],
	callbacks: {
		async signIn(userDetails) {
			const user = await onUserLogIn(userDetails);
			console.log("user", user);
			return true;
		},
		async redirect({ url, baseUrl }) {
			return baseUrl;
		},
		async session({ session, user, token }) {
			return session;
		},
		async jwt({ token, user, account, profile, isNewUser }) {
			return token;
		},
	},
	secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
