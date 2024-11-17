// "use client";

// import React from 'react';

// interface FooterNavItem {
//     href: string;
//     name: string;
// }

// interface FooterNav {
//     label: string;
//     items: FooterNavItem[];
// }

// const Footer: React.FC = () => {
//     const footerNavs: FooterNav[] = [
//         {
//             label: "Rating",
//             items: [
//                 { href: "/reviews", name: "User Reviews" },
//                 { href: "/feedback", name: "Provide Feedback" },
//             ],
//         },
//         {
//             label: "About",
//             items: [
//                 { href: "/about", name: "About Us" },
//                 { href: "/careers", name: "Careers" },
//                 { href: "/privacy-policy", name: "Privacy Policy" },
//             ],
//         },
//         {
//             label: "Explore",
//             items: [
//                 { href: "/jobs", name: "Browse Jobs" },
//                 { href: "/how-it-works", name: "How It Works" },
//                 { href: "/resources", name: "Resources" },
//             ],
//         },
//         {
//             label: "Company",
//             items: [
//                 { href: "/contact", name: "Contact Us" },
//                 { href: "/terms", name: "Terms & Conditions" },
//                 { href: "/press", name: "Press" },
//             ],
//         }
//     ];

//     return (
//         <footer className="pt-20">
//             <div className="mt-10 border-t-2 border-[#020817]"></div>
//             <div className="max-w-screen-xl mx-auto px-4 md:px-8">
//                 <div className="flex-1 mt-16 space-y-6 justify-between sm:flex md:space-y-0">
//                     {
//                         footerNavs.map((item, idx) => (
//                             <ul
//                                 className="space-y-4 text-[#020817]"
//                                 key={idx}
//                             >
//                                 <h4 className="text-[#020817] font-semibold sm:pb-2">
//                                     {item.label}
//                                 </h4>
//                                 {
//                                     item.items.map((el, idx) => (
//                                         <li key={idx}>
//                                             <a
//                                                 href={el.href}
//                                                 className="hover:text-[#020817] duration-150"
//                                             >
//                                                 {el.name}
//                                             </a>
//                                         </li>
//                                     ))
//                                 }
//                             </ul>
//                         ))
//                     }
//                 </div>

//                 {/* Add horizontal line above footer */}

//                 <div className="mt-10 items-center justify-between sm:flex">
//                     <p className="text-[#020817]">© 2024 Remotify</p>
//                     <div className="flex items-center gap-x-6 text-[#020817] mt-6">
//                         {/* Add contact details, icons, and styling to ensure visibility */}
//                         <div className="flex items-center gap-4">
//                             <a href="mailto:info@example.com" className="hover:text-gray-500 duration-150">
//                                 <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M3 5.25V19.5l7.5-4.5 7.5 4.5V5.25L12 9.75 3 5.25z" />
//                                 </svg>
//                                 <span className="ml-2 text-sm">Email</span>
//                             </a>

//                             <a href="tel:+1234567890" className="hover:text-gray-500 duration-150">
//                                 <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M16.24 17.664l2.032-2.033a16.454 16.454 0 00-2.032-3.046l-2.487 1.744a5.928 5.928 0 01-3.244-1.639l-1.129-1.129a5.928 5.928 0 01-1.639-3.244L7.318 3.77A16.444 16.444 0 003.27 5.75c.148.541.624.877 1.173.877 1.108 0 2.365-.576 3.707-1.108 1.342-.531 2.712-.793 4.169-.793 1.725 0 3.386.311 5.207 1.176 2.026.865 3.834 2.109 5.541 3.795 2.701 2.554 5.494 5.293 7.047 7.954z" />
//                                 </svg>
//                                 <span className="ml-2 text-sm">Call</span>
//                             </a>

//                             <a href="https://maps.google.com?q=Your+Company+Address" className="hover:text-gray-500 duration-150">
//                                 <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 5.25L2.25 19.5" />
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 5.25L21.75 19.5" />
//                                 </svg>
//                                 <span className="ml-2 text-sm">Location</span>
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         </footer >
//     );
// }

// export default Footer;
