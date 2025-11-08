import SectionShell from "../components/SectionShell";

export default function ContactPage() {
  return (
    <SectionShell
      title="Contact and collaboration"
      kicker="Interface"
      subtitle="Simple entry points for contributors, partners, and early users."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="card space-y-4 text-sm text-slate-300">
          <div>
            <p className="font-semibold text-slate-100 mb-1">
              Primary contact
            </p>
            <p>
              Plug in your preferred email or Discord handle here in the code
              and redeploy.
            </p>
          </div>
          <ul className="space-y-2 text-xs text-slate-400">
            <li>• Builders and automation engineers</li>
            <li>• Content and distribution operators</li>
            <li>• Partners with audiences or offers</li>
          </ul>
        </div>

        <div className="card space-y-4 text-sm text-slate-300">
          <p className="font-semibold text-slate-100 mb-2">
            Lightweight contact form
          </p>
          <p className="text-xs text-slate-400">
            This form is frontend-only by default. Connect it to your backend,
            Airtable, Notion, or a form service when ready.
          </p>
          <form className="space-y-3 text-xs">
            <div className="space-y-1">
              <label className="block text-slate-400">Name</label>
              <input
                className="w-full rounded-lg border border-slate-700 bg-black/40 px-3 py-2 text-xs outline-none focus:border-syntrivaAccent"
                placeholder="Your name or alias"
                type="text"
              />
            </div>
            <div className="space-y-1">
              <label className="block text-slate-400">Contact</label>
              <input
                className="w-full rounded-lg border border-slate-700 bg-black/40 px-3 py-2 text-xs outline-none focus:border-syntrivaAccent"
                placeholder="Email, Discord, or handle"
                type="text"
              />
            </div>
            <div className="space-y-1">
              <label className="block text-slate-400">How you want to plug in</label>
              <textarea
                className="w-full rounded-lg border border-slate-700 bg-black/40 px-3 py-2 text-xs outline-none focus:border-syntrivaAccent min-h-[96px]"
                placeholder="Builder, operator, partner, investor, etc."
              />
            </div>
            <button
              type="button"
              className="w-full rounded-full bg-syntrivaAccent text-black py-2 text-xs font-semibold"
            >
              Submit (placeholder)
            </button>
          </form>
        </div>
      </div>
    </SectionShell>
  );
}
