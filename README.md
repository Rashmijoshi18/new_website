# New Website - Personal Portfolio

A modern, responsive portfolio website built with React and Vite, showcasing personal projects, skills, and professional experience with a clean, interactive design.

## 🚀 Features

- **React 18+** - Latest React features with hooks and functional components
- **Vite** - Lightning-fast build tool and development server
- **Multi-page Navigation** - Home, About, Projects, Experience, Skills, and Contact pages
- **Component-based Architecture** - Modular, reusable UI components
- **Theme Toggle** - Dark/light mode switching capability
- **Responsive Design** - Mobile-first approach for all devices
- **Project Portfolio** - Interactive project cards and showcases
- **Skills Showcase** - Dynamic skill pills and badges
- **Professional Experience** - Structured experience timeline
- **Hot Module Replacement (HMR)** - Instant updates during development
- **ESLint** - Code quality and consistency

## 🛠️ Tech Stack

- **Frontend Framework:** React
- **Build Tool:** Vite
- **Language:** JavaScript
- **Linting:** ESLint
- **Package Manager:** npm/yarn

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (version 14.0 or higher)
- npm or yarn package manager

## 🚀 Getting Started

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Rashmijoshi18/new_website.git
   cd new_website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

### Development

3. **Start the development server**

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

### Building for Production

5. **Build the project**

   ```bash
   npm run build
   ```

   or

   ```bash
   yarn build
   ```

6. **Preview the build**
   ```bash
   npm run preview
   ```
   or
   ```bash
   yarn preview
   ```

## 📁 Project Structure

```
new_website/
├── .gitignore              # Git ignore rules
├── .eslintrc.cjs          # ESLint configuration
├── README.md              # Project documentation
├── index.html             # Main HTML template
├── package.json           # Project dependencies and scripts
├── package-lock.json      # Lockfile for exact dependency versions
├── vite.config.js         # Vite build configuration
├── public/                # Static assets (served directly)
├── src/                   # Source code directory
│   ├── App.jsx           # Main App component
│   ├── main.jsx          # Application entry point
│   ├── index.css         # Global styles and CSS reset
│   ├── assets/           # Static assets (images, icons)
│   │   ├── me.png        # Profile/personal image
│   │   └── react.svg     # React logo
│   ├── components/       # Reusable React components
│   │   ├── Footer.jsx    # Footer component
│   │   ├── NavItem.jsx   # Navigation item component
│   │   ├── ProjectCard.jsx # Project card component
│   │   ├── Sidebar.jsx   # Sidebar navigation component
│   │   ├── SkillPill.jsx # Skill badge/pill component
│   │   └── ThemeToggle.jsx # Dark/light theme toggle
│   ├── data/             # Static data files
│   │   ├── experience.js # Work experience data
│   │   ├── projects.js   # Projects data
│   │   └── skills.js     # Skills data
│   ├── pages/            # Page components
│   │   ├── About.jsx     # About page
│   │   ├── Contact.jsx   # Contact page
│   │   ├── Experience.jsx # Experience page
│   │   ├── Home.jsx      # Home/landing page
│   │   ├── NotFound.jsx  # 404 error page
│   │   ├── Projects.jsx  # Projects portfolio page
│   │   └── Skills.jsx    # Skills showcase page
│   └── utils/            # Utility functions and helpers
│       ├── theme.js      # Theme management utilities
└── dist/                 # Built files (generated after npm run build)

```

### Key Directories Explained:

- **`src/assets/`** - Images, icons, and media files (me.png for profile picture)
- **`src/components/`** - Reusable UI components (Footer, Sidebar, ProjectCard, etc.)
- **`src/data/`** - Static data files for experience, projects, and skills
- **`src/pages/`** - Individual page components for routing (Home, About, Contact, etc.)
- **`src/utils/`** - Utility functions and helper files (theme management, etc.)
- **`public/`** - Static files served directly without processing
- **`dist/`** - Production build output (created after running `npm run build`)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🎨 Customization

### Styling

- Modify `src/index.css` for global styles
- Add component-specific CSS files in the `src/components/` directory
- Consider using CSS modules or styled-components for component styling

### Components

- Create new React components in the `src/components/` directory
- Import and use components in `src/App.jsx` or other components

### Configuration

- Vite configuration can be modified in `vite.config.js`
- ESLint rules can be adjusted in `.eslintrc.cjs`

## 🚀 Deployment

### Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect it's a Vite project and deploy

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Rashmi Joshi** - [Rashmijoshi18](https://github.com/Rashmijoshi18)

## 📞 Support

If you have any questions or need help with setup, please:

1. Check the [Issues](https://github.com/Rashmijoshi18/new_website/issues) page
2. Create a new issue if your problem isn't already addressed
3. Reach out via GitHub

---

⭐ Don't forget to star this repository if you found it helpful!
