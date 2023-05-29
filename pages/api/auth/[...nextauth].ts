import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { onUserLogIn } from "../db/Users";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	callbacks: {
		async signIn(userDetails: any) {
			await onUserLogIn(userDetails);
			return true;
		},
		async redirect({ url, baseUrl }: any) {
			return baseUrl;
		},
		async session({ session, user, token }: any) {
			return session;
		},
		async jwt({ token, user, account, profile, isNewUser }: any) {
			return token;
		},
	},
};

export default NextAuth(authOptions);
