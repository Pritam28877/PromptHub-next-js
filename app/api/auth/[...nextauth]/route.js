import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectoDB } from "@utils/db";
import User from "@models/user";

const handlerAuth = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id = sessionUser._id.toString();

      return session;
    },
    async signIn({ profile }) {
      try {
        await connectoDB();

        //* if some use is already exists
        const userExists = await User.findOne({
          email: profile.email,
        });

        //*if not , create a new user
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          });
        }
      } catch (error) {
        console.log("Error checking if user exists: ", error.message);
        return false;
      }
    },
  },
});
export { handlerAuth as GET, handlerAuth as POST };
