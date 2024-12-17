// import Link from "next/link";

// export default function Footer() {
//   return (
//     <>
//       {/* Brand Section */}
//       <div className="bg-[#FAFAFA] w-full h-[142px]">
//         <div className="px-[195px] py-12 flex items-center justify-between ">
//           {/* Logo Section */}
//           <img src="Bandage.png" alt="Bandage Logo" className="h-10" />

//           {/* Social Media Icons */}
//           <div className="flex space-x-4">
//             <Link href="/" aria-label="Facebook">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-6 h-6 text-[#23A6F0] hover:text-gray-600"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.407.593 24 1.324 24h11.495V14.706H9.653V11.3h3.166V8.658c0-3.134 1.916-4.832 4.714-4.832 1.341 0 2.495.1 2.83.144v3.281l-1.941.001c-1.524 0-1.818.726-1.818 1.79v2.345h3.64l-.474 3.405h-3.166V24h6.206c.73 0 1.324-.593 1.324-1.324V1.324C24 .593 23.407 0 22.676 0z" />
//               </svg>
//             </Link>
//             <Link href="/" aria-label="Twitter">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-6 h-6 text-[#23A6F0] hover:text-gray-600"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M24 4.557a9.827 9.827 0 01-2.828.775A4.93 4.93 0 0023.337 3.1a9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.38 4.482A13.936 13.936 0 011.671 3.15a4.916 4.916 0 001.523 6.573 4.902 4.902 0 01-2.228-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084 4.917 4.917 0 004.604 3.417A9.866 9.866 0 010 19.539a13.905 13.905 0 007.548 2.213c9.057 0 14.01-7.512 14.01-14.01 0-.213-.005-.425-.014-.637A10.026 10.026 0 0024 4.557z" />
//               </svg>
//             </Link>
//             <Link href="/" aria-label="Instagram">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-6 h-6 text-[#23A6F0] hover:text-gray-600"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.329 3.608 1.304.975.975 1.241 2.242 1.304 3.608.058 1.265.069 1.645.069 4.849s-.012 3.584-.07 4.849c-.062 1.366-.329 2.633-1.304 3.608-.975.975-2.242 1.241-3.608 1.304-1.265.058-1.645.069-4.849.069s-3.584-.012-4.849-.07c-1.366-.062-2.633-.329-3.608-1.304-.975-.975-1.241-2.242-1.304-3.608-.058-1.265-.069-1.645-.069-4.849s.012-3.584.07-4.849c.062-1.366.329-2.633 1.304-3.608.975-.975 2.242-1.241 3.608-1.304 1.265-.058 1.645-.069 4.849-.069M12 0C8.741 0 8.332.014 7.053.072c-1.421.065-2.687.34-3.742 1.394C2.257 2.522 1.982 3.788 1.918 5.209.86 6.49.846 6.9.846 12s.014 5.509.072 6.788c.065 1.421.34 2.687 1.394 3.742 1.054 1.054 2.32 1.329 3.742 1.394C8.332 23.986 8.741 24 12 24s3.668-.014 4.947-.072c1.421-.065 2.687-.34 3.742-1.394 1.054-1.054 1.329-2.32 1.394-3.742.058-1.279.072-1.688.072-6.788s-.014-5.509-.072-6.788c-.065-1.421-.34-2.687-1.394-3.742-1.054-1.054-2.32-1.329-3.742-1.394C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.998 3.998 0 110-7.996 3.998 3.998 0 010 7.996zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
//               </svg>
//             </Link>
//           </div>
//         </div>
//       </div>
//       <footer className="bg-[#fff] mt-[50px] px-[195px] font-sans tracking-wide">
//         {/* Main Content */}
//         <div className="grid max-sm:grid-cols-1 lg:grid-cols-6 gap-8 text-gray-500 h-[272px]">
//           {/* Column 1 - Company Info */}
//           <div className="w-[148pxpx] h-[170px] ">
//             <h4 className="text-lg font-semibold mb-4 text-gray-800">
//               Company Info
//             </h4>
//             <ul className="space-y-4">
//               <li>
//                 <Link href="/" className="hover:underline">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/" className="hover:underline">
//                   Carrier
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/" className="hover:underline">
//                   We Are Hiring
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/" className="hover:underline">
//                   Blog
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Column 2 - Legal */}
//           <div className="w-[152pxpx] h-[170px] ">
//             <h4 className="text-lg font-semibold mb-4 text-gray-800">Legal</h4>
//             <ul className="space-y-4">
//               <li>
//                 <Link href="/" className="hover:underline">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/" className="hover:underline">
//                   Carrier
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/" className="hover:underline">
//                   Blog
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Column 3 - Features */}
//           <div className="w-[148px] h-[170px] ">
//             <h4 className="text-lg font-semibold mb-4 text-gray-800">
//               Features
//             </h4>
//             <ul className="space-y-4">
//               <li>
//                 <Link href="/" className="hover:underline">
//                   Business Marketing
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/" className="hover:underline">
//                   User Analytic
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/" className="hover:underline">
//                   Live Chat
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/" className="hover:underline">
//                   Unlimited Support
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Column 4 - Resources */}
//           <div className="w-[106px] h-[126px] ">
//             <h4 className="text-lg font-semibold mb-4 text-gray-800">
//               Resources
//             </h4>
//             <ul className="space-y-4">
//               <li>
//                 <Link href="/" className="hover:underline">
//                   IOS & Android
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/" className="hover:underline">
//                   Watch a Demo
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/" className="hover:underline">
//                   Customers
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/" className="hover:underline">
//                   API
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Column 5 - Get In Touch */}
//           <div className="w-[321px] h-[131px] ">
//             <h4 className="text-lg font-semibold mb-4 text-gray-800">
//               Get In Touch
//             </h4>
//             <div className="space-y-4">
//               {/* Input and Button */}
//               <div className="flex">
//                 <input
//                   type="email"
//                   placeholder="Your Email"
//                   className="flex-1 border border-gray-300 rounded-l-md p-2 text-sm"
//                 />
//                 <button className="bg-blue-600 text-white px-4 py-2 border-gray-300 rounded-r-md">
//                   Subscribe
//                 </button>
//               </div>

