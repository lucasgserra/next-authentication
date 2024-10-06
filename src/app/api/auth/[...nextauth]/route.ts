import axios from "axios";
import NextAuth, {NextAuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

type IUser = {
    id: number;
    name: string;
    email: string;
    password: string;
    role: string;
}

const authOptions:NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {type: 'email'},
                password: {type: 'password'}
            },
            async authorize(credentials) {
                try {
                    const axiosReponse = await axios.post('http://localhost:1234/sign-in-user', {
                        email: credentials?.email,
                        password: credentials?.password
                    });

                    const findUser: IUser = axiosReponse.data;

                    if (findUser) {
                        return {
                            id: findUser.id+'',
                            email: findUser.email,
                            name: findUser.name,
                            role: findUser.role
                        }
                    } else {
                        return null;
                    }
                } catch (error) {
                    console.error(error);
                    return null;
                }
            }
        })
    ],
    callbacks: {
        jwt: async ({token, user}) => {
            if (user) {
                const customUser = user as unknown as any;
                return {
                    ...token,
                    role: customUser.role
                };
            } else return token;
        },
        session: async ({session, token}) =>{
            return {
                ...session,
                user: {
                    name: token.name,
                    email: token.email,
                    role: token.role
                }
            }
        }
    },
    pages: {
        signIn: '/'
    },
}

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST} 