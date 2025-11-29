# Portfolio - HTML + Tailwind CSS

A modern, responsive developer portfolio built with plain HTML and Tailwind CSS.

## Features

- ✅ Fully responsive design
- ✅ Dark theme with modern UI
- ✅ Smooth scrolling navigation
- ✅ Interactive contact form with validation
- ✅ Animated skill badges
- ✅ Glassmorphism effects
- ✅ Mobile-friendly navigation
- ✅ SEO optimized

## Tech Stack

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework
- **Vanilla JavaScript** - No framework dependencies
- **Vite** - Fast build tool and dev server

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd html-version
```

2. Install dependencies:
```bash
npm install
```

3. Build Tailwind CSS:
```bash
npx tailwindcss -i ./css/input.css -o ./css/output.css --watch
```

4. In another terminal, start the dev server:
```bash
npm run dev
```

The portfolio will be available at `http://localhost:3000`

### Build for Production

1. Build Tailwind CSS for production:
```bash
npx tailwindcss -i ./css/input.css -o ./css/output.css --minify
```

2. Build with Vite:
```bash
npm run build
```

The production files will be in the `dist` folder.

## Project Structure

```
html-version/
├── index.html          # Main HTML file
├── css/
│   ├── input.css      # Tailwind input file
│   └── output.css     # Compiled Tailwind CSS (generated)
├── js/
│   └── main.js        # JavaScript functionality
├── package.json       # Dependencies
├── tailwind.config.js # Tailwind configuration
├── postcss.config.js  # PostCSS configuration
└── vite.config.js     # Vite configuration
```

## Customization

### Colors

Edit `tailwind.config.js` to customize colors:

```javascript
colors: {
  dark: {
    bg: '#0a0a0a',
    surface: '#121212',
    card: '#1a1a1a',
    border: '#2a2a2a',
  },
  accent: {
    primary: '#3b82f6',
    secondary: '#8b5cf6',
    hover: '#60a5fa',
  },
}
```

### Content

Edit `index.html` to update:
- Personal information
- Skills
- Projects
- Contact details
- Social media links

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal use.


