// 'use client';

// import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
// import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';

// const Footer = () => {
//   return (
//     <footer className="bg-blue-900 text-white py-10 px-4">
//       <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {/* Logo + Tagline */}
//         <div>
//           <div className="text-3xl font-bold mb-2">
//             <span className="text-white">Cars</span>
//             <span className="text-gray-300">.net</span>
//           </div>
//           <p className="text-sm text-gray-300">
//             Get retail and wholesale prices instantly.
//           </p>
//         </div>

//         {/* Menu */}
//         <div>
//           <h3 className="text-lg font-semibold mb-2 border-l-2 pl-2 border-white">Menu</h3>
//           <ul className="space-y-1 text-sm text-gray-200">
//             <li><a href="/about" className="hover:underline">About</a></li>
//             <li><a href="/contact" className="hover:underline">Contact</a></li>
//             <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
//           </ul>
//         </div>

//         {/* Contact */}
//         <div>
//           <h3 className="text-lg font-semibold mb-2 border-l-2 pl-2 border-white">Contact</h3>
//           <ul className="space-y-2 text-sm text-gray-200">
//             <li className="flex items-start gap-2">
//               <MdLocationOn className="mt-1" />
//               <span>4200 Hamill Avenue, San Diego, California 92109</span>
//             </li>
//             <li className="flex items-center gap-2">
//               <MdPhone />
//               <span>021 3456 789</span>
//             </li>
//             <li className="flex items-center gap-2">
//               <MdEmail />
//               <span>customer@moover.com</span>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Social Media Icons */}
//       <div className="flex justify-center mt-8 gap-4">
//         <a href="#" className="bg-white text-blue-900 p-2 rounded hover:bg-gray-200">
//           <FaFacebookF />
//         </a>
//         <a href="#" className="bg-white text-blue-900 p-2 rounded hover:bg-gray-200">
//           <FaTwitter />
//         </a>
//         <a href="#" className="bg-white text-blue-900 p-2 rounded hover:bg-gray-200">
//           <FaInstagram />
//         </a>
//         <a href="#" className="bg-white text-blue-900 p-2 rounded hover:bg-gray-200">
//           <FaYoutube />
//         </a>
//       </div>

//       {/* Copyright */}
//       <div className="text-center text-xs text-gray-300 mt-6">
//         © Copyright 2021 Cars.net’s
//       </div>
//     </footer>
//   );
// };

// export default Footer;




'use client';

import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-[#00008B] text-white py-10 px-4 md:px-10 lg:px-20">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-10 md:gap-12 md:items-start md:flex-row lg:flex-row justify-between">
        
        {/* Logo + Tagline */}
        <div className="text-center md:text-left space-y-2">
          <div className="text-2xl sm:text-3xl font-bold">
            <span className="text-white">Cars</span>
            <span className="text-gray-300">.net</span>
          </div>
          <p className="text-sm sm:text-base text-gray-300 max-w-xs">
            Get retail and wholesale prices instantly.
          </p>
        </div>

        {/* Menu */}
        <div className="text-center md:text-left">
          <h3 className="text-base sm:text-lg font-semibold mb-2 border-l-2 pl-2 border-white">
            Menu
          </h3>
          <ul className="space-y-1 text-sm sm:text-base text-gray-200">
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="text-center md:text-left max-w-sm">
          <h3 className="text-base sm:text-lg font-semibold mb-2 border-l-2 pl-2 border-white">
            Contact
          </h3>
          <ul className="space-y-3 text-sm sm:text-base text-gray-200">
            <li className="flex justify-center md:justify-start items-start gap-2">
              <MdLocationOn className="mt-1 shrink-0" />
              <span>4200 Hamill Avenue, San Diego, California 92109</span>
            </li>
            <li className="flex justify-center md:justify-start items-center gap-2">
              <MdPhone />
              <span>021 3456 789</span>
            </li>
            <li className="flex justify-center md:justify-start items-center gap-2">
              <MdEmail />
              <span>customer@moover.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center mt-10 gap-4">
        <a href="#" className="bg-white text-blue-900 p-2 rounded hover:bg-gray-200 text-sm">
          <FaFacebookF />
        </a>
        <a href="#" className="bg-white text-blue-900 p-2 rounded hover:bg-gray-200 text-sm">
          <FaTwitter />
        </a>
        <a href="#" className="bg-white text-blue-900 p-2 rounded hover:bg-gray-200 text-sm">
          <FaInstagram />
        </a>
        <a href="#" className="bg-white text-blue-900 p-2 rounded hover:bg-gray-200 text-sm">
          <FaYoutube />
        </a>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs sm:text-sm text-gray-300 mt-8">
        © Copyright 2021 Cars.net’s
      </div>
    </footer>
  );
};

export default Footer;
