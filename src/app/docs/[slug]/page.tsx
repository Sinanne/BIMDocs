import { getTopic, getPrevNext, docsData } from "@/data/docs";
import { notFound } from "next/navigation";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getDocContent } from "@/lib/docs-server";
import DocMeta from "@/components/DocMeta";
import NavArrows from "@/components/NavArrows";

export async function generateStaticParams() {
    const params: { slug: string }[] = [];
    for (const tier of docsData) {
        for (const module of tier.modules) {
            for (const item of module.items) {
                params.push({ slug: item.slug });
            }
        }
    }
    return params;
}

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function DocPage({ params }: PageProps) {
    const { slug } = await params;
    const topic = getTopic(slug);
    const { prev, next } = getPrevNext(slug);

    if (!topic) {
        notFound();
    }

    // Try to get content from Markdown file, fallback to docsData content
    const fileContent = await getDocContent(slug);
    const content = fileContent || topic.content || `# ${topic.title}\n\nContent coming soon...`;

    return (
        <div className="content-wrapper">
            <NavArrows prev={prev} next={next} />

            <article className="max-w-none">
                <div className="flex flex-col gap-1 mb-8">
                    <Breadcrumbs />
                    <DocMeta slug={slug} />
                </div>

                <div className="prose max-w-3xl mb-12">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {content}
                    </ReactMarkdown>
                </div>

                {/* Bottom Navigation Cards */}
                <div className="mt-12 pt-8 border-t border-[var(--border-color)]">
                    <div className="flex flex-col sm:flex-row justify-between gap-4">
                        {prev ? (
                            <Link
                                href={`/docs/${prev.slug}`}
                                className="flex-1 p-4 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] transition-all hover:shadow-md group"
                            >
                                <div className="text-sm mb-1 text-[var(--text-muted)]">Previous</div>
                                <div className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-color)] transition-colors">
                                    {prev.title}
                                </div>
                            </Link>
                        ) : (
                            <div className="flex-1" />
                        )}

                        {next ? (
                            <Link
                                href={`/docs/${next.slug}`}
                                className="flex-1 p-4 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] transition-all hover:shadow-md group text-right"
                            >
                                <div className="text-sm mb-1 text-[var(--text-muted)]">Next</div>
                                <div className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-color)] transition-colors">
                                    {next.title}
                                </div>
                            </Link>
                        ) : (
                            <div className="flex-1" />
                        )}
                    </div>
                </div>
            </article>
        </div>
    );
}
