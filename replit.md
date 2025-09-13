# Portfolio Website

## Overview

This is a modern portfolio website built as a full-stack application showcasing a junior developer's work and skills. The application features a React frontend with a Node.js/Express backend, designed to display projects, skills, and provide contact functionality. The site uses modern web development practices with TypeScript, Tailwind CSS, and shadcn/ui components for a professional, responsive design.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type-safe component development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, modern UI design
- **State Management**: TanStack Query (React Query) for server state management and data fetching
- **Build Tool**: Vite for fast development and optimized production builds
- **Component Structure**: Modular component architecture with separate UI components, page components, and business logic

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **API Design**: RESTful API structure with `/api` prefix for all endpoints
- **Middleware**: Express middleware for JSON parsing, URL encoding, and request logging
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes
- **Development**: Hot module replacement and development server integration with Vite

### Data Storage Solutions
- **Database**: PostgreSQL configured through Drizzle ORM
- **ORM**: Drizzle with schema definitions in TypeScript
- **Migrations**: Drizzle Kit for database schema management
- **Development Storage**: In-memory storage interface for development/testing
- **Schema**: User management system with username/password authentication structure

### Authentication and Authorization
- **User Model**: Basic user schema with username and password fields
- **Session Management**: Prepared for PostgreSQL session storage using connect-pg-simple
- **Storage Interface**: Abstracted storage layer allowing for easy switching between in-memory and database storage
- **Security**: Password hashing and secure session management ready for implementation

## External Dependencies

### UI Framework and Styling
- **Radix UI**: Comprehensive unstyled component library for accessibility and interactions
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **shadcn/ui**: Pre-built component system built on Radix UI and Tailwind
- **Lucide React**: Icon library for consistent iconography

### Database and ORM
- **Neon Database**: Serverless PostgreSQL database service
- **Drizzle ORM**: Type-safe ORM with excellent TypeScript integration
- **Drizzle Kit**: Database migration and schema management tools

### Development Tools
- **Vite**: Next-generation frontend build tool with fast HMR
- **TypeScript**: Static type checking for improved development experience
- **PostCSS**: CSS processing with Tailwind CSS integration
- **ESBuild**: Fast JavaScript bundler for production builds

### Form Handling and Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: Schema validation library integrated with Drizzle for type-safe data validation
- **Hookform Resolvers**: Integration between React Hook Form and Zod validation

### Utility Libraries
- **date-fns**: Date manipulation and formatting
- **clsx & class-variance-authority**: Dynamic className generation and variant management
- **nanoid**: Unique ID generation for various use cases