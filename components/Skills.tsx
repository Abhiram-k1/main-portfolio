"use client";

import { motion } from "framer-motion";
import { skills, certifications, awards } from "@/lib/data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-6 md:px-8 max-w-5xl mx-auto py-20 md:py-28 border-t border-line"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="eyebrow mb-4">04 — Skills &amp; Recognition</p>
        <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight mb-12 max-w-2xl">
          The toolkit, and the proof
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-5 mb-5">
        {Object.entries(skills).map(([category, items], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.2) }}
            className="panel p-6"
          >
            <h3 className="eyebrow mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="text-sm px-3 py-1.5 rounded-full border border-line text-ink-soft font-mono"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="panel p-6"
        >
          <h3 className="eyebrow mb-4">Certifications</h3>
          <ul className="space-y-3 max-h-[420px] overflow-y-auto pr-2">
            {certifications.map((c) => (
              <li
                key={c.name}
                className="text-sm border-b border-line pb-2 last:border-0 last:pb-0"
              >
                <p className="text-ink-soft">{c.name}</p>
                <p className="text-xs font-mono text-ink-faint mt-1">
                  {c.org} · {c.date}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="panel p-6"
        >
          <h3 className="eyebrow mb-4">Awards &amp; Achievements</h3>
          <ul className="space-y-3 max-h-[420px] overflow-y-auto pr-2">
            {awards.map((a) => (
              <li
                key={a.name}
                className="text-sm border-b border-line pb-2 last:border-0 last:pb-0"
              >
                <p className="text-ink-soft">{a.name}</p>
                <p className="text-xs font-mono text-ink-faint mt-1">
                  {a.org} · {a.date}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
