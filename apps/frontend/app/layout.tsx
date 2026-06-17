import type { Metadata } from "next";
import { Inter } from "next/font/google";
// @ts-ignore
import "./globals.css";
import { ClientApolloProvider } from "@/components/ApolloProvider";

const inter = Inter({
  subsets: ["latin"],
  style: 'italic'
});

export const metadata: Metadata = {
  title: "Service",
  description: "New Service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClientApolloProvider>
      <html lang="en">
        <body
          className={`${inter.className} antialiased`}
        >
          {children}
        </body>
      </html>
    </ClientApolloProvider>
  );
}
