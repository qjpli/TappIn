"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HeaderAuth from "./header-auth";
import logo from "@/public/images/tappIn-logo-no-bg.png";

export default function Navbar({ hasEnvVars, user }: { hasEnvVars: boolean, user: any }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const pathname = usePathname();
    const hideNavbarRoutes = ["/rate-limit"];
    const showNavbar = !hideNavbarRoutes.includes(pathname);

    return showNavbar ? (
        <nav className="w-full border-b border-b-foreground/10">
            <div className="w-full max-w-7xl mx-auto flex justify-between items-center h-24 px-5">
                <div className="flex items-center gap-12">
                    <Link href="/" className="relative w-20 h-20">
                        <Image src={logo} alt="Logo" fill priority className="dark:filter dark:invert" />
                    </Link>
                    <div className="hidden md:flex gap-10 font-semibold">
                        <Link
                            href="/"
                            className="relative group transition"
                        >
                            <span className="transition-colors duration-200 group-hover:text-primary">
                                Home
                            </span>
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link
                            href="/about"
                            className="relative group transition"
                        >
                            <span className="transition-colors duration-200 group-hover:text-primary">
                                About Us
                            </span>
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link
                            href="/contact"
                            className="relative group transition"
                        >
                            <span className="transition-colors duration-200 group-hover:text-primary">
                                Contact Us
                            </span>
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </div>
                </div>

                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                <div className="hidden justify-end md:block">
                    <HeaderAuth user={user} />
                </div>
            </div>

            {menuOpen && (
                <div className="md:hidden px-5 pb-4 space-y-2">
                    <Link
                        href="/"
                        onClick={() => setMenuOpen(false)}
                        className="block relative group py-1"
                    >
                        <span className="transition-colors duration-200 group-hover:text-primary">
                            Home
                        </span>
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link
                        href="/about"
                        onClick={() => setMenuOpen(false)}
                        className="block relative group py-1"
                    >
                        <span className="transition-colors duration-200 group-hover:text-primary">
                            About
                        </span>
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link
                        href="/contact"
                        onClick={() => setMenuOpen(false)}
                        className="block relative group py-1"
                    >
                        <span className="transition-colors duration-200 group-hover:text-primary">
                            Contact
                        </span>
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <div className="flex justify-between items-center mt-4 border-t pt-4 border-foreground/10">
                        <HeaderAuth user={user} />
                    </div>
                </div>
            )}
        </nav>
    ) : null;
}
