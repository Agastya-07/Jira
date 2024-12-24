import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { neobrutalism, shadesOfPurple } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TOR-Q",
  description: "Project Management app",
};

export default function RootLayout({ children }) {
  return (
    <>
      <ClerkProvider
        appearance={{
          baseTheme: [shadesOfPurple, neobrutalism],
          elements: {
            formButtonPrimary: "bg-orange-600 hover text-white",
            card: "bg-gray-400",
          },
        }}
      >
        <html lang="en" suppressHydrationWarning>
          <head />

          <body className={`${inter.className} dotted-background`}>
            <ThemeProvider attribute="class" defaultTheme="dark">
              <Header />
              <main className="min-h-screen">{children}</main>
              <footer className="bg-gray-900 py-12">
                <div className="container:mx-auto px-4 text-center text-gray-200">
                  <p>Made with ❤️ by Agastya</p>
                </div>
              </footer>
            </ThemeProvider>
          </body>
        </html>
      </ClerkProvider>
    </>
  );
}
