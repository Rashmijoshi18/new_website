// // import React from "react";
// // import { Github, Linkedin, Mail } from "lucide-react";

// // export default function Footer() {
// //   return (
// //     <footer className="w-full border-t border-gray-300 bg-white text-gray-600 text-sm py-6">
// //       <div className="flex flex-col md:flex-row items-center justify-between mx-auto px-4 md:pl-20 lg:pl-64 md:pr-6 md:pr-10">
// //         {/* Left section with GeeksforGeeks branding */}
// //         <div className="flex items-center mb-2 md:mb-0">
// //           <p className="">© {new Date().getFullYear()} Rashmi Joshi.</p>
// //           {/* <span className="text-green-600 font-medium">GeeksforGeeks</span> */}
// //           <p className="ml-1">All rights reserved.</p>
// //         </div>

// //         {/* Links with icons */}
// //         <div className="flex gap-4">
// //           <a
// //             href="https://github.com/Rashmijoshi18"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="flex items-center gap-1 hover:text-[#2F8D46] transition-colors"
// //           >
// //             <Github className="w-4 h-4" />
// //             <span className="hidden sm:inline">GitHub</span>
// //           </a>
// //           <a
// //             href="https://linkedin.com/"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="flex items-center gap-1 hover:text-[#2F8D46] transition-colors"
// //           >
// //             <Linkedin className="w-4 h-4" />
// //             <span className="hidden sm:inline">LinkedIn</span>
// //           </a>
// //           <a
// //             href="mailto:rashmijoshi3699@gmail.com"
// //             className="flex items-center gap-1 hover:text-[#2F8D46] transition-colors"
// //           >
// //             <Mail className="w-4 h-4" />
// //             <span className="hidden sm:inline">Email</span>
// //           </a>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // }


// import React from "react";
// import { Github, Linkedin, Mail } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="w-full border-t border-gray-200 bg-white text-gray-600 text-sm shadow-inner">
//       <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 lg:px-12 py-6">
        
//         {/* Left section */}
//         <div className="flex items-center mb-3 md:mb-0 text-center md:text-left">
//           <p>
//             © {new Date().getFullYear()} <span className="font-semibold text-gray-800">Rashmi Joshi</span>.  
//             <span className="ml-1">All rights reserved.</span>
//           </p>
//         </div>

//         {/* Social Links */}
//         <div className="flex gap-6">
//           <a
//             href="https://github.com/Rashmijoshi18"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-2 text-gray-600 hover:text-[#2F8D46] transition-all group"
//           >
//             <Github className="w-4 h-4" />
//             <span className="hidden sm:inline relative">
//               GitHub
//               <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#2F8D46] transition-all duration-300 group-hover:w-full"></span>
//             </span>
//           </a>
//           <a
//             href="https://linkedin.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-2 text-gray-600 hover:text-[#2F8D46] transition-all group"
//           >
//             <Linkedin className="w-4 h-4" />
//             <span className="hidden sm:inline relative">
//               LinkedIn
//               <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#2F8D46] transition-all duration-300 group-hover:w-full"></span>
//             </span>
//           </a>
//           <a
//             href="mailto:rashmijoshi3699@gmail.com"
//             className="flex items-center gap-2 text-gray-600 hover:text-[#2F8D46] transition-all group"
//           >
//             <Mail className="w-4 h-4" />
//             <span className="hidden sm:inline relative">
//               Email
//               <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#2F8D46] transition-all duration-300 group-hover:w-full"></span>
//             </span>
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }

import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-gradient-to-r from-gray-50 to-green-50 text-gray-700 text-sm">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 lg:px-12 py-6">
        
        {/* Left Section */}
        <div className="flex items-center mb-3 md:mb-0 text-center md:text-left">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-[#308D46]">Rashmi Joshi</span>.
            <span className="ml-1">All rights reserved.</span>
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6">
          <a
            href="https://github.com/Rashmijoshi18"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-[#308D46] transition-all"
          >
            <Github className="w-4 h-4" />
            <span className="hidden sm:inline font-medium">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-[#308D46] transition-all"
          >
            <Linkedin className="w-4 h-4" />
            <span className="hidden sm:inline font-medium">LinkedIn</span>
          </a>
          <a
            href="mailto:rashmijoshi3699@gmail.com"
            className="flex items-center gap-2 text-gray-700 hover:text-[#308D46] transition-all"
          >
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline font-medium">Email</span>
          </a>
        </div>
      </div>

      {/* Bottom Status Row (like sidebar footer) */}
      <div className="px-6 lg:px-12 pb-4">
        <div className="flex items-center justify-center gap-2">
          <div className="w-2 h-2 bg-[#308D46] rounded-full animate-pulse"></div>
          <p className="text-xs text-gray-600">Ready to code</p>
        </div>
      </div>
    </footer>
  );
}
