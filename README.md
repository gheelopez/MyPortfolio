# Ghee Portfolio - React Application

A modern portfolio website built with React and Vite, showcasing professional experience, projects, and skills.

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and development server
- **CSS** - Custom styling with CSS variables

## Project Structure

```
GheePortfolio/
├── src/
│   ├── components/          # React components
│   │   ├── Header.jsx      # Navigation header
│   │   ├── Hero.jsx        # Hero section
│   │   ├── SkillsBand.jsx  # Scrolling skills banner
│   │   ├── Stats.jsx       # Statistics section
│   │   ├── About.jsx       # About section
│   │   ├── Experience.jsx  # Work experience
│   │   ├── Projects.jsx    # Featured projects
│   │   ├── Skills.jsx      # Skills section
│   │   ├── Education.jsx   # Education background
│   │   ├── Contact.jsx     # Contact information
│   │   └── Footer.jsx      # Footer section
│   ├── App.jsx             # Main app component
│   ├── App.css             # Global styles
│   └── main.jsx            # Application entry point
├── index.html              # HTML template
├── vite.config.js          # Vite configuration
└── package.json            # Dependencies and scripts

```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

Start the development server with hot reload:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Scrolling** - Smooth navigation between sections
- **Modern UI** - Clean, professional design with subtle animations
- **Component-Based Architecture** - Modular React components for easy maintenance
- **Performance Optimized** - Built with Vite for fast development and production builds

## Customization

### Updating Content

All content is defined within the component files in `src/components/`. You can easily update:

- **Personal information** - Edit `Hero.jsx`, `About.jsx`, and `Contact.jsx`
- **Projects** - Update the projects array in `Projects.jsx`
- **Experience** - Modify the experiences array in `Experience.jsx`
- **Skills** - Change the skills arrays in `Skills.jsx` and `SkillsBand.jsx`
- **Education** - Update the education array in `Education.jsx`

### Styling

Global styles and CSS variables are defined in `src/App.css`. You can customize:

- **Color scheme** - Update CSS custom properties in the `:root` selector
- **Typography** - Modify font sizes, weights, and families
- **Spacing** - Adjust padding, margins, and gaps
- **Animations** - Customize transitions and animations

## Migration Notes

The original HTML/CSS portfolio has been converted to React with the following improvements:

- Component-based architecture for better maintainability
- React hooks for smooth scroll functionality
- Vite for fast development and optimized builds
- Preserved all original styling and animations
- Original HTML file backed up as `index-old.html`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
