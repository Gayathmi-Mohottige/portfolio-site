import Reveal from "./Reveal";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { n: "01", name: "KINETIK", cat: "E-Commerce. Multi-page", blurb: "Premium activewear store. Product pages, variant cart, WhatsApp ordering and customer accounts.", href: "https://kinetik-store.vercel.app/" },
  { n: "02", name: "GRIZZLE", cat: "E-Commerce. Payments", blurb: "Neo-brutalist smash-burger brand with a full cart and live PayHere card checkout.", href: "https://burger-demo-omega.vercel.app/" },
  { n: "03", name: "BLOOM DENTAL", cat: "Healthcare. Booking + AI", blurb: "Calm dental clinic with slot-based booking and an AI assistant that triages patients.", href: "https://dental-demo-iota-neon.vercel.app/" },
  { n: "04", name: "EMBER & OAK", cat: "Restaurant. Reservations", blurb: "Wood-fired dining site with live table reservations and editorial storytelling.", href: "https://restaurant-demo-one-ochre.vercel.app/" },
  { n: "05", name: "VELA", cat: "SaaS. Product Landing", blurb: "Crisp analytics landing page with a hand-built animated dashboard and live pricing.", href: "https://saas-demo-ebon.vercel.app/" },
];

export default function Work() {
  return (
    <section id="work" className="bg-ink px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex items-end justify-between gap-4">
          <div>
            <p className="label text-terra">02 / Selected work</p>
            <h2 className="mt-4 display text-5xl text-bone sm:text-7xl">RECENT BUILDS</h2>
          </div>
          <p className="label hidden text-ash sm:block">{projects.length} projects</p>
        </Reveal>

        <div className="mt-12 border-t-2 border-line">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 0.05}>
              <a href={p.href} className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 border-b-2 border-line py-7 transition-colors hover:bg-terra sm:gap-8 sm:py-9">
                <span className="label text-ash transition-colors group-hover:text-ink">{p.n}</span>
                <div>
                  <h3 className="display text-3xl text-bone transition-colors group-hover:text-ink sm:text-5xl">{p.name}</h3>
                  <p className="mt-1 label text-terra transition-colors group-hover:text-ink">{p.cat}</p>
                  <p className="mt-3 max-w-xl text-sm text-bone/60 transition-colors group-hover:text-ink/80 sm:text-base">{p.blurb}</p>
                </div>
                <ArrowUpRight className="h-8 w-8 text-bone transition-all group-hover:text-ink group-hover:translate-x-1 group-hover:-translate-y-1 sm:h-12 sm:w-12" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
