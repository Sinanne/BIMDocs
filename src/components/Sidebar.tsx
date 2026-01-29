"use client";

import { docsData } from "@/data/docs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Sidebar() {
    const pathname = usePathname();
    const currentSlug = pathname?.split("/").pop();

    // State to track expanded modules. Key is "TierIndex-ModuleIndex"
    const [expandedModules, setExpandedModules] = useState<Set<string>>(new Set());

    // Auto-expand the module containing the current topic
    useEffect(() => {
        if (!currentSlug) return;

        docsData.forEach((tier, tierIdx) => {
            tier.modules.forEach((module, moduleIdx) => {
                const hasTopic = module.items.some(item => item.slug === currentSlug);
                if (hasTopic) {
                    setExpandedModules(prev => {
                        const newSet = new Set(prev);
                        newSet.add(`${tierIdx}-${moduleIdx}`);
                        return newSet;
                    });
                }
            });
        });
    }, [currentSlug]);

    const toggleModule = (id: string) => {
        setExpandedModules(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    };

    return (
        <aside className="sidebar-area hidden md:block">
            <nav className="flex flex-col gap-6 px-4 py-2 pb-10">
                {docsData.map((tier, tierIdx) => (
                    <div key={tierIdx} className="mb-2">
                        <h3 className="text-secondary font-bold text-xs uppercase tracking-wider mb-3 px-2">
                            {tier.title}
                        </h3>
                        <div className="flex flex-col gap-1">
                            {tier.modules.map((module, moduleIdx) => {
                                const moduleId = `${tierIdx}-${moduleIdx}`;
                                const isExpanded = expandedModules.has(moduleId);
                                const hasActiveItem = module.items.some(item => item.slug === currentSlug);

                                return (
                                    <div key={moduleIdx} className="mb-1">
                                        <button
                                            onClick={() => toggleModule(moduleId)}
                                            className={`w-full flex items-center justify-between text-left px-2 py-1.5 rounded-md text-sm font-medium transition-colors ${hasActiveItem
                                                ? "text-[var(--text-primary)]"
                                                : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)]"
                                                }`}
                                        >
                                            <span className="truncate pr-2">{module.title}</span>
                                            <svg
                                                className={`w-4 h-4 shrink-0 transition-transform duration-200 ${isExpanded ? "rotate-90" : ""}`}
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>

                                        {isExpanded && (
                                            <ul className="mt-1 ml-2 pl-2 border-l border-[var(--border-color)] flex flex-col gap-0.5">
                                                {module.items.map((item, itemIdx) => {
                                                    const isActive = item.slug === currentSlug;
                                                    return (
                                                        <li key={itemIdx}>
                                                            <Link
                                                                href={`/docs/${item.slug}`}
                                                                className={`block py-1.5 px-2 rounded-md text-sm transition-all ${isActive
                                                                    ? "bg-[var(--bg-tertiary)] text-[var(--accent-color)] font-medium border-l-2 border-[var(--accent-color)] rounded-l-none"
                                                                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)]"
                                                                    }`}
                                                            >
                                                                {item.title}
                                                            </Link>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </nav>
        </aside>
    );
}
