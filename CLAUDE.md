# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 landing page for Resilient Brands, a platform providing tools for startup founders. The project is synced with v0.dev deployments and uses a component-based architecture with TypeScript and Tailwind CSS.

## Commands

- `pnpm dev` - Start the development server
- `pnpm build` - Build the production application
- `pnpm start` - Start the production server
- `pnpm lint` - Run Next.js linting

> Note: DO NOT RUN THE DEV SERVER UNLESS SPECIFIED

## Architecture

### Tech Stack

- Next.js 15.2.4 with App Router
- React 19
- TypeScript
- Tailwind CSS with custom color palette
- Radix UI for component primitives
- Framer Motion for animations
- React Hook Form with Zod validation
- Geist font family

### Project Structure

- `/app` - Next.js app directory with layout and main page
- `/components` - Reusable components organized by type:
  - `/sections` - Main page sections (hero, features, pricing, etc.)
  - `/ui` - Base UI components built on Radix UI
- `/lib` - Utility functions
- `/hooks` - Custom React hooks
- `/public` - Static assets (images, logos)

### Key Design Patterns

- Component composition with shadcn/ui patterns
- Custom Tailwind color theme inspired by SENTHREX:
  - Primary: Deep blue (#0A1124)
  - Accent: Cyan blue (#00E6FB)
  - Secondary: Electric blue (#1A2B4C)
  - Highlight: Bright blue (#2DE1FC)
  - Background: Dark navy (#0A1124) with gradients
- Path aliases: `@/*` maps to root directory
- CSS variables for theme customization

## Environment Variables

The project uses a `.env` file with the following variables:

- `RESEND_API_KEY` - API key for Resend email service (linked to resilientbrands.ai domain)
- <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 leading-[1.1]">
            Bridge critical gaps in your
            <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent py-1">
              organizational readiness
            </span>
          </h2> 

here you add mt-1, and I replaced it with py-1 which is better since the text doesn't get cutoff that way