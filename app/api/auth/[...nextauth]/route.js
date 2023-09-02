import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handlerAuth = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  async session({session}){

  },
  async signIn({profile}){
    try {
      
    } catch (error) {
      
    }
  }
});
