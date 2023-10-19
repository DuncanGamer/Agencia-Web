import { getOneUserByEmail } from "@/sanity/utils";
import { checkPassword } from "@/utils/passwordEncryption";
import Credentials from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const githubId = process.env.GITHUB_ID;
const githubSecret = process.env.GITHUB_SECRET;

const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;

export const options = {
  providers: [
    GithubProvider({
      clientId: githubId,
      clientSecret: githubSecret,
    }),
    GoogleProvider({
      clientId: googleClientId,
      clientSecret: googleClientSecret,
    }),
    Credentials({
      name: "Email",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter your email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(credentials) {
        const user = await getOneUserByEmail(credentials?.email);
        if (!user) return console.log("no user");

        const checkPass = await checkPassword(
          credentials?.password,
          user?.password
        );
        if (checkPass) return user;
        else return console.log("Mot de passe est incorrect");
      },
    }),
  ],
};
