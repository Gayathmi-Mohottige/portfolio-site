const words = ["CUSTOM DESIGN", "E-COMMERCE", "PAYMENTS", "BOOKING SYSTEMS", "AI CHAT", "NEXT.JS", "BOLD MOTION", "CONVERSION"];

export default function Marquee() {
  const row = [...words, ...words];
  return (
    <div className="overflow-hidden border-y-4 border-ink bg-terra py-4">
      <div className="marquee flex w-max gap-6 whitespace-nowrap">
        {row.map((w, i) => (
          <span key={i} className="display flex items-center gap-6 text-2xl text-ink sm:text-3xl">
            {w} <span className="text-ink/40">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
