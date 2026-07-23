"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-6 md:px-8 max-w-5xl mx-auto py-20 md:py-28 border-t border-line"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="eyebrow mb-4">02 — Experience</p>
        <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight mb-12 max-w-2xl">
          Where the current has flowed so far
        </h2>
      </motion.div>

      <div className="relative">
        {/* Vertical trace line */}
        <div
          className="absolute left-[7px] top-2 bottom-2 w-px bg-line hidden sm:block"
          aria-hidden="true"
        />

        <ol className="space-y-10">
          {experience.map((exp, i) => (
            <motion.li
              key={`${exp.role}-${exp.org}`}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.04, 0.3) }}
              className="relative sm:pl-10"
            >
              <span
                className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-copper bg-paper hidden sm:block"
                aria-hidden="true"
              />
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <h3 className="font-display font-semibold text-lg text-ink">
                  {exp.role}{" "}
                  <span className="text-ink-faint font-normal">— {exp.org}</span>
                </h3>
                <span className="eyebrow shrink-0">{exp.period}</span>
              </div>
              <ul className="space-y-1.5">
                {exp.points.map((p) => (
                  <li key={p} className="text-sm md:text-base text-ink-soft flex gap-2">
                    <span className="text-signal mt-2 block w-1 h-1 rounded-full shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
