import DeployButton from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import Navbar from "@/components/navbar";
import logo from '@/public/images/tappIn-logo-no-bg.png';
import { createClient } from "@/utils/supabase/server";
import NProgressProvider from "@/components/nprogress-provider";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();

  return (
    <html lang="en" className={montserrat.className} suppressHydrationWarning>
      <body className="bg-background text-foreground" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NProgressProvider />
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col items-center">
              <Navbar hasEnvVars user={user} />
              <div className="flex flex-col gap-20 w-full p-0">
                {children}
              </div>

              {/* Footer */}
              <footer className="w-full border-t mx-auto text-center text-xs py-12 bg-background">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-8 px-4">
                  <div className="flex items-center gap-3 justify-center mb-4 md:mb-0">
                    <Image
                      src={logo}
                      alt="TappIn Logo"
                      width={70}
                      height={70}
                      className="rounded"
                    />
                  </div>
                  <nav className="flex flex-wrap gap-6 text-sm justify-center mb-4 md:mb-0">
                    <Link href="/about" className="hover:underline text-foreground/80">About</Link>
                    <Link href="/faq" className="hover:underline text-foreground/80">FAQ</Link>
                    <Link href="/contact" className="hover:underline text-foreground/80">Contact</Link>
                    <a href="https://shopee.com/" target="_blank" rel="noopener noreferrer" className="hover:underline text-foreground/80">Order on Shopee</a>
                    <a href="https://www.lazada.com/" target="_blank" rel="noopener noreferrer" className="hover:underline text-foreground/80">Order on Lazada</a>
                  </nav>
                  <div className="flex items-center gap-2 justify-center">
                    <span className="text-foreground/60">&copy; {new Date().getFullYear()} TappIn. All rights reserved.</span>
                    <ThemeSwitcher />
                  </div>
                </div>
              </footer>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
