import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { onUserLogIn } from "./utilities";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

export const authOptions = {
	// adapter: PrismaAdapter(prisma),
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	// callbacks: {
	// 	async signIn(userDetails) {
	// 		// const user = await onUserLogIn(userDetails);
	// 		// console.log("user", user);
	// 		return true;
	// 	},
	// 	async redirect({ url, baseUrl }) {
	// 		return baseUrl;
	// 	},
	// 	async session({ session, user, token }) {
	// 		return session;
	// 	},
	// 	async jwt({ token, user, account, profile, isNewUser }) {
	// 		return token;
	// 	},
	// },
};

export default NextAuth(authOptions);
