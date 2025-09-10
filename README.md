# New Website - Personal Portfolio

A modern, responsive portfolio website built with React and Vite, showcasing personal projects, skills, and professional experience with a clean, interactive design.

## 🚀 Features

-   **React 18+** - Latest React features with hooks and functional components
-   **Vite** - Lightning-fast build tool and development server
-   **Multi-page Navigation** - Home, About, Projects, Skills, and Contact pages
-   **Component-based Architecture** - Modular, reusable UI components
-   **Theme Toggle** - Dark/light mode switching capability
-   **Responsive Design** - Mobile-first approach for all devices
-   **Project Portfolio** - Interactive project cards and showcases
-   **Skills Showcase** - Dynamic skill pills and badges
-   **Professional Experience** - Structured experience timeline
-   **Hot Module Replacement (HMR)** - Instant updates during development
-   **ESLint** - Code quality and consistency

## 🛠️ Tech Stack

-   **Frontend Framework:** React
-   **Build Tool:** Vite
-   **Language:** JavaScript
-   **Linting:** ESLint
-   **Package Manager:** npm/yarn

## 📋 Prerequisites

Before running this project, make sure you have:

-   Node.js (version 14.0 or higher)
-   npm or yarn package manager

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
├── .gitignore             
├── .eslintrc.cjs          
├── README.md              
├── index.html             
├── package.json          
├── package-lock.json      
├── vite.config.js        
├── public/                
├── src/                   
│   ├── App.jsx           
│   ├── main.jsx          
│   ├── index.css       
│   ├── assets/           
│   │   ├── me.png      
│   │   └── react.svg     
│   ├── components/      
│   │   ├── Footer.jsx    
│   │   ├── ProjectCard.jsx 
│   │   ├── Sidebar.jsx  
│   │   ├── SkillPill.jsx 
│   │   └── ThemeToggle.jsx 
│   ├── data/            
│   │   ├── experience.js 
│   │   ├── projects.js  
│   │   └── skills.js     
│   ├── pages/            
│   │   ├── About.jsx    
│   │   ├── Contact.jsx   
│   │   ├── Experience.jsx 
│   │   ├── Home.jsx      
│   │   ├── NotFound.jsx  
│   │   ├── Projects.jsx 
│   │   └── Skills.jsx   
│   └── utils/          
│       ├── theme.js      
└── dist/                

```

### Key Directories Explained:

-   **`src/assets/`** - Images, icons, and media files (me.png for profile picture)
-   **`src/components/`** - Reusable UI components (Footer, Sidebar, ProjectCard, etc.)
-   **`src/data/`** - Static data files for experience, projects, and skills
-   **`src/pages/`** - Individual page components for routing (Home, About, Contact, etc.)
-   **`src/utils/`** - Utility functions and helper files (theme management, etc.)
-   **`public/`** - Static files served directly without processing
-   **`dist/`** - Production build output (created after running `npm run build`)

## 🔧 Available Scripts

-   `npm run dev` - Start development server
-   `npm run build` - Build for production
-   `npm run preview` - Preview production build locally
-   `npm run lint` - Run ESLint for code quality checks

## 🎨 Customization

### Styling

-   Modify `src/index.css` for global styles
-   Add component-specific CSS files in the `src/components/` directory
-   Consider using CSS modules or styled-components for component styling

### Components

-   Create new React components in the `src/components/` directory
-   Import and use components in `src/App.jsx` or other components

### Configuration

-   Vite configuration can be modified in `vite.config.js`
-   ESLint rules can be adjusted in `.eslintrc.cjs`

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
