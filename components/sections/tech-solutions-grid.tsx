"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  FileCheck,
  Cloud,
  Lock,
  BarChart3,
  Gauge,
} from "lucide-react";
import { useState } from "react";
import { instrumentSerif } from "@/lib/fonts";
import { useScreenSize } from "@/hooks/use-mobile";

// Enhanced bento data with varied sizes and rich content
const bentoItems = [
  {
    id: 1,
    title: "Enterprise Security",
    subtitle: "Complete protection",
    description: "Advanced threat detection and managed security",
    icon: Shield,
    color: "#00D9FF",
    accentColor: "#0095FF",
    size: "large",
    type: "feature",
    stats: {
      Blocked: "99.9%",
      Response: "< 2min",
      Secure: "100%",
    },
    svg: (
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 600 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sec-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0095FF" stopOpacity="0.1" />
          </linearGradient>
          <pattern
            id="sec-grid"
            x="0"
            y="0"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 25 L50 25 M25 0 L25 50"
              stroke="#00D9FF"
              strokeWidth="0.25"
              opacity="0.15"
            />
            <circle cx="25" cy="25" r="1" fill="#00D9FF" opacity="0.3" />
          </pattern>
        </defs>

        <rect width="600" height="500" fill="url(#sec-grid)" />

        {/* Complex security visualization */}
        <g transform="translate(300, 250)" opacity="0.5">
          {/* Multi-ring system */}
          {[180, 160, 140, 120, 100].map((radius, i) => (
            <circle
              key={i}
              cx="0"
              cy="0"
              r={radius}
              fill="none"
              stroke="#00D9FF"
              strokeWidth={0.5 + i * 0.2}
              opacity={0.2 + i * 0.1}
              strokeDasharray={i % 2 === 0 ? "10 5" : "none"}
            />
          ))}

          {/* Central shield formation */}
          <g transform="scale(1.5)">
            <path
              d="M0 -40 L0 40 Q0 50 -10 45 L-35 25 Q-45 20 -45 10 L-45 -20 Q-45 -30 -35 -35 L-10 -50 Q0 -55 0 -45 Q0 -55 10 -50 L35 -35 Q45 -30 45 -20 L45 10 Q45 20 35 25 L10 45 Q0 50 0 40 Z"
              fill="url(#sec-grad)"
            />
            <path
              d="M0 -40 L0 40 Q0 50 -10 45 L-35 25 Q-45 20 -45 10 L-45 -20 Q-45 -30 -35 -35 L-10 -50 Q0 -55 0 -45 Q0 -55 10 -50 L35 -35 Q45 -30 45 -20 L45 10 Q45 20 35 25 L10 45 Q0 50 0 40 Z"
              fill="none"
              stroke="#00D9FF"
              strokeWidth="1"
            />
          </g>

          {/* Orbiting security nodes */}
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <g key={i} transform={`rotate(${angle})`}>
              <circle cx="150" cy="0" r="4" fill="#00D9FF" opacity="0.8">
                <animate
                  attributeName="r"
                  values="4;6;4"
                  dur="2s"
                  begin={`${i * 0.3}s`}
                  repeatCount="indefinite"
                />
              </circle>
              <line
                x1="50"
                y1="0"
                x2="145"
                y2="0"
                stroke="#00D9FF"
                strokeWidth="0.5"
                opacity="0.3"
                strokeDasharray="2 4"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="-6"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </line>
            </g>
          ))}

          {/* Data flow visualization */}
          <g opacity="0.6">
            <path
              d="M-150 -100 Q-75 -50 0 0 Q75 50 150 100"
              stroke="#00D9FF"
              strokeWidth="1"
              fill="none"
              strokeDasharray="5 10"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="-15"
                dur="2s"
                repeatCount="indefinite"
              />
            </path>
            <path
              d="M150 -100 Q75 -50 0 0 Q-75 50 -150 100"
              stroke="#0095FF"
              strokeWidth="1"
              fill="none"
              strokeDasharray="5 10"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="-15"
                dur="2s"
                begin="1s"
                repeatCount="indefinite"
              />
            </path>
          </g>
        </g>

        {/* Corner indicators */}
        <g opacity="0.4">
          <rect x="20" y="20" width="80" height="2" fill="#00D9FF" />
          <rect x="20" y="20" width="2" height="80" fill="#00D9FF" />
          <rect x="500" y="20" width="80" height="2" fill="#00D9FF" />
          <rect x="578" y="20" width="2" height="80" fill="#00D9FF" />
          <rect x="20" y="478" width="80" height="2" fill="#00D9FF" />
          <rect x="20" y="400" width="2" height="80" fill="#00D9FF" />
          <rect x="500" y="478" width="80" height="2" fill="#00D9FF" />
          <rect x="578" y="400" width="2" height="80" fill="#00D9FF" />
        </g>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Compliance",
    subtitle: "Automated audits",
    description: "Full regulatory coverage",
    icon: FileCheck,
    color: "#00FF88",
    accentColor: "#00CC6A",
    size: "medium",
    type: "info",
    compliance: ["PCI", "ISO", "SOC2", "GDPR"],
    svg: (
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="comp-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00FF88" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#00CC6A" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Background pattern */}
        <g opacity="0.15">
          {[...Array(10)].map((_, i) => (
            <line
              key={i}
              x1="0"
              y1={i * 50}
              x2="400"
              y2={i * 50}
              stroke="#00FF88"
              strokeWidth="0.5"
            />
          ))}
          {[...Array(8)].map((_, i) => (
            <line
              key={i}
              x1={i * 50}
              y1="0"
              x2={i * 50}
              y2="500"
              stroke="#00FF88"
              strokeWidth="0.5"
            />
          ))}
        </g>

        {/* Main visualization */}
        <g transform="translate(200, 200)" opacity="0.5">
          {/* Document stack effect */}
          {[0, 1, 2, 3].map((i) => (
            <rect
              key={i}
              x={-80 + i * 3}
              y={-100 + i * 3}
              width="160"
              height="200"
              rx="4"
              fill="#00FF88"
              opacity={0.05 + i * 0.05}
            />
          ))}

          {/* Main document */}
          <rect
            x="-70"
            y="-90"
            width="140"
            height="180"
            rx="4"
            fill="none"
            stroke="#00FF88"
            strokeWidth="2"
          />
          <rect
            x="-65"
            y="-85"
            width="130"
            height="30"
            fill="url(#comp-grad)"
          />

          {/* Check items with animation */}
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={i} transform={`translate(-50, ${-50 + i * 30})`}>
              <rect
                x="0"
                y="0"
                width="12"
                height="12"
                rx="2"
                fill="none"
                stroke="#00FF88"
                strokeWidth="1.5"
              />
              <path
                d="M2 6 L5 9 L10 3"
                stroke="#00FF88"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              >
                <animate
                  attributeName="stroke-dasharray"
                  from="0 20"
                  to="20 0"
                  dur="0.5s"
                  begin={`${i * 0.2}s`}
                  fill="freeze"
                />
              </path>
              <rect
                x="20"
                y="4"
                width={60 + i * 5}
                height="4"
                fill="#00FF88"
                opacity="0.3"
              />
            </g>
          ))}
        </g>

        {/* Floating badges */}
        <g opacity="0.6">
          <g transform="translate(100, 400)">
            <circle cx="0" cy="0" r="25" fill="url(#comp-grad)" />
            <path
              d="M-10 0 L-5 5 L10 -10"
              stroke="#00FF88"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>
          <g transform="translate(300, 400)">
            <circle cx="0" cy="0" r="25" fill="url(#comp-grad)" />
            <text
              x="0"
              y="5"
              fill="#00FF88"
              fontSize="12"
              fontWeight="bold"
              textAnchor="middle"
            >
              ISO
            </text>
          </g>
        </g>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Cloud Infrastructure",
    subtitle: "Global scale",
    description: "Multi-region deployment",
    icon: Cloud,
    color: "#00B4FF",
    accentColor: "#0080FF",
    size: "medium",
    type: "metric",
    metrics: {
      uptime: "99.99%",
      scale: "Auto",
      regions: "Global",
    },
    svg: (
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="cloud-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00B4FF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0080FF" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Network grid */}
        <g opacity="0.1">
          <pattern
            id="cloud-net"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="50"
              cy="50"
              r="30"
              fill="none"
              stroke="#00B4FF"
              strokeWidth="0.5"
            />
            <circle cx="50" cy="50" r="2" fill="#00B4FF" />
          </pattern>
          <rect width="400" height="500" fill="url(#cloud-net)" />
        </g>

        {/* Cloud infrastructure */}
        <g transform="translate(200, 150)" opacity="0.5">
          {/* Cloud formation */}
          <ellipse cx="0" cy="20" rx="120" ry="50" fill="url(#cloud-grad)" />
          <ellipse cx="-70" cy="10" rx="70" ry="40" fill="url(#cloud-grad)" />
          <ellipse cx="70" cy="10" rx="70" ry="40" fill="url(#cloud-grad)" />
          <ellipse cx="0" cy="-20" rx="80" ry="40" fill="url(#cloud-grad)" />

          {/* Data nodes */}
          {[
            { x: 0, y: 0 },
            { x: -60, y: 20 },
            { x: 60, y: 20 },
            { x: -30, y: -20 },
            { x: 30, y: -20 },
          ].map((pos, i) => (
            <g key={i} transform={`translate(${pos.x}, ${pos.y})`}>
              <circle cx="0" cy="0" r="8" fill="#00B4FF" opacity="0.6">
                <animate
                  attributeName="r"
                  values="8;10;8"
                  dur="2s"
                  begin={`${i * 0.4}s`}
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="0" cy="0" r="3" fill="#00B4FF" />
            </g>
          ))}
        </g>

        {/* Server infrastructure */}
        <g transform="translate(200, 350)" opacity="0.5">
          {/* Central server */}
          <rect
            x="-40"
            y="-40"
            width="80"
            height="80"
            rx="4"
            fill="none"
            stroke="#00B4FF"
            strokeWidth="2"
          />
          {[0, 1, 2, 3].map((i) => (
            <rect
              key={i}
              x="-35"
              y={-35 + i * 18}
              width="70"
              height="15"
              fill="#00B4FF"
              opacity={i % 2 === 0 ? 0.3 : 0.2}
            />
          ))}

          {/* Connected nodes */}
          {[
            { x: -120, y: 0 },
            { x: 120, y: 0 },
            { x: 0, y: -100 },
            { x: 0, y: 100 },
          ].map((pos, i) => (
            <g key={i} transform={`translate(${pos.x}, ${pos.y})`}>
              <rect
                x="-20"
                y="-20"
                width="40"
                height="40"
                rx="4"
                fill="none"
                stroke="#00B4FF"
                strokeWidth="1"
                opacity="0.6"
              />
              <rect
                x="-15"
                y="-15"
                width="30"
                height="8"
                fill="#00B4FF"
                opacity="0.3"
              />
              <line
                x1={-pos.x / 3}
                y1={-pos.y / 3}
                x2={-pos.x * 0.6}
                y2={-pos.y * 0.6}
                stroke="#00B4FF"
                strokeWidth="1"
                opacity="0.4"
                strokeDasharray="2 4"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="-6"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </line>
            </g>
          ))}
        </g>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Privacy Shield",
    subtitle: "Data protection",
    description: "GDPR compliant",
    icon: Lock,
    color: "#BB00FF",
    accentColor: "#9000FF",
    size: "small",
    type: "simple",
    svg: (
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="priv-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#BB00FF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#9000FF" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Background circuit */}
        <g opacity="0.15">
          <path
            d="M50 50 L100 50 L100 100 M200 50 L250 50 L250 100 L200 100 L200 150 L250 150"
            stroke="#BB00FF"
            strokeWidth="0.5"
          />
          <path
            d="M50 250 L100 250 L100 200 M200 250 L250 250 L250 200 L200 200 L200 150"
            stroke="#BB00FF"
            strokeWidth="0.5"
          />
          <circle cx="50" cy="50" r="2" fill="#BB00FF" />
          <circle cx="250" cy="50" r="2" fill="#BB00FF" />
          <circle cx="50" cy="250" r="2" fill="#BB00FF" />
          <circle cx="250" cy="250" r="2" fill="#BB00FF" />
        </g>

        {/* Lock visualization */}
        <g transform="translate(150, 150)" opacity="0.5">
          {/* Shield background */}
          <path
            d="M0 -50 L0 50 Q0 65 -15 58 L-45 35 Q-60 28 -60 13 L-60 -25 Q-60 -40 -45 -47 L-15 -65 Q0 -72 0 -57 Q0 -72 15 -65 L45 -47 Q60 -40 60 -25 L60 13 Q60 28 45 35 L15 58 Q0 65 0 50 Z"
            fill="url(#priv-grad)"
          />

          {/* Lock body */}
          <rect
            x="-25"
            y="-10"
            width="50"
            height="35"
            rx="5"
            fill="#BB00FF"
            opacity="0.3"
          />
          <rect
            x="-25"
            y="-10"
            width="50"
            height="35"
            rx="5"
            fill="none"
            stroke="#BB00FF"
            strokeWidth="2"
          />

          {/* Lock shackle */}
          <path
            d="M-15 -10 L-15 -25 Q-15 -35 0 -35 Q15 -35 15 -25 L15 -10"
            stroke="#BB00FF"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />

          {/* Keyhole */}
          <circle cx="0" cy="7" r="5" fill="#BB00FF" />
          <rect x="-2" y="7" width="4" height="10" fill="#BB00FF" />

          {/* Protection rings */}
          <circle
            cx="0"
            cy="0"
            r="70"
            fill="none"
            stroke="#BB00FF"
            strokeWidth="0.5"
            opacity="0.3"
            strokeDasharray="5 10"
          />
          <circle
            cx="0"
            cy="0"
            r="85"
            fill="none"
            stroke="#BB00FF"
            strokeWidth="0.5"
            opacity="0.2"
            strokeDasharray="10 5"
          />
        </g>
      </svg>
    ),
  },
  {
    id: 5,
    title: "Analytics Engine",
    subtitle: "Real-time metrics",
    description: "Performance tracking",
    icon: BarChart3,
    color: "#FFB800",
    accentColor: "#FF9500",
    size: "wide",
    type: "chart",
    chartData: {
      growth: "+156%",
      leads: "22K+",
      rate: "98.5%",
    },
    svg: (
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 600 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="chart-grad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#FFB800" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#FFB800" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFB800" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#FF9500" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FFB800" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        {/* Grid system */}
        <g opacity="0.1">
          {[...Array(6)].map((_, i) => (
            <g key={i}>
              <line
                x1="50"
                y1={50 + i * 40}
                x2="550"
                y2={50 + i * 40}
                stroke="#FFB800"
                strokeWidth="0.5"
              />
              <text
                x="40"
                y={55 + i * 40}
                fill="#FFB800"
                fontSize="8"
                textAnchor="end"
              >
                {100 - i * 20}
              </text>
            </g>
          ))}
          {[...Array(6)].map((_, i) => (
            <g key={i}>
              <line
                x1={100 + i * 90}
                y1="50"
                x2={100 + i * 90}
                y2="250"
                stroke="#FFB800"
                strokeWidth="0.5"
              />
              <text
                x={100 + i * 90}
                y="265"
                fill="#FFB800"
                fontSize="8"
                textAnchor="middle"
              >
                M{i + 1}
              </text>
            </g>
          ))}
        </g>

        {/* Bar chart */}
        <g opacity="0.5">
          {[
            { x: 100, h: 70 },
            { x: 190, h: 100 },
            { x: 280, h: 130 },
            { x: 370, h: 150 },
            { x: 460, h: 170 },
            { x: 550, h: 190 },
          ].map((bar, i) => (
            <rect
              key={i}
              x={bar.x - 30}
              y={250 - bar.h}
              width="60"
              height={bar.h}
              fill="url(#chart-grad)"
            >
              <animate
                attributeName="height"
                from="0"
                to={bar.h}
                dur="0.5s"
                begin={`${i * 0.1}s`}
                fill="freeze"
              />
              <animate
                attributeName="y"
                from="250"
                to={250 - bar.h}
                dur="0.5s"
                begin={`${i * 0.1}s`}
                fill="freeze"
              />
            </rect>
          ))}
        </g>

        {/* Trend line */}
        <path
          d="M100 200 L190 170 L280 140 L370 120 L460 90 L550 60"
          stroke="url(#line-grad)"
          strokeWidth="3"
          fill="none"
          opacity="0.7"
        >
          <animate
            attributeName="stroke-dasharray"
            from="0 500"
            to="500 0"
            dur="1.5s"
            fill="freeze"
          />
        </path>

        {/* Data points */}
        <g opacity="0.8">
          {[
            { x: 100, y: 200 },
            { x: 190, y: 170 },
            { x: 280, y: 140 },
            { x: 370, y: 120 },
            { x: 460, y: 90 },
            { x: 550, y: 60 },
          ].map((point, i) => (
            <g key={i}>
              <circle cx={point.x} cy={point.y} r="6" fill="#FFB800">
                <animate
                  attributeName="r"
                  from="0"
                  to="6"
                  dur="0.3s"
                  begin={`${0.5 + i * 0.2}s`}
                  fill="freeze"
                />
              </circle>
              <circle cx={point.x} cy={point.y} r="3" fill="#FF9500" />
            </g>
          ))}
        </g>

        {/* Axes */}
        <line
          x1="50"
          y1="250"
          x2="550"
          y2="250"
          stroke="#FFB800"
          strokeWidth="2"
          opacity="0.5"
        />
        <line
          x1="50"
          y1="50"
          x2="50"
          y2="250"
          stroke="#FFB800"
          strokeWidth="2"
          opacity="0.5"
        />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Tech Debt",
    subtitle: "Zero tolerance",
    description: "Clean codebase",
    icon: Gauge,
    color: "#FF3366",
    accentColor: "#FF0044",
    size: "small",
    type: "simple",
    svg: (
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gauge-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF3366" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FF0044" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Background elements */}
        <g opacity="0.1">
          <circle
            cx="150"
            cy="150"
            r="120"
            fill="none"
            stroke="#FF3366"
            strokeWidth="0.5"
          />
          <circle
            cx="150"
            cy="150"
            r="100"
            fill="none"
            stroke="#FF3366"
            strokeWidth="0.5"
          />
          <circle
            cx="150"
            cy="150"
            r="80"
            fill="none"
            stroke="#FF3366"
            strokeWidth="0.5"
          />
        </g>

        {/* Gauge */}
        <g transform="translate(150, 150)" opacity="0.5">
          {/* Gauge arc segments */}
          <path
            d="M -70 40 A 80 80 0 0 1 -56 -56"
            fill="none"
            stroke="#00FF88"
            strokeWidth="12"
            opacity="0.5"
            strokeLinecap="round"
          />
          <path
            d="M -56 -56 A 80 80 0 0 1 0 -80"
            fill="none"
            stroke="#FFB800"
            strokeWidth="12"
            opacity="0.5"
            strokeLinecap="round"
          />
          <path
            d="M 0 -80 A 80 80 0 0 1 56 -56"
            fill="none"
            stroke="#FF9500"
            strokeWidth="12"
            opacity="0.5"
            strokeLinecap="round"
          />
          <path
            d="M 56 -56 A 80 80 0 0 1 70 40"
            fill="none"
            stroke="#FF3366"
            strokeWidth="12"
            opacity="0.7"
            strokeLinecap="round"
          />

          {/* Scale marks */}
          {[-135, -90, -45, 0, 45].map((angle, i) => (
            <g key={i} transform={`rotate(${angle})`}>
              <line
                x1="0"
                y1="-95"
                x2="0"
                y2="-85"
                stroke="#FF3366"
                strokeWidth="2"
                opacity="0.8"
              />
              <line
                x1="0"
                y1="-75"
                x2="0"
                y2="-70"
                stroke="#FF3366"
                strokeWidth="1"
                opacity="0.5"
              />
            </g>
          ))}

          {/* Needle */}
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="-135;-45;-135"
              dur="4s"
              repeatCount="indefinite"
            />
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="-70"
              stroke="#FF3366"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx="0" cy="0" r="10" fill="url(#gauge-grad)" />
            <circle cx="0" cy="0" r="6" fill="#FF3366" />
          </g>

          {/* Digital display */}
          <rect
            x="-30"
            y="40"
            width="60"
            height="25"
            rx="5"
            fill="#FF3366"
            opacity="0.2"
          />
          <text
            x="0"
            y="56"
            fill="#FF3366"
            fontSize="14"
            fontWeight="bold"
            textAnchor="middle"
          >
            15%
          </text>
        </g>
      </svg>
    ),
  },
];

