"use client";

import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Search from "./Search";
import MobileMenu from "./MobileMenu";

export default function Header() {
    return (
        <header className="header-area flex items-center justify-between px-6 py-3 shadow-sm">
            <div className="flex items-center gap-3">
                <MobileMenu />
                <Image
                    src={`${process.env.NODE_ENV === 'production' ? '/BIMDocs' : ''}/logo.png`}
                    alt="BIMDocs Logo"
                    width={40}
                    height={40}
                    className="rounded"
                />
                <div className="flex flex-col">
                    <span className="header-title">
                        BIMDocs
                    </span>
                    <span className="header-subtitle hidden sm:block">
                        Building Information Modeling
                    </span>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <nav className="hidden md:flex gap-6 text-sm font-medium">
                    <Link href="/" className="nav-link">Home</Link>
                    <Link href="/docs/1.1-what-is-bim" className="nav-link">Documentation</Link>
                </nav>
                <div className="hidden sm:block">
                    <Search />
                </div>
                <Link
                    href="/topics"
                    className="p-2 rounded-lg text-[var(--text-muted)] hover:bg-[var(--bg-hover)] hover:text-[var(--accent-color)] transition-colors"
                    title="Topic Map"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                </Link>
                <ThemeToggle />
            </div>
        </header>
    );
}
