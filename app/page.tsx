import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="grid gap-10 md:grid-cols-[3fr,2fr] items-center">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-syntrivaAccent">
            Syntriva Ecosystem
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            AI-native ecosystem for income, automation, and GPT orchestration.
          </h1>
          <p className="text-sm md:text-base text-slate-400 max-w-xl">
            Syntriva is a modular stack of GPTs, agents, and workflows that
            coordinate content, distribution, and monetization into a single
            controllable system.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link
              href="/ecosystem"
              className="rounded-full bg-syntrivaAccent text-black px-4 py-2 font-medium"
            >
              Explore ecosystem
            </Link>
            <Link
              href="/blueprints"
              className="rounded-full border border-slate-700 px-4 py-2 text-slate-200 hover:bg-slate-900"
            >
              View GPT blueprints
            </Link>
          </div>
          <div className="flex gap-6 text-xs text-slate-500">
            <div>
              <p className="font-semibold text-slate-200">Commandry core</p>
              <p>Orchestrates all income modules</p>
            </div>
            <div>
              <p className="font-semibold text-slate-200">Pluggable GPTs</p>
              <p>Attach or swap agents per channel</p>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="text-sm font-semibold mb-4 text-slate-100">
            Control plane snapshot
          </h2>
          <div className="space-y-4 text-xs text-slate-300">
            <div>
              <p className="font-semibold text-slate-100">Core</p>
              <p>Commandry · Strategy / routing / evaluation</p>
            </div>
            <div>
              <p className="font-semibold text-slate-100">Clusters</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Content engines · VoiceGPT, ScriptGPT, ClipGPT</li>
                <li>Distribution · Scheduler, Repurposer, SnippetGPT</li>
                <li>Monetization · OfferGPT, FunnelGPT, OutreachGPT</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-slate-100">Targets</p>
              <ul className="list-disc list-inside space-y-1">
                <li>TikTok / Reels / Shorts</li>
                <li>Affiliate and marketplace listings</li>
                <li>Info products / lead funnels</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3 text-xs text-slate-400">
        <div className="card">
          <p className="font-semibold text-slate-100 mb-1">
            Modular architecture
          </p>
          <p>Each income stream is a pluggable playbook built from GPTs.</p>
        </div>
        <div className="card">
          <p className="font-semibold text-slate-100 mb-1">
            Free-first tooling
          </p>
          <p>Leverages free or low-cost AI tools before scaling up stack.</p>
        </div>
        <div className="card">
          <p className="font-semibold text-slate-100 mb-1">
            Revenue primitives
          </p>
          <p>Content, traffic, offers, and automation wired end-to-end.</p>
        </div>
      </section>
    </div>
  );
}
