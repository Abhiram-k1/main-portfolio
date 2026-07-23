"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import CircuitPulse from "./CircuitPulse";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 md:pt-40 pb-20 px-6 md:px-8 max-w-5xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="eyebrow mb-5">B.Tech · AI &amp; Data Science · 2024–2028</p>

        <h1 className="font-display font-semibold text-[clamp(2.5rem,7vw,4.75rem)] leading-[1.05] tracking-tight text-ink">
          Kundurthi Abhiram
        </h1>

        <p className="mt-5 max-w-xl text-lg md:text-xl text-ink-soft leading-relaxed">
          {profile.tagline} Currently studying AI &amp; Data Science at Amrita
          Vishwa Vidyapeetham, leading the AI Club, and shipping applied ML
          and IoT projects.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-ink text-paper font-medium text-sm hover:bg-copper transition-colors duration-200"
          >
            View projects
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-ink text-sm font-medium hover:bg-ink hover:text-paper transition-colors duration-200"
          >
            <Mail className="w-4 h-4" />
            Email
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 p-3 rounded-full border border-line hover:border-ink transition-colors duration-200"
            aria-label="GitHub profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 p-3 rounded-full border border-line hover:border-ink transition-colors duration-200"
            aria-label="LinkedIn profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-16 md:mt-20 panel p-6 md:p-8"
      >
        <div className="flex items-center justify-between mb-4">
          <p className="eyebrow">Signal path</p>
          <p className="eyebrow">Kinetic input → AI output</p>
        </div>
        <CircuitPulse />
        <p className="mt-4 text-sm text-ink-faint max-w-md">
          From a footstep-powered IoT generator to ML pipelines — the same
          idea runs through everything below: take a raw input, route it
          cleanly, and produce something useful at the other end.
        </p>
      </motion.div>
    </section>
  );
}
