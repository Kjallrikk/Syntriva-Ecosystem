import SectionShell from "../components/SectionShell";
import CardGrid from "../components/CardGrid";

export default function IncomePage() {
  const streams = [
    {
      title: "Faceless TikTok / Shorts",
      body: "End-to-end pipeline from topic selection to script, voiceover, clips, captions, and posting schedule.",
      chip: "Top priority"
    },
    {
      title: "Affiliate Product Funnels",
      body: "Researches products, drafts angles, builds basic lead magnets, and wires tracking to content.",
      chip: "Affiliate"
    },
    {
      title: "Marketplace Listing Amplifier",
      body: "Generates and tests creative angles for promoting marketplace offers via short-form content.",
      chip: "Listings"
    },
    {
      title: "Info Product MVPs",
      body: "Turns validated demand into lean notion-style products or mini courses with launch content.",
      chip: "Digital assets"
    },
    {
      title: "Lead Gen & Partnerships",
      body: "DM scripts, email flows, and positioning for B2B or collab-style deals.",
      chip: "B2B"
    },
    {
      title: "Automation-as-a-service",
      body: "Reusable Syntriva workspaces that can be cloned or operated for others as a service.",
      chip: "Service"
    }
  ];

  return (
    <SectionShell
      title="Income systems"
      kicker="Monetization"
      subtitle="Planned revenue primitives Syntriva is wired to support, starting with free-tool-first execution."
    >
      <CardGrid cards={streams} />
      <div className="mt-6 grid gap-4 md:grid-cols-2 text-xs text-slate-400">
        <div className="card">
          <p className="font-semibold text-slate-100 mb-1">
            Short-term objective
          </p>
          <p>
            Stand up 1–2 faceless channels and an affiliate funnel using only
            free or freemium tools, then iterate based on performance.
          </p>
        </div>
        <div className="card">
          <p className="font-semibold text-slate-100 mb-1">
            Long-term objective
          </p>
          <p>
            Turn Syntriva into a reusable income OS that can be cloned, licensed,
            or operated on behalf of clients.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
