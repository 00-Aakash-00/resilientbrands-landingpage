"use client";

import { motion } from "framer-motion";
import { FileCheck, Zap, Lock, CheckCircle } from "lucide-react";

const categories = [
  {
    title: "Compliance",
    icon: FileCheck,
    items: ["PCI DSS", "ISO 27001", "SOC 2", "HIPAA", "GDPR Ready"],
    color: "#10B981",
    description: "Comprehensive regulatory compliance coverage",
    svg: (
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="comp-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="1" />
            <stop offset="50%" stopColor="#10B981" stopOpacity="1" />
            <stop offset="100%" stopColor="#059669" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="comp-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#34D399" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#065F46" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="comp-grad-3" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#6EE7B7" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#047857" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {/* 3D Shield with perspective */}
        <g transform="translate(200, 200)">
          {/* Back layer */}
          <g transform="translate(10, 10)" opacity="0.3">
            <path
              d="M0 -80 L60 -60 L60 20 Q60 60 30 80 L0 100 L-30 80 Q-60 60 -60 20 L-60 -60 Z"
              fill="#064E3B"
            />
          </g>

          {/* Middle layer */}
          <g transform="translate(5, 5)" opacity="0.6">
            <path
              d="M0 -80 L60 -60 L60 20 Q60 60 30 80 L0 100 L-30 80 Q-60 60 -60 20 L-60 -60 Z"
              fill="url(#comp-grad-3)"
            />
          </g>

          {/* Front shield */}
          <path
            d="M0 -80 L60 -60 L60 20 Q60 60 30 80 L0 100 L-30 80 Q-60 60 -60 20 L-60 -60 Z"
            fill="url(#comp-grad-1)"
          />

          {/* Inner shield */}
          <path
            d="M0 -60 L40 -45 L40 15 Q40 45 20 60 L0 75 L-20 60 Q-40 45 -40 15 L-40 -45 Z"
            fill="url(#comp-grad-2)"
            opacity="0.8"
          />

          {/* Checkmark */}
          <path
            d="M-25 0 L-10 15 L25 -20"
            stroke="white"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <circle
              key={i}
              cx={Math.cos((i * 60 * Math.PI) / 180) * 120}
              cy={Math.sin((i * 60 * Math.PI) / 180) * 120}
              r="4"
              fill="#10B981"
              opacity="0.6"
            >
              <animate
                attributeName="opacity"
                values="0.6;1;0.6"
                dur={`${2 + i * 0.3}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </g>

        {/* Background geometric pattern */}
        <g opacity="0.1">
          <rect
            x="50"
            y="50"
            width="80"
            height="80"
            fill="#10B981"
            transform="rotate(45 90 90)"
          />
          <rect
            x="270"
            y="270"
            width="60"
            height="60"
            fill="#10B981"
            transform="rotate(45 300 300)"
          />
        </g>
      </svg>
    ),
  },
  {
    title: "Adversarial & Penetration Testing",
    icon: Zap,
    items: [
      "Exploitation testing",
      "Post exploitation testing",
      "Milestone proof collection",
      "Red team exercises",
      "Social engineering",
    ],
    color: "#F59E0B",
    description: "Advanced security testing methodologies",
    svg: (
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="pen-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="1" />
            <stop offset="50%" stopColor="#EF4444" stopOpacity="1" />
            <stop offset="100%" stopColor="#DC2626" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="pen-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FCD34D" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#F87171" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="pen-grad-3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FB923C" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* 3D Layered blocks */}
        <g transform="translate(200, 200)">
          {/* Back layer blocks */}
          <g transform="translate(15, 15)" opacity="0.4">
            <rect x="-80" y="-60" width="60" height="120" fill="#7C2D12" />
            <rect x="-10" y="-80" width="60" height="100" fill="#7C2D12" />
            <rect x="60" y="-40" width="60" height="110" fill="#7C2D12" />
          </g>

          {/* Middle layer blocks */}
          <g transform="translate(8, 8)" opacity="0.7">
            <rect
              x="-80"
              y="-60"
              width="60"
              height="120"
              fill="url(#pen-grad-3)"
            />
            <rect
              x="-10"
              y="-80"
              width="60"
              height="100"
              fill="url(#pen-grad-2)"
            />
            <rect
              x="60"
              y="-40"
              width="60"
              height="110"
              fill="url(#pen-grad-3)"
            />
          </g>

          {/* Front blocks */}
          <rect
            x="-80"
            y="-60"
            width="60"
            height="120"
            fill="url(#pen-grad-1)"
          />
          <rect
            x="-10"
            y="-80"
            width="60"
            height="100"
            fill="url(#pen-grad-2)"
          />
          <rect
            x="60"
            y="-40"
            width="60"
            height="110"
            fill="url(#pen-grad-1)"
          />

          {/* Connection lines */}
          <path
            d="M-50 0 L-10 -30 L40 -10 L90 20"
            stroke="white"
            strokeWidth="2"
            fill="none"
            opacity="0.6"
          />
          <path
            d="M-50 30 L20 0 L90 -20"
            stroke="white"
            strokeWidth="2"
            fill="none"
            opacity="0.4"
          />

          {/* Glowing points */}
          {[
            { x: -50, y: 0 },
            { x: 20, y: -30 },
            { x: 90, y: 20 },
          ].map((point, i) => (
            <g key={i}>
              <circle
                cx={point.x}
                cy={point.y}
                r="8"
                fill="white"
                opacity="0.9"
              />
              <circle
                cx={point.x}
                cy={point.y}
                r="12"
                fill="white"
                opacity="0.3"
              >
                <animate
                  attributeName="r"
                  values="12;20;12"
                  dur={`${1.5 + i * 0.2}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          ))}
        </g>

        {/* Background pattern */}
        <g opacity="0.1">
          <circle cx="100" cy="100" r="50" fill="#F59E0B" />
          <circle cx="300" cy="300" r="40" fill="#EF4444" />
        </g>
      </svg>
    ),
  },
  {
    title: "Privacy Requirements",
    icon: Lock,
    items: [
      "GDPR",
      "CPPA",
      "DSARs and DPIAs",
      "Data encryption",
      "Privacy by design",
    ],
    color: "#8B5CF6",
    description: "Privacy-first approach to data protection",
    svg: (
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="priv-grad-1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E879F9" stopOpacity="1" />
            <stop offset="40%" stopColor="#A855F7" stopOpacity="1" />
            <stop offset="70%" stopColor="#7C3AED" stopOpacity="1" />
            <stop offset="100%" stopColor="#6D28D9" stopOpacity="1" />
          </radialGradient>
          <linearGradient id="priv-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FBBF24" stopOpacity="1" />
            <stop offset="50%" stopColor="#F472B6" stopOpacity="1" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="1" />
          </linearGradient>
          <radialGradient id="priv-grad-3" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#DDD6FE" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.2" />
          </radialGradient>
        </defs>

        {/* Main circular gradient with depth */}
        <g transform="translate(200, 200)">
          {/* Outer glow */}
          <circle
            cx="0"
            cy="0"
            r="140"
            fill="url(#priv-grad-3)"
            opacity="0.4"
          />

          {/* Back layer */}
          <g transform="translate(10, 10)" opacity="0.3">
            <circle cx="0" cy="0" r="100" fill="#581C87" />
          </g>

          {/* Middle layer */}
          <g transform="translate(5, 5)" opacity="0.6">
            <circle cx="0" cy="0" r="100" fill="url(#priv-grad-1)" />
          </g>

          {/* Main circle */}
          <circle cx="0" cy="0" r="100" fill="url(#priv-grad-1)" />

          {/* Inner gradient circle */}
          <circle cx="0" cy="0" r="70" fill="url(#priv-grad-2)" opacity="0.8" />

          {/* Lock icon */}
          <g transform="scale(2)">
            <rect
              x="-15"
              y="-5"
              width="30"
              height="20"
              rx="3"
              fill="white"
              opacity="0.9"
            />
            <path
              d="M-8 -5 L-8 -12 Q-8 -20 0 -20 Q8 -20 8 -12 L8 -5"
              stroke="white"
              strokeWidth="3"
              fill="none"
              opacity="0.9"
            />
            <circle cx="0" cy="3" r="3" fill="#7C3AED" />
          </g>

          {/* Orbiting elements */}
          {[0, 72, 144, 216, 288].map((angle, i) => (
            <g key={i} transform={`rotate(${angle})`}>
              <circle cx="130" cy="0" r="6" fill="white" opacity="0.7">
                <animate
                  attributeName="opacity"
                  values="0.7;1;0.7"
                  dur={`${2 + i * 0.4}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          ))}
        </g>

        {/* Privacy badge */}
        <g transform="translate(320, 320)">
          <rect
            x="-30"
            y="-15"
            width="60"
            height="30"
            rx="15"
            fill="#1F2937"
            opacity="0.9"
          />
          <text
            x="0"
            y="5"
            fontSize="12"
            fill="white"
            textAnchor="middle"
            fontWeight="bold"
          >
            GDPR
          </text>
        </g>

        {/* Background elements */}
        <g opacity="0.1">
          <polygon points="80,60 120,60 100,100" fill="#8B5CF6" />
          <polygon points="280,340 320,340 300,380" fill="#8B5CF6" />
        </g>
      </svg>
    ),
  },
];

export default function AIPoweredServices() {
  return (
    <section className="relative py-40 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 leading-[1.1]">
            Bridge critical gaps in your
            <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent py-1">
              organizational readiness
            </span>
          </h2>
          <p className="text-base md:text-lg text-neutral-500 max-w-3xl mx-auto font-normal leading-relaxed">
            Many organizations have regulatory and readiness gaps that force
            their brand to underperform. Our comprehensive approach identifies
            and addresses these critical areas.
          </p>
        </motion.div>

        {/* 3 Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="group relative"
              >
                <div className="relative h-full p-8 bg-slate-950/90 rounded-xl border border-slate-800/50 hover:border-slate-700/80 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] transition-all duration-300 overflow-hidden">
                  {/* SVG Graphic Container */}
                  <div className="relative h-64 mb-8 rounded-lg overflow-hidden bg-gradient-to-br from-slate-900 to-slate-950">
                    {category.svg}
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    {/* Header */}
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {category.title}
                      </h3>
                      <p className="text-neutral-400 text-sm leading-relaxed">
                        {category.description}
                      </p>
                    </div>

                    {/* Items List */}
                    <div className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.5 + itemIndex * 0.05,
                          }}
                          viewport={{ once: true }}
                          className="flex items-center gap-2 text-sm"
                        >
                          <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <span className="text-neutral-300">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Hover effect gradient */}
                  <div
                    className="absolute inset-x-0 top-0 h-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${category.color}, transparent)`,
                      boxShadow: `0 0 20px ${category.color}60`,
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
