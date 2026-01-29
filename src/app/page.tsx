export default function Home() {
  return (
    <div className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="page-title">
            Welcome to <span className="accent-text">BIMDocs</span>
          </h1>
          <p className="page-description">
            Your comprehensive guide to Building Information Modeling. Learn the fundamentals,
            explore advanced concepts, and master the tools shaping the future of AEC.
          </p>
        </div>

        {/* Quick Start Cards */}
        <div className="grid gap-6 md:grid-cols-2 mb-16">
          <a href="/docs/1.1-what-is-bim" className="feature-card">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="card-title">Getting Started</h3>
            <p className="card-description">
              New to BIM? Start here to understand the basics, core concepts, and why BIM matters in modern construction.
            </p>
          </a>

          <a href="/docs/4.1-intro-lod" className="feature-card">
            <div className="text-3xl mb-4">📚</div>
            <h3 className="card-title">Core Concepts</h3>
            <p className="card-description">
              Dive deeper into LOD levels, BIM dimensions, and interoperability standards like IFC.
            </p>
          </a>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="section-title">What You'll Learn</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="info-card">
              <div className="text-2xl mb-3">🏗️</div>
              <h4 className="info-card-title">BIM Fundamentals</h4>
              <p className="info-card-description">Understand the core principles and workflows</p>
            </div>
            <div className="info-card">
              <div className="text-2xl mb-3">🔧</div>
              <h4 className="info-card-title">Software Tools</h4>
              <p className="info-card-description">Master Revit, ArchiCAD, and other platforms</p>
            </div>
            <div className="info-card">
              <div className="text-2xl mb-3">🌐</div>
              <h4 className="info-card-title">Standards</h4>
              <p className="info-card-description">Learn industry standards and best practices</p>
            </div>
          </div>
        </div>

        {/* Tip Box */}
        <div className="tip-box">
          <div className="flex items-start gap-4">
            <div className="text-3xl">💡</div>
            <div>
              <h3 className="tip-title">Quick Tip</h3>
              <p className="tip-description">
                Use the sidebar navigation to explore different topics. Toggle between light and dark mode
                using the button in the header for comfortable reading at any time of day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
