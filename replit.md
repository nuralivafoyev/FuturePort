# Frontend Developer Portfolio

## Overview

This is a premium frontend developer portfolio application showcasing modern web development skills and projects. The application is built with React and TypeScript, featuring a responsive design with dark/light themes, internationalization support, and smooth animations. The portfolio includes sections for projects, skills, and contact information, presenting the developer's work in an elegant and professional manner.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application uses a modern React-based architecture built with Vite for fast development and building. The frontend is structured as a single-page application (SPA) using Wouter for client-side routing. The UI is built with shadcn/ui components, providing a consistent and accessible design system built on top of Radix UI primitives.

**Key Frontend Decisions:**
- **React with TypeScript**: Chosen for type safety and better developer experience
- **Vite**: Selected for its fast hot module replacement and optimized builds
- **Wouter**: Lightweight routing solution that's simpler than React Router
- **shadcn/ui**: Provides a comprehensive component library with consistent styling
- **Tailwind CSS**: Utility-first CSS framework for rapid styling and theme consistency

### State Management
The application uses React's built-in Context API for global state management, specifically for theme and language preferences. TanStack Query is integrated for server state management, though the current implementation primarily uses local state.

**State Architecture:**
- **Theme Context**: Manages light/dark mode with localStorage persistence
- **Language Context**: Handles internationalization with translation keys
- **Local Component State**: Used for form handling and UI interactions

### Styling and Theme System
The application implements a sophisticated theming system using CSS custom properties and Tailwind CSS. The theme supports both light and dark modes with smooth transitions and consistent color schemes.

**Design System:**
- **CSS Variables**: Custom properties for theme colors and spacing
- **Tailwind Configuration**: Extended with custom colors and animations
- **Component Variants**: Consistent styling patterns across components
- **Responsive Design**: Mobile-first approach with adaptive navigation

### Internationalization
The application includes a complete i18n system supporting multiple languages with a structured translation system.

**i18n Implementation:**
- **Translation Keys**: Hierarchical key structure for organized translations
- **Language Context**: Centralized language state management
- **LocalStorage Persistence**: User language preference storage
- **Dynamic Language Switching**: Runtime language changes without page reload

### Animation and Interactions
The application incorporates GSAP for advanced animations and uses CSS transitions for smooth user interactions.

**Animation Strategy:**
- **GSAP Integration**: Professional-grade animations for enhanced user experience
- **Intersection Observer**: Trigger animations based on scroll position
- **CSS Transitions**: Smooth hover effects and state changes
- **Custom Animations**: Floating elements and typing effects

## External Dependencies

### UI and Styling
- **@radix-ui/***: Accessible UI primitives for components
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **clsx**: Conditional CSS class management

### React Ecosystem
- **@tanstack/react-query**: Server state management and caching
- **@hookform/resolvers**: Form validation integration
- **wouter**: Lightweight client-side routing

### Database and ORM
- **drizzle-orm**: Type-safe ORM for database operations
- **drizzle-zod**: Schema validation integration
- **@neondatabase/serverless**: Serverless PostgreSQL database driver

### Development Tools
- **vite**: Fast build tool and development server
- **typescript**: Static type checking
- **@replit/vite-plugin-***: Replit-specific development plugins

### Animation and Graphics
- **GSAP**: Professional animation library (loaded via CDN)
- **lucide-react**: Modern icon library
- **embla-carousel-react**: Carousel component library

### Backend Infrastructure
- **express**: Node.js web application framework
- **connect-pg-simple**: PostgreSQL session store
- **drizzle-kit**: Database migration and schema management tools

### Utilities
- **date-fns**: Date manipulation library
- **nanoid**: Unique ID generation
- **zod**: Schema validation library