//               {/* Paragraph */}
//               <p>Lorem ipsum dolor sit amet.</p>
//             </div>
//           </div>
//         </div>
//       </footer>
//       {/* Footer Bottom */}
//       <div className="bg-[#FAFAFA] w-full h-[74px] px-[195px]  flex justify-between items-center text-gray-500 text-sm">
//         <p className="text-sm ">Made With Love By Finland All Right Reserved</p>
//       </div>
//     </>
//   );
// }

import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* Brand Section */}
      <div className="bg-[#FAFAFA] w-full py-6 px-4 md:px-12 lg:px-[195px]">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Logo Section */}
          <img
            src="Bandage.png"
            alt="Bandage Logo"
            className="h-10 self-center md:self-auto"
          />

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <Link href="/" aria-label="Facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-[#23A6F0] hover:text-gray-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.407.593 24 1.324 24h11.495V14.706H9.653V11.3h3.166V8.658c0-3.134 1.916-4.832 4.714-4.832 1.341 0 2.495.1 2.83.144v3.281l-1.941.001c-1.524 0-1.818.726-1.818 1.79v2.345h3.64l-.474 3.405h-3.166V24h6.206c.73 0 1.324-.593 1.324-1.324V1.324C24 .593 23.407 0 22.676 0z" />
              </svg>
            </Link>
            <Link href="/" aria-label="Twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-[#23A6F0] hover:text-gray-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.827 9.827 0 01-2.828.775A4.93 4.93 0 0023.337 3.1a9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.38 4.482A13.936 13.936 0 011.671 3.15a4.916 4.916 0 001.523 6.573 4.902 4.902 0 01-2.228-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084 4.917 4.917 0 004.604 3.417A9.866 9.866 0 010 19.539a13.905 13.905 0 007.548 2.213c9.057 0 14.01-7.512 14.01-14.01 0-.213-.005-.425-.014-.637A10.026 10.026 0 0024 4.557z" />
              </svg>
            </Link>
            <Link href="/" aria-label="Instagram">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-[#23A6F0] hover:text-gray-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.329 3.608 1.304.975.975 1.241 2.242 1.304 3.608.058 1.265.069 1.645.069 4.849s-.012 3.584-.07 4.849c-.062 1.366-.329 2.633-1.304 3.608-.975.975-2.242 1.241-3.608 1.304-1.265.058-1.645.069-4.849.069s-3.584-.012-4.849-.07c-1.366-.062-2.633-.329-3.608-1.304-.975-.975-1.241-2.242-1.304-3.608-.058-1.265-.069-1.645-.069-4.849s.012-3.584.07-4.849c.062-1.366.329-2.633 1.304-3.608.975-.975 2.242-1.241 3.608-1.304 1.265-.058 1.645-.069 4.849-.069M12 0C8.741 0 8.332.014 7.053.072c-1.421.065-2.687.34-3.742 1.394C2.257 2.522 1.982 3.788 1.918 5.209.86 6.49.846 6.9.846 12s.014 5.509.072 6.788c.065 1.421.34 2.687 1.394 3.742 1.054 1.054 2.32 1.329 3.742 1.394C8.332 23.986 8.741 24 12 24s3.668-.014 4.947-.072c1.421-.065 2.687-.34 3.742-1.394 1.054-1.054 1.329-2.32 1.394-3.742.058-1.279.072-1.688.072-6.788s-.014-5.509-.072-6.788c-.065-1.421-.34-2.687-1.394-3.742-1.054-1.054-2.32-1.329-3.742-1.394C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.998 3.998 0 110-7.996 3.998 3.998 0 010 7.996zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <footer className="bg-[#fff] mt-6 md:mt-[50px] px-4 md:px-12 lg:px-[195px] font-sans tracking-wide">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 text-gray-500 mb-12">
          {/* Column 1 - Company Info */}
          <div className="w-full">
            <h4 className="text-lg font-semibold mb-4 text-gray-800">
              Company Info
            </h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  Carrier
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  We Are Hiring
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 - Legal */}
          <div className="w-full">
            <h4 className="text-lg font-semibold mb-4 text-gray-800">Legal</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  Carrier
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Features */}
          <div className="w-full">
            <h4 className="text-lg font-semibold mb-4 text-gray-800">
              Features
            </h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="hover:underline">
                  Business Marketing
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  User Analytic
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  Live Chat
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  Unlimited Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Resources */}
          <div className="w-full">
            <h4 className="text-lg font-semibold mb-4 text-gray-800">
              Resources
            </h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="hover:underline">
                  IOS & Android
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  Watch a Demo
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  Customers
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  API
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5 - Get In Touch */}
          <div className="w-full lg:col-span-2">
            <h4 className="text-lg font-semibold mb-4 text-gray-800">
              Get In Touch
            </h4>
            <div className="space-y-4">
              {/* Input and Button */}
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="flex-1 border border-gray-300 rounded-l-md p-2 text-sm"
                />
                <button className="bg-blue-600 text-white px-4 py-2 border-gray-300 rounded-r-md">
                  Subscribe
                </button>
              </div>

              {/* Paragraph */}
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Bottom */}
      <div className="bg-[#FAFAFA] w-full py-4 px-4 md:px-12 lg:px-[195px] flex flex-col md:flex-row justify-between items-center text-gray-500 abolute b-0">
        <p className="text-sm text-center md:text-left mb-2 md:mb-0">
          Made With Love By Finland All Right Reserved
        </p>
      </div>
    </>
  );
}