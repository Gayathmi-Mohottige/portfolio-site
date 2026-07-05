import { Mail, MessageCircle, ArrowUpRight } from "lucide-react";

const socialLinks = [
  {
    name: "Upwork",
    href: "https://www.upwork.com/freelancers/your-profile",
  },
  {
    name: "Fiverr",
    href: "https://www.fiverr.com/yourusername",
  },
  {
    name: "GitHub",
    href: "https://github.com/Gayathmi-Mohottige",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/gayathmi-mohottige-4328b6294",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-terra px-5 py-28 text-ink sm:px-8 md:py-36">
      <div className="mx-auto max-w-7xl">
        <p className="label text-ink/70">04 / Contact</p>
        <h2 className="mt-6 display text-[3.4rem] leading-[0.9] sm:text-8xl xl:text-9xl">
          LET&apos;S BUILD<br />SOMETHING LOUD.
        </h2>
        <p className="mt-8 max-w-lg text-xl font-medium text-ink/80">
          Got a project, or just want to see if we&apos;re a fit? I reply within a day.
        </p>

        <div className="mt-10 flex flex-col gap-0 sm:flex-row">
          <a href="mailto:hello@gayathmi.dev" className="inline-flex items-center justify-center gap-2 bg-ink px-8 py-4 display text-lg text-bone transition-colors hover:bg-coal">
            <Mail className="h-5 w-5" /> gayathmimohottige@gmail.com
          </a>
          <a href="https://wa.me/94724003092" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border-4 border-ink px-8 py-4 display text-lg text-ink transition-colors hover:bg-ink hover:text-bone">
            <MessageCircle className="h-5 w-5" /> WhatsApp
          </a>
        </div>

        <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t-2 border-ink/30 pt-8">
  {socialLinks.map((link) => (
    <a
      key={link.name}
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="label inline-flex items-center gap-1 text-ink transition-opacity hover:opacity-60"
    >
      {link.name}
      <ArrowUpRight className="h-3.5 w-3.5" />
    </a>
  ))}
</div>
      </div>
    </section>
  );
}
