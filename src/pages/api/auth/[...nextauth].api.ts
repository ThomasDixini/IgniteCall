import NextAuth, { AuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? '',
            clientSecret: process.env.GOOGLE_SECRET_ID ?? '',
            authorization: {
                params: {
                    scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/calendar'
                }
            }
        })
    ],

    callbacks: {
        async signIn({ account }) {
            if (!account?.scope?.includes('https://www.googleapis.com/auth/calendar')) {
                return 'https://localhost:3000/register/connect-calendar?error=permissions'
            }

            return true;
        }
    }
}

export default NextAuth(authOptions)