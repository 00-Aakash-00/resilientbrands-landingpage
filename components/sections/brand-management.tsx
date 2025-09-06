"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Sparkles, TrendingUp, Shield, Zap, BarChart3, Lock, Users } from "lucide-react"
import { useState } from "react"

const features = [
  {
    title: "AI-powered analysis",
    description: "Advanced algorithms analyzing brand performance in real-time",
    icon: BarChart3,
    color: "#00D9FF",
    accentColor: "#0095FF",
    svg: (
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ai-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#0095FF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#00D9FF" stopOpacity="0.1" />
          </linearGradient>
          <radialGradient id="ai-radial" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.5" />
            <stop offset="30%" stopColor="#0095FF" stopOpacity="0.3" />
            <stop offset="70%" stopColor="#00B4FF" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0095FF" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ai-premium" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00F5FF" stopOpacity="0.6" />
            <stop offset="25%" stopColor="#00D9FF" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#0095FF" stopOpacity="0.4" />
            <stop offset="75%" stopColor="#0080FF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#006FFF" stopOpacity="0.2" />
          </linearGradient>
          <pattern id="ai-hexagon" x="0" y="0" width="12" height="10.4" patternUnits="userSpaceOnUse">
            <polygon points="6,1 10,3.4 10,7.6 6,10 2,7.6 2,3.4" fill="none" stroke="#00D9FF" strokeWidth="0.2" opacity="0.3" />
            <circle cx="6" cy="5.2" r="0.8" fill="#00D9FF" opacity="0.2" />
          </pattern>
          <pattern id="ai-circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M0 10 L20 10 M10 0 L10 20" stroke="#00D9FF" strokeWidth="0.15" opacity="0.2" />
            <path d="M5 5 L15 5 M5 15 L15 15 M5 0 L5 20 M15 0 L15 20" stroke="#0095FF" strokeWidth="0.1" opacity="0.15" />
            <rect x="9" y="9" width="2" height="2" fill="#00D9FF" opacity="0.3" />
          </pattern>
        </defs>
        
        <rect width="200" height="60" fill="url(#ai-hexagon)" />
        <rect width="200" height="60" fill="url(#ai-circuit)" opacity="0.3" />
        
        <g opacity="0.7">
          {/* Premium neural architecture with refined processing nodes */}
          {[
            { x: 20, y: 30, layer: 1, type: 'input' },
            { x: 50, y: 12, layer: 2, type: 'hidden' },
            { x: 50, y: 30, layer: 2, type: 'hidden' },
            { x: 50, y: 48, layer: 2, type: 'hidden' },
            { x: 90, y: 8, layer: 3, type: 'processing' },
            { x: 90, y: 22, layer: 3, type: 'processing' },
            { x: 90, y: 38, layer: 3, type: 'processing' },
            { x: 90, y: 52, layer: 3, type: 'processing' },
            { x: 130, y: 15, layer: 4, type: 'synthesis' },
            { x: 130, y: 30, layer: 4, type: 'synthesis' },
            { x: 130, y: 45, layer: 4, type: 'synthesis' },
            { x: 170, y: 30, layer: 5, type: 'output' }
          ].map((node, i) => (
            <g key={i}>
              {/* Premium node with inner structure */}
              {/* Perfected premium neural node */}
              <circle cx={node.x} cy={node.y} r={5.5 - node.layer * 0.4} fill="url(#ai-premium)" opacity={0.8 + node.layer * 0.03} />
              <circle cx={node.x} cy={node.y} r={3.5 - node.layer * 0.3} fill="#00F5FF" opacity={0.9 + node.layer * 0.02} />
              <circle cx={node.x} cy={node.y} r={2 - node.layer * 0.15} fill="#FFFFFF" opacity={0.95 - node.layer * 0.03} />
              <circle cx={node.x} cy={node.y} r={0.8 - node.layer * 0.05} fill="#00D9FF" opacity="1" />
              <circle cx={node.x} cy={node.y} r={7.5 - node.layer * 0.6} fill="none" stroke="url(#ai-premium)" strokeWidth={0.5 - node.layer * 0.06} opacity={0.4 + node.layer * 0.02} strokeDasharray={node.type === 'output' ? '4 1' : node.type === 'input' ? '5 1' : '3 2'} />
              <circle cx={node.x} cy={node.y} r={10 - node.layer * 0.7} fill="none" stroke="#00D9FF" strokeWidth="0.3" opacity={0.2 + node.layer * 0.02} strokeDasharray="1 4" />
            </g>
          ))}
          
          {/* Sophisticated neural pathways */}
          <path d="M20 30 L50 12 L90 8 L130 15 L170 30" stroke="url(#ai-grad)" strokeWidth="1.5" opacity="0.5" strokeDasharray="2 1" />
          <path d="M20 30 L50 30 L90 22 L130 30 L170 30" stroke="url(#ai-grad)" strokeWidth="2" opacity="0.6" />
          <path d="M20 30 L50 48 L90 52 L130 45 L170 30" stroke="url(#ai-grad)" strokeWidth="1.2" opacity="0.4" strokeDasharray="1 2" />
          <path d="M50 12 L90 22 L130 15" stroke="#00D9FF" strokeWidth="0.8" opacity="0.35" />
          <path d="M50 30 L90 38 L130 30" stroke="#00D9FF" strokeWidth="1" opacity="0.4" />
          <path d="M50 48 L90 38 L130 45" stroke="#00D9FF" strokeWidth="0.8" opacity="0.35">
            <animate attributeName="stroke-dashoffset" from="0" to="-3" dur="2.5s" repeatCount="indefinite" />
          </path>
          
          {/* Animated data packets */}
          {[0, 1, 2].map((i) => (
            <circle key={`packet-${i}`} r="1.5" fill="#00F5FF" opacity="0.8">
              <animate attributeName="r" values="1.5;2.2;1.5" dur="1.2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite" />
              <animateMotion dur={`${4 + i * 0.5}s`} repeatCount="indefinite"
                path="M20 30 L50 12 L90 8 L130 15 L170 30" />
            </circle>
          ))}
          {[0, 1].map((i) => (
            <circle key={`packet-alt-${i}`} r="1" fill="#00D9FF" opacity="0.6">
              <animateMotion dur={`${5 + i * 0.7}s`} repeatCount="indefinite"
                path="M20 30 L50 48 L90 52 L130 45 L170 30" />
            </circle>
          ))}
          
          {/* Advanced Voronoi neural tessellation */}
          <polygon points="50,12 90,8 75,20 60,15" fill="#00D9FF" opacity="0.12" stroke="#00D9FF" strokeWidth="0.3" opacity="0.25" />
          <polygon points="50,30 90,22 75,35 65,28" fill="#00D9FF" opacity="0.18" stroke="#00D9FF" strokeWidth="0.4" opacity="0.3" />
          <polygon points="50,48 90,38 70,45 55,42" fill="#00D9FF" opacity="0.12" stroke="#00D9FF" strokeWidth="0.3" opacity="0.25" />
          <polygon points="90,22 130,15 115,25 105,18" fill="#0095FF" opacity="0.1" stroke="#0095FF" strokeWidth="0.25" opacity="0.2" />
          <polygon points="90,38 130,30 125,42 110,40" fill="#0095FF" opacity="0.08" stroke="#0095FF" strokeWidth="0.2" opacity="0.15" />
          
          {/* Advanced processing clusters with premium finish */}
          <g opacity="0.45">
            {/* Hexagonal processing units */}
            {[
              {cx: 75, cy: 20, r: 8},
              {cx: 105, cy: 25, r: 6},
              {cx: 85, cy: 40, r: 7}
            ].map((hex, i) => (
              <g key={`hex-${i}`}>
                <polygon points={`${hex.cx},${hex.cy - hex.r} ${hex.cx + hex.r * 0.866},${hex.cy - hex.r * 0.5} ${hex.cx + hex.r * 0.866},${hex.cy + hex.r * 0.5} ${hex.cx},${hex.cy + hex.r} ${hex.cx - hex.r * 0.866},${hex.cy + hex.r * 0.5} ${hex.cx - hex.r * 0.866},${hex.cy - hex.r * 0.5}`} 
                         fill="none" stroke="#00D9FF" strokeWidth="0.4" opacity="0.4" />
                <polygon points={`${hex.cx},${hex.cy - hex.r * 0.6} ${hex.cx + hex.r * 0.5},${hex.cy - hex.r * 0.3} ${hex.cx + hex.r * 0.5},${hex.cy + hex.r * 0.3} ${hex.cx},${hex.cy + hex.r * 0.6} ${hex.cx - hex.r * 0.5},${hex.cy + hex.r * 0.3} ${hex.cx - hex.r * 0.5},${hex.cy - hex.r * 0.3}`} 
                         fill="#00D9FF" opacity="0.15" />
              </g>
            ))}
          </g>
        </g>
        
        {/* Geometric spectral analysis with tessellation */}
        <g transform="translate(5, 45)" opacity="0.3">
          {[8, 12, 6, 14, 10, 15, 7, 11, 13].map((h, i) => (
            <g key={i}>
              <rect x={i * 20} y={-h} width="16" height={h} fill="url(#ai-grad)" opacity="0.6" />
              <rect x={i * 20} y={-h} width="16" height={2} fill="#00D9FF" opacity="0.8" />
              <rect x={i * 20} y={-2} width="16" height="1" fill="#00D9FF" opacity="0.4" />
            </g>
          ))}
          {/* Data point indicators */}
          {[8, 12, 6, 14, 10, 15, 7, 11, 13].map((h, i) => (
            <circle key={`dot-${i}`} cx={i * 20 + 8} cy={-h - 2} r="1" fill="#00D9FF" opacity="0.8" />
          ))}
        </g>
      </svg>
    )
  },
  {
    title: "Real-time monitoring",
    description: "24/7 brand sentiment and reputation tracking",
    icon: TrendingUp,
    color: "#00FF88",
    accentColor: "#00CC6A",
    svg: (
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="monitor-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00FF88" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#00CC6A" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#00FF88" stopOpacity="0.1" />
          </linearGradient>
          <radialGradient id="monitor-radial" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00FF88" stopOpacity="0.4" />
            <stop offset="30%" stopColor="#00E676" stopOpacity="0.3" />
            <stop offset="70%" stopColor="#00CC6A" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#00A152" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="monitor-premium" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00FFA3" stopOpacity="0.6" />
            <stop offset="25%" stopColor="#00FF88" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#00E676" stopOpacity="0.4" />
            <stop offset="75%" stopColor="#00CC6A" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#00A152" stopOpacity="0.2" />
          </linearGradient>
          <pattern id="monitor-diamond" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <polygon points="8,2 14,8 8,14 2,8" fill="none" stroke="#00FF88" strokeWidth="0.15" opacity="0.25" />
            <circle cx="8" cy="8" r="1" fill="#00FF88" opacity="0.3" />
          </pattern>
          <pattern id="monitor-wave" x="0" y="0" width="24" height="12" patternUnits="userSpaceOnUse">
            <path d="M0 6 Q6 2 12 6 T24 6" stroke="#00FF88" strokeWidth="0.2" fill="none" opacity="0.2" />
          </pattern>
        </defs>
        
        <rect width="200" height="60" fill="url(#monitor-diamond)" />
        <rect width="200" height="60" fill="url(#monitor-wave)" />
        
        <g opacity="0.7">
          {/* Animated frequency domain with flowing waves */}
          <path d="M5 30 C25 15, 35 45, 45 30 S65 12, 85 30 C105 15, 115 45, 125 30 S145 12, 165 30 T195 30" 
                stroke="#00FF88" strokeWidth="2.5" fill="none" opacity="0.5">
            <animate attributeName="d" 
              values="M5 30 C25 15, 35 45, 45 30 S65 12, 85 30 C105 15, 115 45, 125 30 S145 12, 165 30 T195 30;
                      M5 30 C25 20, 35 40, 45 30 S65 18, 85 30 C105 20, 115 40, 125 30 S145 18, 165 30 T195 30;
                      M5 30 C25 15, 35 45, 45 30 S65 12, 85 30 C105 15, 115 45, 125 30 S145 12, 165 30 T195 30"
              dur="4s" repeatCount="indefinite" />
          </path>
          <path d="M5 30 C25 45, 35 15, 45 30 S65 48, 85 30 C105 45, 115 15, 125 30 S145 48, 165 30 T195 30" 
                stroke="#00FF88" strokeWidth="1.8" fill="none" opacity="0.35">
            <animate attributeName="d" 
              values="M5 30 C25 45, 35 15, 45 30 S65 48, 85 30 C105 45, 115 15, 125 30 S145 48, 165 30 T195 30;
                      M5 30 C25 40, 35 20, 45 30 S65 42, 85 30 C105 40, 115 20, 125 30 S145 42, 165 30 T195 30;
                      M5 30 C25 45, 35 15, 45 30 S65 48, 85 30 C105 45, 115 15, 125 30 S145 48, 165 30 T195 30"
              dur="3s" repeatCount="indefinite" />
          </path>
          <path d="M5 30 L25 26 L35 34 L45 28 L55 32 L65 25 L75 35 L85 29 L95 33 L105 24 L115 36 L125 28 L135 34 L145 26 L155 32 L165 29 L175 33 L185 27 L195 30" 
                stroke="url(#monitor-grad)" strokeWidth="1.4" fill="none" opacity="0.45">
            <animate attributeName="d" 
              values="M5 30 L25 26 L35 34 L45 28 L55 32 L65 25 L75 35 L85 29 L95 33 L105 24 L115 36 L125 28 L135 34 L145 26 L155 32 L165 29 L175 33 L185 27 L195 30;
                      M5 30 L25 28 L35 32 L45 26 L55 34 L65 27 L75 33 L85 31 L95 31 L105 26 L115 34 L125 30 L135 32 L145 28 L155 30 L165 31 L175 31 L185 29 L195 30;
                      M5 30 L25 26 L35 34 L45 28 L55 32 L65 25 L75 35 L85 29 L95 33 L105 24 L115 36 L125 28 L135 34 L145 26 L155 32 L165 29 L175 33 L185 27 L195 30"
              dur="2s" repeatCount="indefinite" />
          </path>
          
          {/* Crystalline harmonic structure */}
          <g opacity="0.3">
            {[35, 75, 115, 155].map((x, i) => (
              <g key={`crystal-${i}`}>
                <polygon points={`${x},20 ${x+8},25 ${x+4},35 ${x-4},35 ${x-8},25`} 
                         fill="#00FF88" opacity="0.15" stroke="#00FF88" strokeWidth="0.3" opacity="0.25" />
                <polygon points={`${x},25 ${x+5},28 ${x+2},33 ${x-2},33 ${x-5},28`} 
                         fill="#00CC6A" opacity="0.2" stroke="#00CC6A" strokeWidth="0.2" opacity="0.2" />
                <line x1={x} y1="15" x2={x} y2="40" stroke="#00FF88" strokeWidth="0.5" opacity="0.2" strokeDasharray="1 2" />
              </g>
            ))}
          </g>
          
          {/* Premium monitoring stations with sophisticated indicators */}
          {[25, 65, 105, 145, 185].map((x, i) => (
            <g key={i}>
              {/* Animated premium monitoring node */}
              <circle cx={x} cy="30" r="4.5" fill="url(#monitor-premium)" opacity="0.8">
                <animate attributeName="r" values="4.5;5.2;4.5" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
              </circle>
              <circle cx={x} cy="30" r="3" fill="#00FFA3" opacity="0.7">
                <animate attributeName="opacity" values="0.7;1;0.7" dur={`${1.8 + i * 0.2}s`} repeatCount="indefinite" />
              </circle>
              <circle cx={x} cy="30" r="1.5" fill="#FFFFFF" opacity="0.95">
                <animate attributeName="r" values="1.5;2;1.5" dur={`${1.5 + i * 0.1}s`} repeatCount="indefinite" />
              </circle>
              <circle cx={x} cy="30" r="7" fill="none" stroke="url(#monitor-premium)" strokeWidth="0.6" opacity="0.35" strokeDasharray="2 1">
                <animate attributeName="stroke-dashoffset" from="0" to="-3" dur="2s" repeatCount="indefinite" />
                <animate attributeName="r" values="7;8.5;7" dur={`${2.5 + i * 0.2}s`} repeatCount="indefinite" />
              </circle>
              <circle cx={x} cy="30" r="11" fill="none" stroke="#00FF88" strokeWidth="0.3" opacity="0.2">
                <animate attributeName="r" values="11;13;11" dur={`${3 + i * 0.3}s`} repeatCount="indefinite" />
              </circle>
              <circle cx={x} cy="30" r="14" fill="none" stroke="#00E676" strokeWidth="0.2" opacity="0.12" strokeDasharray="4 2">
                <animate attributeName="stroke-dashoffset" from="0" to="-6" dur="4s" repeatCount="indefinite" />
              </circle>
              
              {/* Premium signal indicators with gradients */}
              <rect x={x-1.5} y="16" width="3" height="4" fill="url(#monitor-premium)" opacity="0.7" rx="0.5" />
              <rect x={x-1} y="17" width="2" height="2" fill="#00FFA3" opacity="0.8" rx="0.3" />
              <rect x={x-1.5} y="40" width="3" height="4" fill="url(#monitor-premium)" opacity="0.7" rx="0.5" />
              <rect x={x-1} y="41" width="2" height="2" fill="#00FFA3" opacity="0.8" rx="0.3" />
              
              {/* Data flow connectors */}
              <polygon points={`${x-2},12 ${x+2},12 ${x+1},15 ${x-1},15`} fill="#00FF88" opacity="0.5" />
              <polygon points={`${x-2},48 ${x+2},48 ${x+1},45 ${x-1},45`} fill="#00FF88" opacity="0.5" />
            </g>
          ))}
          
          {/* Advanced signal processing beams */}
          {[35, 85, 125, 165].map((x, i) => (
            <g key={`beam-${i}`}>
              <line x1={x} y1="8" x2={x} y2="52" stroke="#00FF88" strokeWidth="0.6" opacity="0.25" strokeDasharray="3 2" />
              <line x1={x-2} y1="10" x2={x-2} y2="50" stroke="#00CC6A" strokeWidth="0.3" opacity="0.15" strokeDasharray="1 3" />
              <line x1={x+2} y1="10" x2={x+2} y2="50" stroke="#00CC6A" strokeWidth="0.3" opacity="0.15" strokeDasharray="1 3" />
              <polygon points={`${x-3},12 ${x+3},12 ${x+1},16 ${x-1},16`} fill="#00FF88" opacity="0.4" />
              <polygon points={`${x-3},48 ${x+3},48 ${x+1},44 ${x-1},44`} fill="#00FF88" opacity="0.4" />
              <circle cx={x} cy="15" r="1.5" fill="#00FF88" opacity="0.7" />
              <circle cx={x} cy="45" r="1.5" fill="#00FF88" opacity="0.7" />
            </g>
          ))}
          
          {/* Frequency analysis bars */}
          <g transform="translate(10, 50)" opacity="0.3">
            {[3, 5, 2, 7, 4, 8, 3, 6, 5, 4, 6, 3, 7, 2, 5].map((h, i) => (
              <rect key={`freq-${i}`} x={i * 12} y={-h * 2} width="8" height={h * 2} 
                    fill="url(#monitor-grad)" opacity="0.6" rx="1" />
            ))}
          </g>
        </g>
      </svg>
    )
  },
  {
    title: "Compliance tracking",
    description: "Automated compliance monitoring across all platforms",
    icon: Shield,
    color: "#00B4FF",
    accentColor: "#0080FF",
    svg: (
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="shield-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00B4FF" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#0080FF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#00B4FF" stopOpacity="0.1" />
          </linearGradient>
          <radialGradient id="shield-radial" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#00B4FF" stopOpacity="0.5" />
            <stop offset="25%" stopColor="#0099FF" stopOpacity="0.4" />
            <stop offset="60%" stopColor="#0080FF" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#006FFF" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="shield-premium" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00CFFF" stopOpacity="0.7" />
            <stop offset="20%" stopColor="#00B4FF" stopOpacity="0.6" />
            <stop offset="40%" stopColor="#0099FF" stopOpacity="0.5" />
            <stop offset="70%" stopColor="#0080FF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#006FFF" stopOpacity="0.3" />
          </linearGradient>
          <pattern id="shield-fortress" x="0" y="0" width="24" height="20" patternUnits="userSpaceOnUse">
            <polygon points="12,2 20,6 20,14 12,18 4,14 4,6" fill="none" stroke="#00B4FF" strokeWidth="0.2" opacity="0.25" />
            <polygon points="12,6 16,8 16,12 12,14 8,12 8,8" fill="#00B4FF" opacity="0.1" stroke="#00B4FF" strokeWidth="0.15" opacity="0.2" />
            <circle cx="12" cy="10" r="1.5" fill="#00B4FF" opacity="0.3" />
          </pattern>
          <pattern id="shield-matrix" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <path d="M0 8 L16 8 M8 0 L8 16" stroke="#00B4FF" strokeWidth="0.1" opacity="0.15" />
            <rect x="6" y="6" width="4" height="4" fill="none" stroke="#0080FF" strokeWidth="0.15" opacity="0.2" />
          </pattern>
        </defs>
        
        <rect width="200" height="60" fill="url(#shield-fortress)" />
        <rect width="200" height="60" fill="url(#shield-matrix)" opacity="0.5" />
        
        <g opacity="0.7">
          {/* Advanced geometric fortress with crystalline structure */}
          <path d="M100 6 L100 54 Q100 60 92 56 L70 44 Q62 41 62 31 L62 16 Q62 8 70 5 L92 0 Q100 -3 100 3 Q100 -3 108 0 L130 5 Q138 8 138 16 L138 31 Q138 41 130 44 L108 56 Q100 60 100 54 Z" 
                fill="none" stroke="#00B4FF" strokeWidth="1.8" opacity="0.55" strokeDasharray="4 1" />
          <path d="M100 10 L100 50 Q100 55 93 52 L74 42 Q68 40 68 32 L68 20 Q68 14 74 11 L93 4 Q100 2 100 7 Q100 2 107 4 L126 11 Q132 14 132 20 L132 32 Q132 40 126 42 L107 52 Q100 55 100 50 Z" 
                fill="url(#shield-grad)" stroke="#00B4FF" strokeWidth="1.2" opacity="0.65" />
          <path d="M100 14 L100 46 Q100 50 94 48 L78 40 Q74 38 74 31 L74 22 Q74 17 78 15 L94 8 Q100 6 100 10 Q100 6 106 8 L122 15 Q126 17 126 22 L126 31 Q126 38 122 40 L106 48 Q100 50 100 46 Z" 
                fill="#00B4FF" opacity="0.18" stroke="#00B4FF" strokeWidth="0.9" />
          
          {/* Geometric shield tessellation */}
          <g opacity="0.25">
            <polygon points="100,18 108,22 108,30 100,34 92,30 92,22" fill="#00B4FF" opacity="0.2" stroke="#00B4FF" strokeWidth="0.3" />
            <polygon points="100,22 104,24 104,28 100,30 96,28 96,24" fill="#00B4FF" opacity="0.25" stroke="#00B4FF" strokeWidth="0.2" />
            <polygon points="85,25 93,27 89,35 81,33" fill="#00B4FF" opacity="0.15" stroke="#00B4FF" strokeWidth="0.2" />
            <polygon points="115,25 119,33 111,35 107,27" fill="#00B4FF" opacity="0.15" stroke="#00B4FF" strokeWidth="0.2" />
          </g>
          
          {/* Premium security core with layered protection */}
          <circle cx="100" cy="30" r="16" fill="none" stroke="url(#shield-premium)" strokeWidth="0.5" opacity="0.45" strokeDasharray="3 1" />
          <circle cx="100" cy="30" r="12" fill="none" stroke="#00CFFF" strokeWidth="0.7" opacity="0.55" />
          <circle cx="100" cy="30" r="8" fill="url(#shield-premium)" opacity="0.3" />
          <circle cx="100" cy="30" r="5" fill="#00B4FF" opacity="0.4" />
          <circle cx="100" cy="30" r="3" fill="#00CFFF" opacity="0.6" />
          <circle cx="100" cy="30" r="1.5" fill="#FFFFFF" opacity="0.9" />
          
          {/* Premium multi-stage security verification */}
          <path d="M91 30 L96 35 L109 21" stroke="url(#shield-premium)" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.9" />
          <path d="M92 29 L96 33 L107 20" stroke="#00CFFF" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.8" />
          <path d="M93 28 L96 31 L106 19" stroke="#FFFFFF" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.7" />
          
          {/* Premium security indicators */}
          <circle cx="93" cy="31" r="1" fill="#00CFFF" opacity="0.8" />
          <circle cx="108" cy="20" r="1" fill="#00CFFF" opacity="0.8" />
          
          {/* Animated security perimeter with rotating defensive nodes */}
          {[16, 22, 30, 40, 52].map((r, i) => (
            <g key={i}>
              <circle cx="100" cy="30" r={r} fill="none" stroke="#00B4FF" 
                      strokeWidth={0.4 - i * 0.06} opacity={0.35 - i * 0.05} 
                      strokeDasharray={i % 2 === 0 ? "3 2" : i % 3 === 0 ? "1 4" : "none"}>
                {(i % 2 === 0 || i % 3 === 0) && (
                  <animate attributeName="stroke-dashoffset" from="0" to={i % 2 === 0 ? "-5" : "-5"} dur={`${4 + i}s`} repeatCount="indefinite" />
                )}
                <animate attributeName="opacity" values={`${0.35 - i * 0.05};${0.5 - i * 0.05};${0.35 - i * 0.05}`} dur={`${3 + i * 0.5}s`} repeatCount="indefinite" />
              </circle>
              {i < 3 && (
                <>
                  {/* Rotating defensive sensor nodes */}
                  <animateTransform attributeName="transform" type="rotate" 
                    values="0 100 30;360 100 30" dur={`${8 + i * 2}s`} repeatCount="indefinite" />
                  {[0, 90, 180, 270].map((angle, j) => (
                    <g key={`node-${i}-${j}`} transform={`rotate(${angle + i * 15})`} transformOrigin="100 30">
                      <circle cx={100 + r * 0.8} cy="30" r={1.2 - i * 0.2} fill="#00B4FF" opacity={0.5 - i * 0.1}>
                        <animate attributeName="r" values={`${1.2 - i * 0.2};${1.8 - i * 0.2};${1.2 - i * 0.2}`} dur={`${2 + j * 0.3}s`} repeatCount="indefinite" />
                      </circle>
                      <circle cx={100 + r * 0.8} cy="30" r={2 - i * 0.3} fill="none" stroke="#00B4FF" 
                              strokeWidth="0.2" opacity={0.3 - i * 0.05}>
                        <animate attributeName="r" values={`${2 - i * 0.3};${3 - i * 0.3};${2 - i * 0.3}`} dur={`${2.5 + j * 0.2}s`} repeatCount="indefinite" />
                      </circle>
                    </g>
                  ))}
                </>
              )}
            </g>
          ))}
          
          {/* Advanced geometric security mesh */}
          <g opacity="0.25">
            {/* Triangular lattice reinforcement */}
            {[75, 85, 95, 105, 115, 125].map((x, i) => (
              <g key={`tri-${i}`}>
                <path d={`M${x} 12 L${x+6} 20 L${x-6} 20 Z`} fill="none" stroke="#00B4FF" 
                      strokeWidth="0.2" opacity={0.25} />
                <path d={`M${x} 48 L${x+6} 40 L${x-6} 40 Z`} fill="none" stroke="#00B4FF" 
                      strokeWidth="0.2" opacity={0.25} />
                <line x1={x} y1="20" x2={x} y2="40" stroke="#00B4FF" strokeWidth="0.15" opacity={0.2} strokeDasharray="1 1" />
              </g>
            ))}
            
            {/* Diamond defensive pattern */}
            {[70, 90, 110, 130].map((x, i) => (
              <polygon key={`diamond-${i}`} points={`${x},30 ${x+5},25 ${x},20 ${x-5},25`} 
                       fill="none" stroke="#00B4FF" strokeWidth="0.18" opacity={0.2} />
            ))}
          </g>
        </g>
      </svg>
    )
  },
  {
    title: "Risk assessment",
    description: "Proactive risk identification and mitigation strategies",
    icon: Lock,
    color: "#BB00FF",
    accentColor: "#9000FF",
    svg: (
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="risk-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#BB00FF" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#9000FF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#BB00FF" stopOpacity="0.1" />
          </linearGradient>
          <radialGradient id="risk-radial" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#BB00FF" stopOpacity="0.4" />
            <stop offset="30%" stopColor="#A855F7" stopOpacity="0.3" />
            <stop offset="70%" stopColor="#9000FF" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="risk-premium" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D946EF" stopOpacity="0.7" />
            <stop offset="25%" stopColor="#BB00FF" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#A855F7" stopOpacity="0.5" />
            <stop offset="75%" stopColor="#9000FF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.3" />
          </linearGradient>
          <pattern id="risk-encryption" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="2" y="2" width="16" height="16" fill="none" stroke="#BB00FF" strokeWidth="0.15" opacity="0.2" rx="2" />
            <rect x="6" y="6" width="8" height="8" fill="#BB00FF" opacity="0.1" stroke="#BB00FF" strokeWidth="0.1" opacity="0.15" rx="1" />
            <circle cx="10" cy="10" r="2" fill="#BB00FF" opacity="0.2" />
            <path d="M8 8 L12 12 M12 8 L8 12" stroke="#9000FF" strokeWidth="0.2" opacity="0.25" />
          </pattern>
          <pattern id="risk-binary" x="0" y="0" width="12" height="8" patternUnits="userSpaceOnUse">
            <text x="2" y="6" fontFamily="monospace" fontSize="3" fill="#BB00FF" opacity="0.2">01</text>
            <text x="8" y="6" fontFamily="monospace" fontSize="3" fill="#9000FF" opacity="0.15">10</text>
          </pattern>
        </defs>
        
        <rect width="200" height="60" fill="url(#risk-encryption)" />
        <rect width="200" height="60" fill="url(#risk-binary)" opacity="0.4" />
        
        <g opacity="0.7">
          {/* Premium quantum-grade security architecture */}
          <rect x="78" y="19" width="44" height="38" rx="6" fill="url(#risk-premium)" stroke="url(#risk-premium)" strokeWidth="2.5" opacity="0.8" />
          <rect x="81" y="22" width="38" height="32" rx="4" fill="none" stroke="#D946EF" strokeWidth="1.5" opacity="0.6" />
          <rect x="84" y="25" width="32" height="26" rx="3" fill="url(#risk-radial)" stroke="#BB00FF" strokeWidth="1" opacity="0.4" />
          <rect x="87" y="28" width="26" height="20" rx="2" fill="#D946EF" opacity="0.15" stroke="#A855F7" strokeWidth="0.6" opacity="0.3" />
          
          {/* Premium crystalline lock shackle with multi-layer security */}
          <path d="M86 19 L86 12 Q86 6 100 6 Q114 6 114 12 L114 19" stroke="url(#risk-premium)" strokeWidth="3.5" fill="none" opacity="0.8" />
          <path d="M88 19 L88 14 Q88 10 100 10 Q112 10 112 14 L112 19" stroke="#D946EF" strokeWidth="2.5" fill="none" opacity="0.9" />
          <path d="M90 19 L90 16 Q90 13 100 13 Q110 13 110 16 L110 19" stroke="#FFFFFF" strokeWidth="1.5" fill="none" opacity="0.8" />
          
          {/* Crystalline lock structure */}
          <g opacity="0.7">
            <polygon points="88,14 94,10 106,10 112,14 106,18 94,18" fill="none" stroke="#BB00FF" strokeWidth="0.6" opacity="0.4" />
            <polygon points="90,16 96,13 104,13 110,16 104,19 96,19" fill="#BB00FF" opacity="0.15" stroke="#BB00FF" strokeWidth="0.4" opacity="0.3" />
          </g>
          
          {/* Geometric quantum keyhole with tessellated security */}
          <circle cx="100" cy="37" r="6" fill="#BB00FF" opacity="0.5" />
          <circle cx="100" cy="37" r="4" fill="#BB00FF" opacity="0.7" />
          <circle cx="100" cy="37" r="8" fill="none" stroke="#BB00FF" strokeWidth="0.6" opacity="0.35" strokeDasharray="2 1" />
          <circle cx="100" cy="37" r="2" fill="#BB00FF" opacity="0.9" />
          
          {/* Geometric key slot with crystalline edges */}
          <polygon points="98,37 102,37 103,45 101,47 99,47 97,45" fill="#BB00FF" opacity="0.65" stroke="#BB00FF" strokeWidth="0.3" opacity="0.4" />
          <polygon points="99,38 101,38 101.5,44 100.5,45 99.5,45 98.5,44" fill="#BB00FF" opacity="0.8" />
          
          {/* Hexagonal security pattern */}
          <g opacity="0.3">
            {[85, 100, 115].map((x, i) => (
              <polygon key={`hex-key-${i}`} points={`${x},32 ${x+4},34 ${x+4},38 ${x},40 ${x-4},38 ${x-4},34`} 
                       fill="none" stroke="#BB00FF" strokeWidth="0.3" opacity="0.25" />
            ))}
          </g>
          
          {/* Animated security scanning grid */}
          <rect x="65" y="8" width="70" height="44" fill="none" stroke="#BB00FF" strokeWidth="0.3" opacity="0.4" strokeDasharray="3 2">
            <animate attributeName="stroke-dashoffset" from="0" to="-5" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;0.6;0.4" dur="3s" repeatCount="indefinite" />
          </rect>
          <rect x="75" y="15" width="50" height="30" fill="none" stroke="#BB00FF" strokeWidth="0.2" opacity="0.25">
            <animate attributeName="opacity" values="0.25;0.4;0.25" dur="2.5s" repeatCount="indefinite" />
          </rect>
          
          {/* Animated security scanning beams */}
          {[70, 80, 90, 110, 120, 130].map((x, i) => (
            <line key={i} x1={x} y1="5" x2={x} y2="55" stroke="#BB00FF" strokeWidth="0.3" opacity={0.2 + (i % 2) * 0.1} strokeDasharray="1 2">
              <animate attributeName="stroke-dashoffset" from="0" to="-3" dur={`${1.5 + i * 0.2}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values={`${0.2 + (i % 2) * 0.1};${0.4 + (i % 2) * 0.1};${0.2 + (i % 2) * 0.1}`} dur={`${2 + i * 0.1}s`} repeatCount="indefinite" />
            </line>
          ))}
          {[12, 20, 28, 36, 44].map((y, i) => (
            <line key={`h-${i}`} x1="60" y1={y} x2="140" y2={y} stroke="#BB00FF" strokeWidth="0.2" opacity={0.15 + (i % 2) * 0.1} strokeDasharray="2 3">
              <animate attributeName="stroke-dashoffset" from="0" to="-5" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
            </line>
          ))}
          
          {/* Advanced access control matrix */}
          <g opacity="0.7">
            {/* Corner security nodes with authentication rings */}
            {[
              {x: 70, y: 12}, {x: 130, y: 12}, {x: 70, y: 48}, {x: 130, y: 48}
            ].map((pos, i) => (
              <g key={`auth-${i}`}>
                <circle cx={pos.x} cy={pos.y} r="3" fill="#BB00FF" opacity="0.5">
                  <animate attributeName="r" values="3;4;3" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.5;0.8;0.5" dur={`${1.8 + i * 0.2}s`} repeatCount="indefinite" />
                </circle>
                <circle cx={pos.x} cy={pos.y} r="5" fill="none" stroke="#BB00FF" strokeWidth="0.4" opacity="0.3">
                  <animate attributeName="r" values="5;6.5;5" dur={`${2.5 + i * 0.2}s`} repeatCount="indefinite" />
                </circle>
                <circle cx={pos.x} cy={pos.y} r="7" fill="none" stroke="#9000FF" strokeWidth="0.2" opacity="0.2" strokeDasharray="1 2">
                  <animate attributeName="stroke-dashoffset" from="0" to="-3" dur={`${3 + i * 0.4}s`} repeatCount="indefinite" />
                  <animate attributeName="r" values="7;8.5;7" dur={`${3.5 + i * 0.3}s`} repeatCount="indefinite" />
                </circle>
                {/* Authentication beams */}
                <line x1={pos.x} y1={pos.y - 8} x2={pos.x} y2={pos.y + 8} stroke="#BB00FF" strokeWidth="0.3" opacity="0.25" />
                <line x1={pos.x - 8} y1={pos.y} x2={pos.x + 8} y2={pos.y} stroke="#BB00FF" strokeWidth="0.3" opacity="0.25" />
              </g>
            ))}
            
            {/* Security pathway connections */}
            <path d="M70 12 Q100 8 130 12 Q134 30 130 48 Q100 52 70 48 Q66 30 70 12" 
                  fill="none" stroke="#BB00FF" strokeWidth="0.5" opacity="0.3" strokeDasharray="2 3" />
          </g>
          
          {/* Risk assessment heat zones */}
          <g opacity="0.2">
            <ellipse cx="100" cy="20" rx="15" ry="8" fill="#BB00FF" opacity="0.15" />
            <ellipse cx="100" cy="40" rx="12" ry="6" fill="#9000FF" opacity="0.1" />
            <polygon points="85,25 115,25 110,35 90,35" fill="url(#risk-grad)" opacity="0.2" />
          </g>
        </g>
      </svg>
    )
  }
]

const metrics = [
  { label: "Brand Score", value: "94.2", change: "+12.3%", color: "#00D9FF", trend: [65, 72, 68, 74, 82, 88, 94] },
  { label: "Engagement", value: "2.4M", change: "+24.1%", color: "#00FF88", trend: [45, 52, 58, 61, 67, 73, 78] },
  { label: "Sentiment", value: "87%", change: "+5.2%", color: "#BB00FF", trend: [75, 76, 78, 80, 82, 85, 87] },
  { label: "Reach", value: "12.8M", change: "+18.7%", color: "#00B4FF", trend: [55, 58, 63, 68, 72, 76, 81] }
]

export default function BrandManagement() {
  
  return (
    <section className="relative py-40 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Enhanced left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 leading-[1.1]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Control your
              <motion.span 
                className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mt-1"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                digital identity
              </motion.span>
            </motion.h2>
            
            <motion.p 
              className="text-base md:text-lg text-neutral-500 mb-14 leading-relaxed max-w-xl font-normal"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Transform how you manage your brand with intelligent automation and real-time insights that drive measurable results.
            </motion.p>
            
            <div className="space-y-4 mb-14">
              {features.map((feature, index) => {
                return (
                  <div key={index} className="grid grid-cols-2 gap-6 items-center">
                    {/* Text Content on Left */}
                    <motion.div
                      key={`text-${index}`}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative flex items-start gap-4"
                    >
                      {/* Icon container */}
                      <div 
                        className="p-2 rounded-md bg-gradient-to-br flex-shrink-0 transition-transform duration-300 hover:scale-110"
                        style={{ 
                          background: `linear-gradient(135deg, ${feature.color}25, ${feature.accentColor}15)`
                        }}
                      >
                        <feature.icon className="w-4 h-4 transition-all duration-300" style={{ color: feature.color }} />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-base font-semibold text-white tracking-tight leading-tight mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-xs leading-relaxed text-slate-400 font-normal" style={{ lineHeight: '1.6' }}>
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                    
                    {/* SVG Visualization on Right */}
                    <motion.div
                      key={`svg-${index}`}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.3, ease: "easeOut" }
                      }}
                      className="group relative h-20 rounded-xl bg-slate-950/90 border border-slate-800/50 overflow-hidden hover:border-slate-700/80 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] transition-all duration-300"
                    >
                      {/* SVG Display */}
                      <div className="absolute inset-0 opacity-70 group-hover:opacity-85 transition-opacity duration-300">
                        {feature.svg}
                      </div>
                    </motion.div>
                  </div>
                )
              })}
            </div>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(0, 217, 255, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-semibold text-lg rounded-full overflow-hidden transition-all duration-300 shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 tracking-wide">Get Started</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </motion.div>
          
          {/* Enhanced right visual with 3D perspective */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 20, rotateX: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0, rotateX: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
            style={{ 
              perspective: '1000px',
              transformStyle: 'preserve-3d' 
            }}
          >
            {/* Main dashboard card */}
            <motion.div 
              className="group relative p-8 lg:p-10 bg-slate-950/90 rounded-xl border border-slate-800/50 shadow-2xl overflow-hidden hover:border-slate-700/80 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] transition-all duration-300"
              whileHover={{ 
                scale: 1.01,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              
              {/* Enhanced dashboard background pattern */}
              <svg className="absolute inset-0 w-full h-full opacity-20 group-hover:opacity-25 transition-opacity duration-500" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="dash-grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00F5FF" stopOpacity="0.7" />
                    <stop offset="20%" stopColor="#00D9FF" stopOpacity="0.6" />
                    <stop offset="40%" stopColor="#00FFA3" stopOpacity="0.5" />
                    <stop offset="60%" stopColor="#00CFFF" stopOpacity="0.4" />
                    <stop offset="80%" stopColor="#D946EF" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#BB00FF" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient id="dash-premium" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.5" />
                    <stop offset="25%" stopColor="#00F5FF" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#00FFA3" stopOpacity="0.35" />
                    <stop offset="75%" stopColor="#D946EF" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#BB00FF" stopOpacity="0.2" />
                  </linearGradient>
                  <radialGradient id="dash-radial" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.4" />
                    <stop offset="70%" stopColor="#00D9FF" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#00D9FF" stopOpacity="0" />
                  </radialGradient>
                  <pattern id="dash-grid" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M0 15 L30 15 M15 0 L15 30" stroke="#00D9FF" strokeWidth="0.3" opacity="0.4" />
                    <path d="M0 7.5 L30 7.5 M0 22.5 L30 22.5" stroke="#00D9FF" strokeWidth="0.15" opacity="0.2" />
                    <path d="M7.5 0 L7.5 30 M22.5 0 L22.5 30" stroke="#00D9FF" strokeWidth="0.15" opacity="0.2" />
                    <circle cx="15" cy="15" r="1.5" fill="#00D9FF" opacity="0.6" />
                    <circle cx="7.5" cy="7.5" r="0.5" fill="#00FF88" opacity="0.4" />
                    <circle cx="22.5" cy="22.5" r="0.5" fill="#00FF88" opacity="0.4" />
                  </pattern>
                </defs>
                
                <rect width="400" height="400" fill="url(#dash-grid)" />
                <rect width="400" height="400" fill="url(#dash-radial)" />
                
                {/* Advanced multi-dimensional analytics core */}
                <g transform="translate(200, 200)" opacity="0.4">
                  {/* Advanced geometric analysis framework */}
                  <circle cx="0" cy="0" r="110" fill="none" stroke="#00D9FF" strokeWidth="1" opacity="0.45" strokeDasharray="8 2" />
                  <circle cx="0" cy="0" r="90" fill="none" stroke="#00FF88" strokeWidth="0.8" opacity="0.35" strokeDasharray="3 4" />
                  <circle cx="0" cy="0" r="70" fill="none" stroke="#00B4FF" strokeWidth="0.6" opacity="0.4" />
                  <circle cx="0" cy="0" r="50" fill="#00D9FF" opacity="0.12" />
                  <circle cx="0" cy="0" r="30" fill="none" stroke="#BB00FF" strokeWidth="0.5" opacity="0.3" strokeDasharray="2 2" />
                  
                  {/* Geometric tessellation overlay */}
                  <g opacity="0.2">
                    {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                      <g key={`tessellation-${i}`} transform={`rotate(${angle})`}>
                        <polygon points="0,35 15,50 0,65 -15,50" fill="none" stroke="#00D9FF" strokeWidth="0.3" opacity="0.25" />
                        <polygon points="0,55 10,65 0,75 -10,65" fill="#00D9FF" opacity="0.08" stroke="#00D9FF" strokeWidth="0.2" opacity="0.15" />
                        <polygon points="0,75 12,85 0,95 -12,85" fill="none" stroke="#00B4FF" strokeWidth="0.25" opacity="0.2" />
                      </g>
                    ))}
                  </g>
                  
                  {/* Premium constellation data points */}
                  {[0, 40, 80, 120, 160, 200, 240, 280, 320].map((angle, i) => (
                    <g key={`constellation-${i}`} transform={`rotate(${angle})`}>
                      {/* Primary data node */}
                      <circle cx="75" cy="0" r="2.5" fill="url(#dash-premium)" opacity="0.7" />
                      <circle cx="75" cy="0" r="1.5" fill="#00F5FF" opacity="0.8" />
                      <circle cx="75" cy="0" r="0.7" fill="#FFFFFF" opacity="0.9" />
                      <circle cx="75" cy="0" r="5" fill="none" stroke="url(#dash-premium)" strokeWidth="0.4" opacity="0.35" strokeDasharray="2 1" />
                      
                      {/* Connection beam */}
                      <line x1="45" y1="0" x2="70" y2="0" stroke="url(#dash-premium)" strokeWidth="0.5" opacity="0.35" />
                      
                      {/* Secondary nodes */}
                      <circle cx="95" cy="0" r="2" fill="#00FFA3" opacity="0.6" />
                      <circle cx="95" cy="0" r="1" fill="#FFFFFF" opacity="0.8" />
                      <circle cx="115" cy="0" r="1.5" fill="#D946EF" opacity="0.5" />
                      <circle cx="115" cy="0" r="0.7" fill="#FFFFFF" opacity="0.7" />
                      
                      {/* Premium indicators */}
                      <polygon points="73,2 77,2 76,4 74,4" fill="#00F5FF" opacity="0.6" />
                      <polygon points="73,-2 77,-2 76,-4 74,-4" fill="#00F5FF" opacity="0.6" />
                    </g>
                  ))}
                  
                  {/* Sophisticated data pipeline network */}
                  {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                    <g key={`pipeline-${i}`} transform={`rotate(${angle})`}>
                      <path d="M25 0 Q45 -15 65 0 Q85 15 105 0 Q125 -10 140 0" stroke="url(#dash-grad1)" 
                            strokeWidth="0.6" opacity="0.35" fill="none" strokeDasharray="2 1" />
                      <path d="M30 0 Q50 -25 70 0 Q90 25 110 0" stroke="#00D9FF" 
                            strokeWidth="0.3" opacity="0.2" fill="none" />
                      {/* Data processing nodes */}
                      <circle cx="45" cy="-8" r="1.2" fill="#00FF88" opacity="0.6" />
                      <circle cx="85" cy="8" r="1" fill="#00B4FF" opacity="0.5" />
                      <circle cx="125" cy="-5" r="0.8" fill="#BB00FF" opacity="0.4" />
                      {/* Processing indicators */}
                      <rect x="44" y="-9" width="2" height="2" fill="#00FF88" opacity="0.4" />
                      <rect x="84" y="7" width="2" height="2" fill="#00B4FF" opacity="0.4" />
                    </g>
                  ))}
                  
                  {/* Sophisticated geometric analytics mesh */}
                  <g opacity="0.25">
                    {[35, 50, 65, 85].map((r, i) => (
                      <g key={`mesh-${i}`}>
                        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, j) => (
                          <g key={`node-${i}-${j}`} transform={`rotate(${angle})`}>
                            <line x1={r - 8} y1="0" x2={r + 3} y2="0" stroke="#00D9FF" 
                                  strokeWidth="0.25" opacity={0.35 - i * 0.08} strokeDasharray={j % 2 === 0 ? "2 1" : "1 2"} />
                            <circle cx={r} cy="0" r={0.8 + i * 0.15} fill="#00D9FF" opacity={0.45 - i * 0.1} />
                            {i < 2 && (
                              <polygon points={`${r-2},0 ${r+2},3 ${r+2},-3`} fill="#00FF88" opacity="0.2" />
                            )}
                          </g>
                        ))}
                      </g>
                    ))}
                  </g>
                  
                  {/* Fractal-like analytical structures */}
                  <g opacity="0.2">
                    {[0, 72, 144, 216, 288].map((angle, i) => (
                      <g key={`fractal-${i}`} transform={`rotate(${angle})`}>
                        <path d="M20 0 Q30 -10 40 0 Q50 10 60 0 Q70 -15 85 0" 
                              stroke="url(#dash-grad1)" strokeWidth="0.4" opacity="0.3" fill="none" />
                        <polygon points="40,0 45,-5 50,0 45,5" fill="#00B4FF" opacity="0.2" />
                        <polygon points="65,0 70,-8 75,0 70,8" fill="#BB00FF" opacity="0.15" />
                      </g>
                    ))}
                  </g>
                </g>
              </svg>
              
              {/* Header */}
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Brand Analytics
                </h3>
                <Sparkles className="w-8 h-8 text-cyan-400" />
              </div>
              
              {/* Animated metrics grid */}
              <div className="grid grid-cols-2 gap-5 mb-10">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.03,
                      y: -2,
                      transition: { duration: 0.2, ease: "easeOut" }
                    }}
                    className="group relative p-4 bg-slate-950/90 rounded-xl border border-slate-800/50 hover:border-slate-700/80 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-300"
                  >
                    
                    {/* Mini chart background */}
                    <svg className="absolute bottom-0 right-0 w-24 h-12 opacity-30 group-hover:opacity-40 transition-opacity duration-300" viewBox="0 0 100 50" fill="none">
                      <path 
                        d={`M0 50 ${metric.trend.map((v, i) => `L${i * 15} ${50 - v * 0.5}`).join(' ')} L100 50 Z`}
                        fill={metric.color}
                        opacity="0.3"
                      />
                      <path 
                        d={`M0 ${50 - metric.trend[0] * 0.5} ${metric.trend.map((v, i) => `L${i * 15} ${50 - v * 0.5}`).join(' ')}`}
                        stroke={metric.color}
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                    
                    <div className="relative">
                      <p className="text-neutral-500 text-xs font-medium mb-2 uppercase tracking-wider" style={{ letterSpacing: '0.08em' }}>
                        {metric.label}
                      </p>
                      <p className="text-3xl font-bold text-white mb-1 tracking-tight" style={{ 
                        textShadow: `0 0 25px ${metric.color}50`,
                        letterSpacing: '-0.02em'
                      }}>
                        {metric.value}
                      </p>
                      <p 
                        className="text-sm font-semibold flex items-center gap-1"
                        style={{ color: metric.color }}
                      >
                        <svg 
                          width="12" 
                          height="12" 
                          viewBox="0 0 12 12" 
                          fill="none"
                        >
                          <path d="M2 7L6 3L10 7" stroke={metric.color} strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        {metric.change}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Chart visualization */}
              <div className="relative">
                <div 
                  className="h-32 bg-slate-950/90 rounded-xl border border-slate-800/50 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] hover:border-slate-700/80 transition-all duration-300 overflow-hidden"
                >
                  {/* Grid background */}
                  <svg className="absolute inset-0 w-full h-full opacity-10">
                    <defs>
                      <pattern id="chart-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M20 0 L0 0 L0 20" fill="none" stroke="#00D9FF" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#chart-grid)" />
                  </svg>
                  
                  {/* Animated chart bars */}
                  <div className="relative flex items-end justify-between h-full p-4 gap-2">
                    {[65, 78, 52, 84, 91, 67, 89, 76].map((height, index) => (
                      <motion.div
                        key={index}
                        className="relative flex-1 rounded-t-sm"
                        style={{
                          background: `linear-gradient(to top, #00D9FF${Math.floor(height/2).toString(16)}, #00FF88${Math.floor(height/3).toString(16)})`,
                          transformOrigin: 'bottom'
                        }}
                        initial={{ height: 0, rotateX: 20 }}
                        whileInView={{ height: `${height}%`, rotateX: 0 }}
                        transition={{ 
                          duration: 1, 
                          delay: 1.2 + index * 0.1,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                      >
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}