import SectionShell from "../components/SectionShell";
import CardGrid from "../components/CardGrid";

export default function BlueprintsPage() {
  const cards = [
    {
      title: "Commandry System Prompt",
      body: "Defines the governance rules, routing logic, and decision hierarchy for the entire ecosystem.",
      chip: "Core blueprint"
    },
    {
      title: "VoiceGPT / Content Creator",
      body: "Generates scripts, narratives, and storyboards optimized for faceless channels and repurposing.",
      chip: "Content"
    },
    {
      title: "RepurposeGPT",
      body: "Breaks long-form content into clips, hooks, and snippets per platform with auto-variation.",
      chip: "Distribution"
    },
    {
      title: "OfferGPT",
      body: "Maps audience pain points to concrete offers, affiliate products, and simple info products.",
      chip: "Monetization"
    },
    {
      title: "OutreachGPT",
      body: "Cold DMs, emails, and partnership outreach templates aligned with active funnels.",
      chip: "Growth"
    },
    {
      title: "OperatorGPT",
      body: "Internal process documentation, checklists, and playbooks for the human-in-the-loop operator.",
      chip: "Ops"
    }
  ];

  return (
    <SectionShell
      title="Blueprints and GPT modules"
      kicker="Documentation"
      subtitle="Draft-level overview of the main GPTs and agents that Syntriva expects to run inside the ecosystem."
    >
      <CardGrid cards={cards} />
      <div className="mt-6 text-xs text-slate-400">
        <p className="mb-1 font-semibold text-slate-200">Implementation note</p>
        <p>
          Each module is defined as a standalone system prompt and capability
          sheet so it can be attached to different GUIs, automations, or API
          workflows without rewriting core logic.
        </p>
      </div>
    </SectionShell>
  );
}
