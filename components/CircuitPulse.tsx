"use client";

import { motion } from "framer-motion";

/**
 * Signature visual: a schematic circuit board where a pulse of current
 * travels from an "input" node (footstep / sensor) through a trace path
 * to an "output" node (signal / model), echoing the piezoelectric
 * footstep-power project — kinetic input becomes useful signal.
 */
export default function CircuitPulse() {
  const path =
    "M20,140 L20,90 L70,90 L70,40 L160,40 L160,70 L240,70 L240,120 L320,120 L320,60 L400,60 L400,150 L460,150 L460,100 L520,100";

  return (
    <svg
      viewBox="0 0 540 200"
      className="w-full h-auto"
      aria-hidden="true"
      role="img"
    >
      {/* Faint grid of circuit pads */}
      {Array.from({ length: 6 }).map((_, row) =>
        Array.from({ length: 14 }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={20 + col * 40}
            cy={20 + row * 36}
            r="1.4"
            fill="var(--line)"
          />
        ))
      )}

      {/* Base trace */}
      <path
        d={path}
        fill="none"
        stroke="var(--line)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Animated current trace */}
      <motion.path
        d={path}
        fill="none"
        stroke="var(--signal)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="14 700"
        initial={{ strokeDashoffset: 0 }}
        animate={{ strokeDashoffset: -714 }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
      />

      {/* Input node — footstep / sensor */}
      <g>
        <circle cx="20" cy="140" r="9" fill="var(--paper)" stroke="var(--copper)" strokeWidth="2.5" />
        <circle cx="20" cy="140" r="3" fill="var(--copper)" />
        <text
          x="20"
          y="172"
          textAnchor="middle"
          fontFamily="var(--font-mono)"
          fontSize="11"
          fill="var(--ink-faint)"
          letterSpacing="0.05em"
        >
          INPUT
        </text>
      </g>

      {/* Output node — signal / model */}
      <g>
        <circle cx="520" cy="100" r="9" fill="var(--paper)" stroke="var(--signal)" strokeWidth="2.5" />
        <motion.circle
          cx="520"
          cy="100"
          r="3"
          fill="var(--signal)"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
        <text
          x="520"
          y="132"
          textAnchor="middle"
          fontFamily="var(--font-mono)"
          fontSize="11"
          fill="var(--ink-faint)"
          letterSpacing="0.05em"
        >
          OUTPUT
        </text>
      </g>
    </svg>
  );
}
