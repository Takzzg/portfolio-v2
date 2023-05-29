import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { onUserLogIn } from "../../../../scripts/db/users";
import { prisma } from "../../../../scripts/db/prisma";

export const NextAuthConfig: NextAuthOptions = {
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
			return { ...session, user };
		},
		async jwt({ token, user, account, profile, isNewUser }: any) {
			return token;
		},
	},
};

const handler = NextAuth(NextAuthConfig);

export { handler as GET, handler as POST };
