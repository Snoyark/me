# Neel Venugopal - Portfolio

A modern, responsive personal portfolio website built with React and styled-components.

## 🚀 Features

- **Modern React Architecture**: Built with React 18 and functional components
- **Styled Components**: All styling done with styled-components for better component isolation
- **Responsive Design**: Fully responsive across all device sizes
- **Dark Theme**: Beautiful dark theme with gradient accents
- **GitHub Integration**: Dynamic project loading from GitHub API
- **Smooth Animations**: Intersection Observer API for scroll-triggered animations
- **TypeScript Ready**: Easy to convert to TypeScript if needed
- **Performance Optimized**: Lazy loading and optimized bundle size

## 🛠️ Tech Stack

- **React 18** - UI library
- **React Router** - Client-side routing
- **Styled Components** - CSS-in-JS styling
- **Font Awesome** - Icons
- **GitHub Pages** - Deployment

## 🏗️ Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.js       # Navigation component
│   ├── Footer.js       # Footer component
│   ├── ScrollProgress.js # Scroll progress indicator
│   └── ProjectCard.js  # Individual project card
├── pages/              # Page components
│   ├── Home.js         # Home page
│   ├── Experience.js   # Experience timeline
│   ├── Projects.js     # Projects showcase
│   └── Contact.js      # Contact information
├── hooks/              # Custom React hooks
│   └── useGitHubProjects.js # GitHub API integration
├── styles/             # Global styles
│   └── GlobalStyle.js  # Global styled-components
└── utils/              # Utility functions
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Snoyark/personal-website.git
cd personal-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📦 Build and Deployment

### Build for Production

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

This will build the app and deploy it to GitHub Pages automatically.

## 🎨 Customization

### Colors and Theme

The color scheme is defined in the styled-components. Key colors:
- Primary: `#63b3ed` (Blue)
- Secondary: `#805ad5` (Purple)
- Background: `#0f172a` to `#1e293b` (Dark gradient)
- Text: `#f7fafc` (Light gray)

### Content Updates

- **Personal Info**: Update in `src/pages/Home.js`
- **Experience**: Modify `src/pages/Experience.js`
- **GitHub Username**: Change in `src/hooks/useGitHubProjects.js`
- **Contact Links**: Update in `src/pages/Contact.js`

## 🔧 Available Scripts

- `npm start` - Runs the development server
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run deploy` - Deploys to GitHub Pages
- `npm run eject` - Ejects from Create React App (one-way operation)

## 📱 Mobile Responsiveness

The site is fully responsive with breakpoints at:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌟 Features in Detail

### GitHub Integration
- Automatically fetches repositories from GitHub API
- Filters out forks and prioritizes repos with descriptions
- Shows language, stars, and forks for each project
- Graceful error handling and loading states

### Smooth Animations
- Scroll-triggered animations using Intersection Observer
- Smooth transitions between pages
- Typing effect on the home page title
- Hover effects on interactive elements

### Navigation
- Fixed navigation bar with scroll effects
- Mobile-responsive hamburger menu
- Active link highlighting
- Smooth scrolling between sections

## 🚀 Performance

- Lazy loading of components
- Optimized images and assets
- Minimal bundle size
- Fast loading times
- Efficient re-renders with React hooks

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you make improvements that could benefit others, pull requests are welcome!

## 📧 Contact

Neel Venugopal - [LinkedIn](https://linkedin.com/in/neel-venugopal) - [GitHub](https://github.com/Snoyark)

---

Built with ❤️ using React and styled-components