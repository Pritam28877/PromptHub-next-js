import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectoDB } from "@utils/db";

const handlerAuth = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  async session({ session }) {},
  async signIn({ profile }) {
    try {
      await connectoDB();

      //* if some use is already exists

      //*if not , create a new user 
    } catch (error) {}
  },
});
