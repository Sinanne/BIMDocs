"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getBreadcrumbs } from "@/data/docs";

export default function Breadcrumbs() {
    const pathname = usePathname();
    const slug = pathname?.split("/").pop();

    if (!slug) return null;

    const breadcrumbs = getBreadcrumbs(slug);

    if (!breadcrumbs) return null;

    return (
        <nav className="breadcrumb-nav flex text-sm text-[var(--text-muted)] overflow-x-auto whitespace-nowrap">
            <ol className="flex items-center space-x-2">
                <li>
                    <Link href="/" className="hover:text-[var(--accent-color)] transition-colors">
                        Home
                    </Link>
                </li>
                <li>
                    <span className="mx-1 text-gray-400">/</span>
                </li>
                <li>
                    <Link href="/topics" className="hover:text-[var(--accent-color)] transition-colors">
                        {breadcrumbs.tier}
                    </Link>
                </li>
                <li>
                    <span className="mx-1 text-gray-400">/</span>
                </li>
                <li>
                    <span className="text-[var(--text-secondary)]">
                        {breadcrumbs.module}
                    </span>
                </li>
                <li>
                    <span className="mx-1 text-gray-400">/</span>
                </li>
                <li>
                    <span className="text-[var(--text-primary)] font-medium">
                        {breadcrumbs.topic}
                    </span>
                </li>
            </ol>
        </nav>
    );
}