const AdvancedBentoGrid = () => {
  const [hoveredId] = useState<number | null>(null);
  const { isMobile, isSmallMobile } = useScreenSize();

  return (
    <div className={`max-w-7xl mx-auto ${isMobile ? 'px-3' : 'px-4'}`}>
      <div className={`grid ${isMobile ? 'grid-cols-1 gap-4 auto-rows-[200px]' : 'grid-cols-1 md:grid-cols-4 gap-5 auto-rows-[240px]'}`}>
        {bentoItems.map((item, index) => {
          const Icon = item.icon;
          const gridSizeClass = isMobile 
            ? "col-span-1 row-span-1" // All items single column on mobile
            : {
                large: "md:col-span-2 md:row-span-2",
                wide: "md:col-span-2 md:row-span-1", 
                medium: "md:col-span-1 md:row-span-2",
                small: "md:col-span-1 md:row-span-1",
              }[item.size];

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, scale: 1.01, transition: { duration: 0.2 } }}
              className={`group relative rounded-xl bg-slate-950/90 border border-slate-800/50 hover:border-slate-700/80 transition-all duration-300 overflow-hidden shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] ${gridSizeClass}`}
              style={{
                background:
                  "linear-gradient(135deg, rgba(15, 23, 42, 0.97), rgba(2, 6, 23, 0.95))",
                boxShadow: `0 10px 40px -10px ${item.color}10`,
              }}
            >
              {/* Gradient accent on hover */}
              <div
                className="absolute inset-x-0 top-0 h-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{
                  background: `linear-gradient(90deg, transparent, ${item.color}, transparent)`,
                  boxShadow: `0 0 20px ${item.color}60`,
                }}
              />

              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(circle at top left, ${item.color}20, transparent 70%)`,
                  }}
                />
              </div>

              {/* SVG Background */}
              <div className="absolute inset-0 opacity-25 group-hover:opacity-40 transition-opacity duration-300">
                {item.svg}
              </div>

              {/* Floating particles effect */}
              <AnimatePresence>
                {hoveredId === item.id && (
                  <>
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={`particle-${i}`}
                        className="absolute w-1 h-1 rounded-full"
                        style={{
                          background: item.color,
                          boxShadow: `0 0 10px ${item.color}`,
                          left: `${20 + i * 30}%`,
                          top: "80%",
                        }}
                        initial={{ y: 0, opacity: 0 }}
                        animate={{
                          y: -100,
                          opacity: [0, 1, 0],
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                          duration: 2,
                          delay: i * 0.3,
                          repeat: Infinity,
                          ease: "easeOut",
                        }}
                      />
                    ))}
                  </>
                )}
              </AnimatePresence>

              {/* Content */}
              <div className={`relative h-full ${isMobile ? 'p-4' : 'p-6'} flex flex-col`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-md bg-transparent border border-white/50">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`${isSmallMobile ? 'text-sm' : isMobile ? 'text-base' : 'text-base'} font-semibold text-white tracking-tight leading-tight mb-1`}>
                        {item.title}
                      </h3>
                      <p
                        className={`${isSmallMobile ? 'text-[10px]' : isMobile ? 'text-xs' : 'text-xs'} font-medium text-slate-500 uppercase tracking-wider`}
                        style={{ letterSpacing: "0.05em" }}
                      >
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                <p
                  className={`${isSmallMobile ? 'text-[11px]' : isMobile ? 'text-xs' : 'text-xs'} leading-relaxed text-slate-400 mb-auto font-normal`}
                  style={{ lineHeight: "1.6" }}
                >
                  {item.description}
                </p>

                {/* Type-specific content */}
                <div className="mt-auto">
                  {item.type === "feature" && item.stats && (
                    <div className="grid grid-cols-3 gap-3">
                      {Object.entries(item.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div
                            className="text-lg font-bold tracking-tight mb-0.5"
                            style={{
                              color: item.color,
                              textShadow: `0 0 20px ${item.color}40`,
                            }}
                          >
                            {value}
                          </div>
                          <div className="text-[9px] font-medium text-slate-600 uppercase tracking-wider">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {item.type === "info" && item.compliance && (
                    <div className="flex gap-2 flex-wrap">
                      {item.compliance.map((comp, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-semibold px-2.5 py-1 rounded-md transition-all duration-200 hover:scale-105"
                          style={{
                            background: `linear-gradient(135deg, ${item.color}15, ${item.accentColor}10)`,
                            color: item.color,
                            border: `1px solid ${item.color}30`,
                            boxShadow: `0 2px 8px ${item.color}10`,
                          }}
                        >
                          {comp}
                        </span>
                      ))}
                    </div>
                  )}

                  {item.type === "metric" && item.metrics && (
                    <div className="space-y-2.5">
                      {Object.entries(item.metrics).map(([key, value]) => (
                        <div
                          key={key}
                          className="flex justify-between items-center group"
                        >
                          <span className="text-[10px] font-medium text-slate-600 uppercase tracking-wider">
                            {key}
                          </span>
                          <span
                            className="text-sm font-bold tracking-tight transition-all duration-200 group-hover:scale-105"
                            style={{
                              color: item.color,
                              textShadow: `0 0 15px ${item.color}30`,
                            }}
                          >
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {item.type === "chart" && item.chartData && (
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(item.chartData).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div
                            className="text-base font-bold tracking-tight mb-0.5 transition-all duration-200 hover:scale-110"
                            style={{
                              color: item.color,
                              textShadow: `0 0 20px ${item.color}40`,
                            }}
                          >
                            {value}
                          </div>
                          <div className="text-[9px] font-medium text-slate-600 uppercase tracking-wider">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default function TechSolutionsGrid() {
  const { isMobile, isSmallMobile } = useScreenSize();
  
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`${instrumentSerif.className} ${isSmallMobile ? 'text-2xl' : isMobile ? 'text-3xl' : 'text-4xl md:text-5xl lg:text-6xl'} font-normal tracking-tight text-white mb-4 leading-[1.1]`}>
            Technology that
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent py-1">
              scales infinitely
            </span>
          </h2>
          <p className={`${isSmallMobile ? 'text-sm' : isMobile ? 'text-base' : 'text-base md:text-lg'} text-neutral-500 ${isMobile ? 'max-w-sm' : 'max-w-2xl'} mx-auto font-normal leading-relaxed`}>
            Enterprise-grade solutions engineered for modern businesses
          </p>
        </motion.div>

        <AdvancedBentoGrid />
      </div>
    </section>
  );
}
