"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { docsData, DocTopic } from "@/data/docs";
import Link from "next/link";

export default function HeroSearch() {
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

        setResults(filtered.slice(0, 6)); // Limit to 6 results for hero
        setIsOpen(true);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && results.length > 0) {
            router.push(`/docs/${results[0].slug}`);
            setIsOpen(false);
        }
        if (e.key === "Escape") {
            setIsOpen(false);
        }
    };

    return (
        <div className="relative w-full max-w-2xl mx-auto" ref={searchRef}>
            <div className="relative group">
                <input
                    type="text"
                    value={query}
                    onChange={handleSearch}
                    onKeyDown={handleKeyDown}
                    placeholder="Search documentation, standards, or workflows..."
                    className="w-full px-8 py-6 pr-16 rounded-3xl border text-xl transition-all focus:outline-none focus:ring-8 focus:ring-blue-500/5 shadow-sm hover:shadow-md focus:shadow-lg"
                    style={{
                        backgroundColor: 'var(--bg-secondary)',
                        borderColor: 'var(--border-color)',
                        color: 'var(--text-primary)'
                    }}
                    onFocus={() => {
                        if (query.trim() !== "") setIsOpen(true);
                    }}
                />
                <button
                    className="absolute right-6 top-1/2 -translate-y-1/2 bg-[var(--text-primary)] text-[var(--bg-primary)] p-3 rounded-2xl hover:opacity-90 transition-all active:scale-95 shadow-sm"
                    onClick={() => {
                        if (results.length > 0) {
                            router.push(`/docs/${results[0].slug}`);
                            setIsOpen(false);
                        }
                    }}
                >
                    <svg className="w-5 h-5 translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14m-7-7l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Results Dropdown */}
            {isOpen && query.trim() !== "" && (
                <div
                    className="absolute top-full left-0 right-0 mt-4 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border overflow-hidden z-50 animate-in fade-in slide-in-from-top-4 duration-300"
                    style={{
                        backgroundColor: 'var(--bg-primary)',
                        borderColor: 'var(--border-color)'
                    }}
                >
                    <div className="p-3 text-[10px] uppercase tracking-widest text-[var(--text-muted)] border-b border-[var(--border-color)] px-6">
                        Search Results
                    </div>
                    {results.length > 0 ? (
                        <div className="py-2">
                            {results.map((result, idx) => (
                                <Link
                                    key={idx}
                                    href={`/docs/${result.slug}`}
                                    className="block px-8 py-5 hover:bg-[var(--bg-hover)] transition-all group/item"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex-grow min-w-0">
                                            <div className="font-bold text-[var(--text-primary)] group-hover/item:text-[var(--accent-color)] transition-colors">{result.title}</div>
                                            <div className="text-xs text-[var(--text-muted)] mt-1 line-clamp-1 opacity-70">
                                                {(result.content ?? '').replace(/[#*`]/g, '').slice(0, 80)}...
                                            </div>
                                        </div>
                                        <div className="ml-4 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all text-[var(--accent-color)]">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5-5 5M6 12h12" />
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="p-10 text-center text-[var(--text-muted)]">
                            <div className="text-3xl mb-3 opacity-50">🔍</div>
                            <div className="text-sm">No topics found for "{query}"</div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
