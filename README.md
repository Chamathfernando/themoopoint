# The Moo Point - Project Documentation

This project is a high-performance, single-page React application built with Vite, Tailwind CSS, and TypeScript.

## Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine (Recommended: LTS version).

## Getting Started

Follow these steps to get the project running locally.

### 1. Install Dependencies
Before running the app for the first time, install the required packages:
```bash
npm install
```

### 2. Start Development Server
To launch the app with Hot Module Replacement (HMR) and live reloading:
```bash
npm run dev
```
The application will typically be available at `http://localhost:5173`.

### 3. Build for Production
To create an optimized production build in the `dist/` folder:
```bash
npm run build
```
This command runs the TypeScript compiler (`tsc`) followed by the Vite build process.

### 4. Preview Production Build
To locally test the production-ready files created in the previous step:
```bash
npm run preview
```

## Tech Stack
- **Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Icons:** Custom SVG & Font Awesome (via CDN if applicable)

## Project Structure
- `components/`: Modular React components (Hero, Header, Products, etc.).
- `constants.tsx`: Configuration for navigation, service items, and product data.
- `types.ts`: TypeScript interfaces for core data structures.
- `App.tsx`: Main application assembly and SEO/Metadata configuration.