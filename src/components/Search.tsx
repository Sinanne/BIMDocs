"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { docsData, DocTopic } from "@/data/docs";
import Link from "next/link";

export default function Search() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<DocTopic[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    // Flatten all topics for searching
    const allTopics = docsData.flatMap(tier =>
        tier.modules.flatMap(module => module.items)
    );

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);

        if (value.trim() === "") {
            setResults([]);
            setIsOpen(false);
            return;
        }

        const filtered = allTopics.filter(topic =>
            topic.title.toLowerCase().includes(value.toLowerCase()) ||
            (topic.content?.toLowerCase().includes(value.toLowerCase()) ?? false)
        );

        setResults(filtered.slice(0, 5)); // Limit to 5 results
        setIsOpen(true);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Escape") {
            setIsOpen(false);
        }
    };

    return (
        <div className="relative" ref={searchRef}>
            <div className="relative">
                <input
                    type="text"
                    value={query}
                    onChange={handleSearch}
                    onKeyDown={handleKeyDown}
                    placeholder="Search docs..."
                    className="w-40 sm:w-64 px-4 py-2 pr-10 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                    style={{
                        backgroundColor: 'var(--bg-secondary)',
                        borderColor: 'var(--border-color)',
                        color: 'var(--text-primary)'
                    }}
                    onFocus={() => {
                        if (query.trim() !== "") setIsOpen(true);
                    }}
                />
                <div className="absolute right-3 top-2.5 text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
            </div>

            {isOpen && results.length > 0 && (
                <div
                    className="absolute top-full right-0 mt-2 w-72 sm:w-96 rounded-lg shadow-xl border overflow-hidden z-50"
                    style={{
                        backgroundColor: 'var(--bg-primary)',
                        borderColor: 'var(--border-color)'
                    }}
                >
                    <ul className="py-2">
                        {results.map((result, idx) => (
                            <li key={idx}>
                                <Link
                                    href={`/docs/${result.slug}`}
                                    className="block px-4 py-2.5 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                    style={{ color: 'var(--text-primary)' }}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-hover)'}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                >
                                    <div className="font-medium text-sm">{result.title}</div>
                                    <div className="text-xs truncate opacity-70 mt-0.5">
                                        {(result.content ?? '').replace(/[#*`]/g, '').slice(0, 60)}...
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {isOpen && query.trim() !== "" && results.length === 0 && (
                <div
                    className="absolute top-full right-0 mt-2 w-64 rounded-lg shadow-xl border p-4 text-center text-sm z-50"
                    style={{
                        backgroundColor: 'var(--bg-primary)',
                        borderColor: 'var(--border-color)',
                        color: 'var(--text-muted)'
                    }}
                >
                    No results found for "{query}"
                </div>
            )}
        </div>
    );
}
