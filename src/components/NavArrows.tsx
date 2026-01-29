"use client";

import Link from "next/link";
import { DocTopic } from "@/data/docs";

interface NavArrowsProps {
    prev?: DocTopic;
    next?: DocTopic;
}

export default function NavArrows({ prev, next }: NavArrowsProps) {
    return (
        <>
            {/* Previous Arrow */}
            {prev && (
                <Link
                    href={`/docs/${prev.slug}`}
                    className="nav-arrow left"
                    aria-label={`Previous: ${prev.title}`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="nav-arrow-label">{prev.title}</span>
                </Link>
            )}

            {/* Next Arrow */}
            {next && (
                <Link
                    href={`/docs/${next.slug}`}
                    className="nav-arrow right"
                    aria-label={`Next: ${next.title}`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="nav-arrow-label">{next.title}</span>
                </Link>
            )}
        </>
    );
}
