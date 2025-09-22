# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` - Start development server on http://localhost:3000
- **Build**: `npm run build` - Create production build
- **Production start**: `npm start` - Start production server after build
- **Lint**: `npm run lint` - Run ESLint checks

## Architecture Overview

This is a Next.js 14 landing page for LV Lawfirm with bilingual support (Indonesian/English). Key architectural patterns:

### Project Structure
- Uses Next.js App Router (`src/app/`)
- Components in `src/components/`
- Global state management with React Context (`src/context/LanguageContext.tsx`)
- Centralized translations (`src/translations/index.ts`)

### Language System
- Bilingual support (Indonesian 'id' and English 'en') via URL parameter `?lang=en`
- Language state managed by `LanguageContext` with URL synchronization
- All text content stored in typed translation objects in `src/translations/index.ts`
- Language toggle component with animated switcher in Navbar

### Styling & Design
- Tailwind CSS with custom color scheme (primary blues, secondary light blue, dark backgrounds)
- Custom fonts: Inter (sans) and Playfair Display (serif) via Google Fonts
- Framer Motion for smooth animations and transitions
- Dark theme with glassmorphism effects (backdrop-blur, transparency)
- Custom CSS utilities for buttons and container layout

### Component Architecture
- Single page application with smooth scroll navigation
- Responsive design with mobile-first approach
- Hero Icons for service section iconography
- Mobile hamburger menu with slide animations
- Static attorneys data exported from translations file

### Key Features
- Smooth scroll navigation between sections
- Language switching with URL persistence
- Responsive navbar with backdrop blur on scroll
- Animated service cards with staggered entrance
- Professional contact information display

When making changes, maintain the existing design language, ensure both language versions are updated, and follow the established TypeScript patterns for translation objects.