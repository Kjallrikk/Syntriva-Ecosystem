interface Card {
  title: string;
  body: string;
  chip?: string;
}

interface CardGridProps {
  cards: Card[];
}

export default function CardGrid({ cards }: CardGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {cards.map(card => (
        <article key={card.title} className="card flex flex-col gap-3">
          {card.chip && (
            <span className="inline-flex w-fit rounded-full bg-slate-900 border border-slate-700 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-slate-400">
              {card.chip}
            </span>
          )}
          <h2 className="text-base font-semibold">{card.title}</h2>
          <p className="text-sm text-slate-400">{card.body}</p>
        </article>
      ))}
    </div>
  );
}
