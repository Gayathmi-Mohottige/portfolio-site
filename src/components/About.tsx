import Reveal from "./Reveal";

const facts = [
  ["Based in", "Sri Lanka. Working worldwide"],
  ["Focus", "Custom web design + development"],
  ["Stack", "Next.js. React. TypeScript. Tailwind"],
  ["Now", "Final year software engineering"],
];

export default function About() {
  return (
    <section id="about" className="bg-ink px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal><p className="label text-terra">01 / About</p></Reveal>
        <div className="mt-8 grid gap-12 md:grid-cols-[1.25fr_1fr]">
          <Reveal>
            <h2 className="display text-4xl text-bone sm:text-6xl">
              I build the websites I&apos;d want for my own brand. Fast, loud, and engineered to the last pixel.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-bone/70">
              Most sites blur together because they start from a template. I start from a blank file and the brand&apos;s real story, then build a custom front end plus the machinery behind it. Carts, payments, booking, AI chat. The finished site looks sharp and works hard.
            </p>
            <dl className="mt-8 border-t-2 border-line">
              {facts.map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-4 border-b-2 border-line py-3.5">
                  <dt className="label text-ash">{k}</dt>
                  <dd className="display text-sm text-bone">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
