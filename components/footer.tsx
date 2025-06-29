"use client";

import Image from "next/image";
import Link from "next/link";
import { ThemeSwitcher } from "@/components/theme-switcher";
import logo from "@/public/images/tappIn-logo-no-bg.png";
import { usePathname } from "next/navigation";

export default function Footer() {
    const pathname = usePathname();
    const hideFooterRoutes = ["/rate-limit"];
    const showFooter = !hideFooterRoutes.includes(pathname);
         
  return showFooter ? (
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
          <Link href="/about" className="hover:underline text-foreground/80">
            About
          </Link>
          <Link href="/faq" className="hover:underline text-foreground/80">
            FAQ
          </Link>
          <Link href="/contact" className="hover:underline text-foreground/80">
            Contact
          </Link>
          <a
            href="https://shopee.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-foreground/80"
          >
            Order on Shopee
          </a>
          <a
            href="https://www.lazada.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-foreground/80"
          >
            Order on Lazada
          </a>
        </nav>
        <div className="flex items-center gap-2 justify-center">
          <span className="text-foreground/60">
            &copy; {new Date().getFullYear()} TappIn. All rights reserved.
          </span>
          <ThemeSwitcher />
        </div>
      </div>
    </footer>
  ) : null;
}
