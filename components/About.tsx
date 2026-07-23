"use client";

import { motion } from "framer-motion";
import { profile, education, languages } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="px-6 md:px-8 max-w-5xl mx-auto py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="eyebrow mb-4">01 — About</p>
        <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight mb-6 max-w-2xl">
          Summary
        </h2>
        <p className="text-ink-soft text-lg leading-relaxed max-w-2xl">
          {profile.summary}
        </p>
      </motion.div>

      <div className="mt-14 grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="panel p-6"
        >
          <h3 className="eyebrow mb-4">Education</h3>
          <div className="space-y-6">
            {education.map((ed) => (
              <div key={ed.degree} className="border-l-2 border-line pl-4">
                <p className="font-display font-semibold text-ink">{ed.degree}</p>
                <p className="text-sm text-ink-soft mt-0.5">{ed.school}</p>
                <p className="text-xs font-mono text-ink-faint mt-1">
                  {ed.period}
                  {ed.detail ? ` · ${ed.detail}` : ""}
                </p>
                <ul className="mt-2 space-y-1">
                  {ed.highlights.map((h) => (
                    <li key={h} className="text-sm text-ink-soft flex gap-2">
                      <span className="text-copper mt-1.5 block w-1 h-1 rounded-full shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="panel p-6 flex flex-col gap-6"
        >
          <div>
            <h3 className="eyebrow mb-4">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {languages.map((l) => (
                <span
                  key={l.name}
                  className="text-sm px-3 py-1.5 rounded-full border border-line font-mono"
                >
                  {l.name}
                  <span className="text-ink-faint"> · {l.level}</span>
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="eyebrow mb-4">Quick facts</h3>
            <ul className="space-y-2 text-sm text-ink-soft">
              <li className="flex justify-between border-b border-line pb-2">
                <span>Location</span>
                <span className="font-mono text-ink">{profile.location}</span>
              </li>
              <li className="flex justify-between border-b border-line pb-2">
                <span>CGPA</span>
                <span className="font-mono text-ink">{profile.cgpa} / 10</span>
              </li>
              <li className="flex justify-between border-b border-line pb-2">
                <span>Role</span>
                <span className="font-mono text-ink">AI Club President</span>
              </li>
              <li className="flex justify-between">
                <span>Competitive rank</span>
                <span className="font-mono text-ink">#1610 — IICPC CodeFest&apos;25</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
