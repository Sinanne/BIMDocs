import { docsData } from "@/data/docs";
import { getLastUpdated } from "@/lib/docs-server";
import HeroSearch from "@/components/HeroSearch";
import Link from "next/link";

export default async function Home() {
  const lastUpdated = await getLastUpdated();

  return (
    <div className="pt-2 pb-16 px-6">
      <div className="max-w-4xl mx-auto relative animate-in fade-in slide-in-from-bottom-4 duration-700">

        {/* Dynamic Last Updated Badge */}
        <div className="absolute top-0 right-0 text-[10px] sm:text-xs text-[var(--text-muted)] opacity-60 flex items-center gap-1.5 font-bold tracking-widest bg-[var(--bg-secondary)] px-4 py-1.5 rounded-xl border border-[var(--border-color)] shadow-sm">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
          UPDATED: {lastUpdated.toUpperCase()}
        </div>

        {/* Hero & Introduction */}
        <div className="mb-14 mt-4">
          <h1 className="text-4xl sm:text-6xl font-black mb-6 tracking-tighter leading-none">
            Welcome to <span className="accent-text">BIMDocs</span>
          </h1>

          <div className="prose prose-stone dark:prose-invert max-w-3xl">
            <p className="text-xl sm:text-2xl text-[var(--text-primary)] font-bold tracking-tight leading-snug mb-6">
              The comprehensive open-source documentation for Building Information Modeling.
            </p>
            <div className="grid gap-8 md:grid-cols-2 text-[var(--text-muted)] leading-relaxed">
              <p>
                Our mission is to bridge the gap between architectural theory and digital practice.
                Whether you are an architect, engineer, or student, BIMDocs provides a structured
                roadmap to mastering modern AEC workflows.
              </p>
              <p>
                Explore the fundamentals, master industry standards like ISO 19650,
                and dive deep into technical implementation using tools like Revit and ArchiCAD.
              </p>
            </div>
          </div>
        </div>

        {/* Large ChatGPT-style Search */}
        <div className="mb-24">
          <HeroSearch />
        </div>

        {/* What You'll Learn - Restored & Refined */}
        <div className="mb-24">
          <h2 className="text-2xl font-black tracking-tighter mb-10 text-center">What You'll Learn</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-8 rounded-3xl bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:border-[var(--accent-color)] transition-all group">
              <div className="text-4xl mb-6 bg-[var(--bg-primary)] w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">🏗️</div>
              <h4 className="text-lg font-bold mb-3 tracking-tight">BIM Fundamentals</h4>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">Understand the core principles, history, and collaborative workflows that define the industry.</p>
            </div>
            <div className="p-8 rounded-3xl bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:border-[var(--accent-color)] transition-all group">
              <div className="text-4xl mb-6 bg-[var(--bg-primary)] w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">🔧</div>
              <h4 className="text-lg font-bold mb-3 tracking-tight">Software Tools</h4>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">Technically master industry-leading platforms like Revit, ArchiCAD, and coordination tools.</p>
            </div>
            <div className="p-8 rounded-3xl bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:border-[var(--accent-color)] transition-all group">
              <div className="text-4xl mb-6 bg-[var(--bg-primary)] w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">🌐</div>
              <h4 className="text-lg font-bold mb-3 tracking-tight">Standards</h4>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">In-depth dive into global standards like ISO 19650 and best practices for information management.</p>
            </div>
          </div>
        </div>

        {/* Learning Paths */}
        <div className="mb-24">
          <div className="flex items-center mb-10">
            <h2 className="text-[10px] font-bold tracking-[.3em] uppercase text-[var(--text-muted)] opacity-50 flex items-center gap-6 w-full">
              Learning Paths
              <div className="h-[1px] bg-[var(--border-color)] flex-grow"></div>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Link href="/docs/1.1-what-is-bim" className="path-card !border-blue-500/10 hover:!border-blue-500/40">
              <span className="badge badge-beginner">Foundation</span>
              <div className="text-3xl mb-4 grayscale">🌱</div>
              <h3 className="text-xl font-black mb-2 tracking-tighter text-[var(--text-primary)]">Beginner</h3>
              <div className="mt-auto pt-6 text-[10px] font-bold uppercase tracking-widest text-[var(--accent-color)] flex items-center gap-2">
                Start Here <span className="text-sm">→</span>
              </div>
            </Link>
            <Link href="/docs/4.1-intro-lod" className="path-card !border-yellow-500/10 hover:!border-yellow-500/40">
              <span className="badge badge-intermediate">Practitioner</span>
              <div className="text-3xl mb-4 grayscale">⚙️</div>
              <h3 className="text-xl font-black mb-2 tracking-tighter text-[var(--text-primary)]">Intermediate</h3>
              <div className="mt-auto pt-6 text-[10px] font-bold uppercase tracking-widest text-[var(--accent-color)] flex items-center gap-2">
                Explore Setup <span className="text-sm">→</span>
              </div>
            </Link>
            <Link href="/docs/7.1-intro-iso19650" className="path-card !border-red-500/10 hover:!border-red-500/40">
              <span className="badge badge-advanced">Specialist</span>
              <div className="text-3xl mb-4 grayscale">🏆</div>
              <h3 className="text-xl font-black mb-2 tracking-tighter text-[var(--text-primary)]">Advanced</h3>
              <div className="mt-auto pt-6 text-[10px] font-bold uppercase tracking-widest text-[var(--accent-color)] flex items-center gap-2">
                Management <span className="text-sm">→</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Module Explorer */}
        <div id="explorer" className="mb-24 scroll-mt-20">
          <div className="flex items-center mb-10">
            <h2 className="text-[10px] font-bold tracking-[.3em] uppercase text-[var(--text-muted)] opacity-50 flex items-center gap-6 w-full">
              Module Explorer
              <div className="h-[1px] bg-[var(--border-color)] flex-grow"></div>
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {docsData.flatMap(tier => tier.modules).map((module, idx) => (
              <Link key={idx} href={`/docs/${module.items[0].slug}`} className="module-grid-item group flex items-center p-5 bg-[var(--bg-secondary)] hover:bg-[var(--bg-hover)] rounded-2xl transition-all border border-[var(--border-color)] hover:border-[var(--accent-color)]">
                <div className="w-10 h-10 rounded-xl bg-[var(--bg-primary)] flex items-center justify-center mr-5 group-hover:bg-[var(--accent-color)] group-hover:text-white transition-colors font-bold text-xs shadow-sm">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <div className="flex-grow min-w-0">
                  <h4 className="font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-color)] transition-colors truncate">{module.title}</h4>
                  <p className="text-[10px] text-[var(--text-muted)] mt-1 uppercase tracking-widest">{module.items.length} Chapters</p>
                </div>
                <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all text-[var(--accent-color)] text-lg ml-4">→</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Tip - Restored & Slick */}
        <div className="p-10 rounded-[2.5rem] bg-[var(--bg-secondary)] border border-[var(--border-color)] shadow-xl shadow-stone-500/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.07] group-hover:scale-125 transition-all duration-700 pointer-events-none">
            <div className="text-9xl">💡</div>
          </div>
          <div className="relative z-10 flex gap-10 items-center">
            <div className="flex-shrink-0 w-20 h-20 bg-[var(--bg-primary)] rounded-3xl flex items-center justify-center text-5xl shadow-inner group-hover:rotate-12 transition-transform duration-500">
              💡
            </div>
            <div>
              <h4 className="text-2xl font-black mb-3 tracking-tighter">Quick Tip</h4>
              <p className="text-[var(--text-muted)] leading-relaxed max-w-xl text-lg">
                Use the sidebar navigation to explore different topics. Toggle between light and dark mode
                using the button in the header for comfortable reading at any time of day.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-32 pt-12 border-t border-[var(--border-color)] text-center opacity-40">
          <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-[var(--text-muted)]">
            BIMDocs Digital Archive • v1.0
          </p>
        </div>
      </div>
    </div>
  );
}
