// /app/api/auth/[...nextauth]/route.ts

import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"

const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;

if (!googleClientId || !googleClientSecret) {
  throw new Error("GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET must be set");
}

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: googleClientId,
      clientSecret: googleClientSecret,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "test@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // 여기에 사용자 인증 로직을 추가합니다.
        // 예를 들어, 데이터베이스에서 사용자를 찾습니다.
        // 지금은 데모를 위해 하드코딩된 사용자를 반환합니다.
        if (credentials?.email === "test@example.com" && credentials?.password === "password") {
          // 인증 성공 시 사용자 객체를 반환합니다.
          return { id: "1", name: "Test User", email: "test@example.com" };
        } else {
          // 인증 실패 시 null을 반환하면 로그인 페이지에 오류 메시지가 표시됩니다.
          return null;
        }
      },
    }),
  ],
})

export { handler as GET, handler as POST }