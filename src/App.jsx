// // src/App.jsx
// /**
//  * App.jsx
//  * - root layout with left sidebar and main content
//  * - routes for Home, About, Projects, Experience, Contact
//  * - Sidebar receives a compact/collapsed state on small screens
//  */

// import React from 'react'
// import { Routes, Route } from 'react-router-dom'
// import Sidebar from './components/Sidebar'
// import Home from './pages/Home'
// import Sidebar from './components/Footer'
// import About from './pages/About'
// import Projects from './pages/Projects'
// import Experience from './pages/Experience'
// import Contact from './pages/Contact'
// import NotFound from './pages/NotFound'

// export default function App() {
//   return (
//     <div className="min-h-screen bg-white dark:bg-primary text-slate-800 dark:text-slate-200 transition-colors">
//       <div className="flex">
//         {/* Left slidebar */}
//         <Sidebar />

//         {/* Main content */}
//         <main className="flex-1 p-6 md:p-10">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/projects" element={<Projects />} />
//             <Route path="/experience" element={<Experience />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </main>
//       </div>
//     </div>
//   )
// }

/**
 * App.jsx
 * - root layout with left sidebar and main content
 * - routes for Home, About, Projects, Experience, Contact
 * - Sidebar stays fixed on the left
 * - Footer sits at the bottom of the main content
 */

import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer"; // ✅ fixed
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// export default function App() {
//   return (
//     <div className="min-h-screen bg-[#0d1117] text-slate-200 transition-colors flex">
//       {/* Left Sidebar */}
//       <Sidebar />

//       {/* Main Content Area */}
//       <div className="flex flex-col flex-1 min-h-screen">
//         <main className="flex-1 p-6 md:p-10">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/projects" element={<Projects />} />
//             <Route path="/experience" element={<Experience />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </main>

//         {/* Footer */}
//         <Footer />
//       </div>
//     </div>
//   );
// }
export default function App() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-slate-200 transition-colors flex">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 pl-2 pr-6 md:pr-10 pt-4 pb-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </main>
    </div>
  )
}
