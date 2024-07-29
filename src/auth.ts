import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { checkPasswordMatch, getUser } from "@/lib/auth";
import type { NextAuthOptions } from "next-auth";  // Use `type` keyword for TypeScript

// Define the user type to include additional properties
interface CustomUser {
  id?: string;
  role?: string;
  email?: string;
  name?: string;
}

// Extend the session type to include additional properties
interface CustomSession {
  user: CustomUser;
  expires: string; // Include 'expires' to match DefaultSession
}

// Define a type for the JWT token
interface CustomJWT {
  id?: string;
  role?: string;
}

// Define the auth options
const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/signin",
    error: "/signin",
  },
  session: {
    strategy: "jwt", // Ensure this matches one of the allowed strategies
  },
  providers: [
    CredentialsProvider({
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials || typeof credentials.username !== 'string' || typeof credentials.password !== 'string') {
          throw new Error("Credentials are required");
        }

        const { username, password } = credentials;

        const user = await getUser(username);
        if (!user || !user.password || typeof user.password !== 'string') {
          throw new Error("User not found or invalid password");
        }

        const isPasswordMatch = await checkPasswordMatch(password, user.password);
        if (!isPasswordMatch) {
          throw new Error("Invalid credentials");
        }

        return {
          id: user._id.toString(),
          email: user.email,
          name: user.name,
          role: user.role,
        } as CustomUser;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        (token as CustomJWT).role = (user as CustomUser).role;
        (token as CustomJWT).id = (user as CustomUser).id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = (token as CustomJWT).role;
        session.user.id = (token as CustomJWT).id;
      }
      return session as CustomSession;
    },
  },
};

export default NextAuth(authOptions);
