"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const socials = ["Up", "Fi", "Gh", "In"];
const shadow = { textShadow: "0 2px 20px rgba(0,0,0,0.5)" };

export default function Hero() {
  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] overflow-hidden bg-ink">
      {/* THE VIDEO IS THE HERO. Full bleed, no dark overlays, punchy. */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: "center 12%", filter: "saturate(1.2) contrast(1.08) brightness(1.03)" }}
        src="/hero.mp4"
        poster="/hero-poster.jpg"
        autoPlay muted loop playsInline
      />

      {/* quiet supporting copy, pinned low. text-shadow keeps it legible without any gradient */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="mx-auto max-w-7xl px-5 pb-10 sm:px-8 sm:pb-12">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
            style={shadow} className="label text-bone">
            Freelance Web Developer / Sri Lanka + Worldwide
          </motion.p>

          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            style={shadow} className="display mt-3 max-w-2xl text-3xl text-bone sm:text-5xl">
            Bold, custom websites. Built from scratch.
          </motion.h1>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.42 }}
            className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-0 sm:flex-row">
              <a href="#work" className="group inline-flex items-center justify-center gap-2 bg-terra px-7 py-3.5 display text-base text-ink shadow-lg transition-colors hover:bg-bone">
                See the work <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center border-2 border-bone px-7 py-3.5 display text-base text-bone backdrop-blur-sm transition-colors hover:border-terra hover:text-terra">
                Start a project
              </a>
            </div>

            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a key={s} href="#" className="grid h-10 w-10 place-items-center rounded-full border-2 border-bone/40 label text-bone backdrop-blur-sm transition-colors hover:border-terra hover:bg-terra hover:text-ink">
                  {s}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
