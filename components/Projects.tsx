"use client";

import { motion } from "framer-motion";
import { Zap, ExternalLink } from "lucide-react";
import { projects, projectDomains, academicProjects } from "@/lib/data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-6 md:px-8 max-w-5xl mx-auto py-20 md:py-28 border-t border-line"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="eyebrow mb-4">03 &mdash; Projects</p>
        <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight mb-12 max-w-2xl">
          Things that have shipped
        </h2>
      </motion.div>

      {projectDomains.map((domain, di) => {
        const domainProjects = projects.filter((p) => p.domain === domain);
        if (domainProjects.length === 0) return null;
        return (
          <motion.div
            key={domain}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: Math.min(di * 0.04, 0.2) }}
            className="mb-12"
          >
            <p className="eyebrow mb-5">{domain}</p>
            <div className="grid sm:grid-cols-2 gap-5">
              {domainProjects.map((p, i) => (
                <motion.article
                  key={p.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.25) }}
                  className={`panel p-6 flex flex-col gap-3 transition-shadow duration-300 hover:shadow-[0_8px_30px_-12px_rgba(28,31,29,0.18)] ${
                    p.signature ? "sm:col-span-2 border-copper/40" : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display font-semibold text-lg text-ink leading-snug">
                      {p.title}
                    </h3>
                    {p.signature && (
                      <span className="shrink-0 inline-flex items-center gap-1 rounded-full bg-copper/10 text-copper text-xs font-mono px-2.5 py-1">
                        <Zap className="w-3 h-3" /> Signature project
                      </span>
                    )}
                  </div>
                  {p.award && (
                    <p className="text-xs font-mono text-signal">{p.award}</p>
                  )}
                  <p className="text-sm md:text-base text-ink-soft leading-relaxed">
                    {p.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-2 pb-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="text-xs font-mono px-2.5 py-1 rounded-full border border-line text-ink-soft"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {(p.link || p.github) && (
                    <div className="mt-4 pt-3 border-t border-line/50 flex flex-wrap gap-4">
                      {p.link && (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-copper hover:text-copper-soft transition-colors"
                        >
                          Open Live App <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-ink-faint hover:text-ink transition-colors"
                        >
                          GitHub <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  )}

                  <p className="text-xs font-mono text-ink-faint mt-2">{p.period}</p>
                </motion.article>
              ))}
            </div>
          </motion.div>
        );
      })}

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="mt-10 panel p-6"
      >
        <h3 className="eyebrow mb-4">Academic semester projects</h3>
        <ul className="grid sm:grid-cols-2 gap-2">
          {academicProjects.map((a) => (
            <li key={a} className="text-sm text-ink-soft flex gap-2">
              <span className="text-copper mt-1.5 block w-1 h-1 rounded-full shrink-0" />
              {a}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
