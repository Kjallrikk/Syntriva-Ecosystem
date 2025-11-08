import SectionShell from "../components/SectionShell";
import CardGrid from "../components/CardGrid";

export default function EcosystemPage() {
  const layers = [
    {
      title: "Commandry Core",
      body: "Central control layer that routes tasks, evaluates outputs, and manages prioritization across all GPTs.",
      chip: "Layer 0"
    },
    {
      title: "Content Cluster",
      body: "VoiceGPT, ScriptGPT, and CreatorGPT generate long-form and short-form assets from strategic directives.",
      chip: "Layer 1"
    },
    {
      title: "Distribution Cluster",
      body: "Platform-specific agents repurpose, schedule, and deploy content to TikTok, Reels, Shorts, and more.",
      chip: "Layer 2"
    },
    {
      title: "Monetization Cluster",
      body: "OfferGPT, FunnelGPT, and OutreachGPT align traffic with offers, funnels, and outbound sequences.",
      chip: "Layer 3"
    },
    {
      title: "Analytics & Feedback",
      body: "TrackingGPT consumes metrics and qualitative signals to propose strategy adjustments to Commandry.",
      chip: "Feedback"
    },
    {
      title: "Automation & Ops",
      body: "Integrations with no-code tools and schedulers to move assets and data without manual intervention.",
      chip: "Ops"
    }
  ];

  return (
    <SectionShell
      title="Ecosystem map"
      kicker="Architecture"
      subtitle="High-level overview of how the Syntriva stack routes work between GPTs, agents, and tools."
    >
      <div className="card mb-6 text-xs text-slate-300 space-y-3">
        <p className="font-semibold text-slate-100">Flow</p>
        <ol className="list-decimal list-inside space-y-1">
          <li>Commandry receives an objective or income target.</li>
          <li>Content cluster generates assets aligned to that target.</li>
          <li>Distribution cluster fan-outs assets across channels.</li>
          <li>Monetization cluster aligns traffic with offers and funnels.</li>
          <li>Analytics feeds performance back into Commandry.</li>
        </ol>
      </div>

      <CardGrid cards={layers} />
    </SectionShell>
  );
}
