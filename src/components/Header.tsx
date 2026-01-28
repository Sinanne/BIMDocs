"use client";

import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Search from "./Search";

export default function Header() {
    return (
        <header className="header-area flex items-center justify-between px-6 py-3 shadow-sm">
            <div className="flex items-center gap-3">
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
                    <Link href="/docs/what-is-bim" className="nav-link">Documentation</Link>
                </nav>
                <div className="hidden sm:block">
                    <Search />
                </div>
                <ThemeToggle />
            </div>
        </header>
    );
}
