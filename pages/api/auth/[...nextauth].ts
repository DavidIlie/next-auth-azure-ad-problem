import NextAuth, { NextAuthOptions } from "next-auth";
import AzureADProvider from "next-auth/providers/azure-ad";

export const authOptions: NextAuthOptions = {
   providers: [
      AzureADProvider({
         clientId: process.env.AUTH_AZURE_CLIENT_ID as string,
         clientSecret: process.env.AUTH_AZURE_CLIENT_SECRET as string,
         tenantId: process.env.AUTH_AZURE_TENANT_ID as string,
         id: "microsoft",
      }),
   ],
};

export default NextAuth(authOptions);
