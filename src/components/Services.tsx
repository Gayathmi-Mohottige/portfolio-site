import Reveal from "./Reveal";
import { Palette, ShoppingCart, CalendarClock, Bot, Gauge, Wrench } from "lucide-react";

const services = [
  { icon: Palette, title: "Custom web design", desc: "Bespoke, on-brand interfaces built from scratch. Never a template." },
  { icon: ShoppingCart, title: "E-commerce + payments", desc: "Full storefronts with carts, variants and real checkout via PayHere." },
  { icon: CalendarClock, title: "Booking systems", desc: "Appointment and reservation flows with slot pickers and confirmations." },
  { icon: Bot, title: "AI chat + automation", desc: "Assistants that answer questions, triage and guide visitors to book." },
  { icon: Gauge, title: "Performance + SEO", desc: "Fast, accessible, search-ready builds that load clean on every device." },
  { icon: Wrench, title: "Care + maintenance", desc: "Ongoing updates and improvements so your site keeps earning its keep." },
];

export default function Services() {
  return (
    <section id="services" className="bg-ink px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="label text-terra">03 / Services</p>
          <h2 className="mt-4 max-w-3xl display text-5xl text-bone sm:text-7xl">EVERYTHING YOUR SITE NEEDS</h2>
        </Reveal>

        <div className="mt-12 grid gap-0 border-2 border-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title}>
              <div className="group h-full border-b-2 border-line p-8 transition-colors hover:bg-terra sm:border-r-2">
                <s.icon className="h-9 w-9 text-terra transition-colors group-hover:text-ink" strokeWidth={2.2} />
                <h3 className="mt-6 display text-2xl text-bone transition-colors group-hover:text-ink">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-bone/60 transition-colors group-hover:text-ink/80">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
