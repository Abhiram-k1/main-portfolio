"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 md:px-8 max-w-5xl mx-auto py-20 md:py-28 border-t border-line"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="panel p-8 md:p-12 text-center"
      >
        <p className="eyebrow mb-4">05 — Contact</p>
        <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight mb-4">
          Let&apos;s close the loop
        </h2>
        <p className="text-ink-soft max-w-md mx-auto mb-8">
          Open to internships, research collaborations, and hackathon teams.
          Reach out — I usually reply within a day.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-ink text-paper font-medium text-sm hover:bg-copper transition-colors duration-200"
          >
            <Mail className="w-4 h-4" />
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-ink text-sm font-medium hover:bg-ink hover:text-paper transition-colors duration-200"
          >
            <Phone className="w-4 h-4" />
            {profile.phone}
          </a>
        </div>
        <div className="flex items-center justify-center gap-3 mt-6">
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

      <footer className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-ink-faint">
        <p>© {new Date().getFullYear()} Kundurthi Abhiram. Built with Next.js &amp; Tailwind.</p>
        <p>{profile.location}</p>
      </footer>
    </section>
  );
}
