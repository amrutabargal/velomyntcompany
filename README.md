# Velomynt Digital - IT Company Website

A modern, responsive IT company website built with React, Vite, and Tailwind CSS. Features a dark theme with smooth animations and a professional design.

## Features

- 🎨 Modern dark theme UI with emerald/green accent colors
- 📱 Fully responsive design for all devices
- ⚡ Fast performance with Vite
- 🎭 Smooth animations using Motion (Framer Motion)
- 🧩 Component-based architecture
- 🎯 Multiple pages: Home, About, Services, Technologies, Portfolio, Testimonials, Contact

## Tech Stack

- **React 18.3.1** - UI library
- **Vite 6.3.5** - Build tool and dev server
- **Tailwind CSS 4.1.12** - Styling
- **Motion (Framer Motion) 12.23.24** - Animations
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

## Project Structure

```
velomyntcompany/
├── src/
│   ├── app/
│   │   ├── App.jsx              # Main app component with routing
│   │   └── components/          # Page components
│   │       ├── HomePage.jsx
│   │       ├── AboutPage.jsx
│   │       ├── ServicesPage.jsx
│   │       ├── TechnologiesPage.jsx
│   │       ├── PortfolioPage.jsx
│   │       ├── TestimonialsPage.jsx
│   │       ├── ContactPage.jsx
│   │       ├── Header.jsx
│   │       ├── Footer.jsx
│   │       └── ui/              # Reusable UI components
│   ├── styles/                  # Global styles
│   └── main.jsx                 # Entry point
├── index.html
├── vite.config.js
└── package.json
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production

## Customization

- **Colors**: Edit `src/styles/theme.css` to change the color scheme
- **Content**: Update component files in `src/app/components/` to modify page content
- **Styling**: Modify Tailwind classes or add custom CSS in `src/styles/`

## License

This project is based on a Figma community design. See ATTRIBUTIONS.md for more information.
