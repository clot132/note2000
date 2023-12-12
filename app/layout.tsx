import AppContextProvider from "@/helpers/ContextProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Keep-notepad",
  description: "Made with love by Web Wizard",
  manifest: "/manifest.json",
  icons: { apple: "/keep.png" },
  themeColor: "#202124",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {typeof window !== "undefined" && (
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.00, minimum-scale=1.00, maximum-scale=2.00"
          />
        </Head>
      )}
      {children && (
        <body>
          <AppContextProvider>
            {/* Render your children within the context provider */}
            {children}
          </AppContextProvider>
        </body>
      )}
    </>
  );
}
