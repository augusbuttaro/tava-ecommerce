import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import Container from "@/components/global/Container";
import Providers from "./providers";
import { ClerkProvider } from '@clerk/nextjs'
 
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tava E-Commerce",
  description: "E-Commerce build with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Providers>
            <NavBar />
            <Container>
              {children}
            </Container>
          </Providers>
        </body>
      </html>
    </ClerkProvider>

  );
}
