"use client";

import { useState, useEffect } from "react";

interface DocMetaProps {
    slug: string;
}

export default function DocMeta({ slug }: DocMetaProps) {
    const [likes, setLikes] = useState(0);
    const [views, setViews] = useState(0);
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        // Check if we need to reset old data (migration to v1)
        const resetFlag = localStorage.getItem('real-stats-v1');
        if (!resetFlag) {
            // Clear all old data
            const keysToRemove: string[] = [];
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key && (key.startsWith('likes-') || key.startsWith('views-') || key.startsWith('user-liked-'))) {
                    keysToRemove.push(key);
                }
            }
            keysToRemove.forEach(key => localStorage.removeItem(key));
            localStorage.setItem('real-stats-v1', 'true');
        }

        // Load counts from localStorage
        const storedLikes = localStorage.getItem(`likes-${slug}`);
        const storedViews = localStorage.getItem(`views-${slug}`);
        const userLiked = localStorage.getItem(`user-liked-${slug}`);

        // Real counting: Start at 0 if nothing is stored
        const initialViews = storedViews ? parseInt(storedViews) : 0;
        const initialLikes = storedLikes ? parseInt(storedLikes) : 0;

        // Increment views on every visit (removed session restriction)
        const newViews = initialViews + 1;
        setViews(newViews);
        localStorage.setItem(`views-${slug}`, newViews.toString());

        setLikes(initialLikes);
        setIsLiked(userLiked === "true");
    }, [slug]);

    const handleLike = () => {
        const newIsLiked = !isLiked;
        const newLikes = newIsLiked ? likes + 1 : likes - 1;

        setLikes(newLikes);
        setIsLiked(newIsLiked);

        localStorage.setItem(`likes-${slug}`, newLikes.toString());
        localStorage.setItem(`user-liked-${slug}`, newIsLiked.toString());
    };

    return (
        <div className="meta-bar opacity-80 overflow-hidden">
            <div className="flex items-center gap-3">
                {/* Likes (Left-most) */}
                <div className="meta-item text-[12px]">
                    <button
                        onClick={handleLike}
                        className={`like-button flex items-center gap-1 hover:opacity-100 ${isLiked ? "liked" : ""}`}
                        title={isLiked ? "Unlike" : "Like"}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-3.5 h-3.5"
                            fill={isLiked ? "currentColor" : "none"}
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                        </svg>
                        <span className="font-medium">{likes}</span>
                    </button>
                    <span className="hidden sm:inline">likes</span>
                </div>

                {/* Views (Middle) */}
                <div className="meta-item text-[12px]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                    </svg>
                    <span>{views} views</span>
                </div>

                {/* Last Modified (Right-most) */}
                <div className="meta-item text-[12px]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                    </svg>
                    <span>28 Jan 2026</span>
                </div>
            </div>
        </div>
    );
}
