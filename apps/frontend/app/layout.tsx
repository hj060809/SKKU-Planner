import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClientApolloProvider } from "@/components/ApolloProvider";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  style: 'italic'
});

export const metadata: Metadata = {
  title: "SKKUDULER",
  description: "Automatically generates the course registration list.",
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
          <Navbar/>
          {children}
        </body>
      </html>
    </ClientApolloProvider>
  );
}
