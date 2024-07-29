"use client"; // Menambahkan directive untuk menunjukkan bahwa ini adalah komponen client-side

import { useState } from 'react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold text-green-800">Cendekiawan Aswaja</span>
        </a>
        <button
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-0"
          aria-label="Open main menu"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className={`w-full xl:flex xl:items-center xl:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col xl:flex-row font-medium p-4 xl:p-0 mt-4 xl:mt-0 border-t xl:border-0 border-gray-100 bg-gray-50 xl:bg-white xl:space-x-8">
            <li>
              <a href="#" className="block py-2 px-1 text-sm text-green-800 hover:bg-gray-100 xl:hover:text-green-600">Crowdfunding</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-1 text-sm text-green-800 hover:bg-gray-100 xl:hover:text-green-600">Kolaborasi</a>
            </li>
            <li>
              <a href="/diskusi" className="block py-2 px-1 text-sm text-green-800 hover:bg-gray-100 xl:hover:text-green-600">Forum</a>
            </li>
            <li>
              <a href="penelitian" className="block py-2 px-1 text-sm text-green-800 hover:bg-gray-100 xl:hover:text-green-600">Daftar Penelitian</a>
            </li>
            <li>
              <a href="publikasi" className="block py-2 px-1 text-sm text-green-800 hover:bg-gray-100 xl:hover:text-green-600">Daftar Publikasi</a>
            </li>
            <li>
              <a href="konferensi" className="block py-2 px-1 text-sm text-green-800 hover:bg-gray-100 xl:hover:text-green-600">Konferensi</a>
            </li>
            <li className="relative">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex items-center cursor-pointer justify-between py-2 px-1 text-sm text-green-800 hover:bg-gray-100 xl:hover:text-green-600">
                    Nama Akun
                    <svg
                      className="w-2.5 h-2.5 ml-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 mt-1">
                  <DropdownMenuItem asChild>
                    <a href="#" className="block px-4 py-2 text-sm text-green-800 hover:bg-gray-100 focus:outline-none focus:bg-transparent">Profil</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="#" className="block px-4 py-2 text-sm text-green-800 hover:bg-gray-100 focus:outline-none focus:bg-transparent">Pengaturan</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="#" className="block px-4 py-2 text-sm text-green-800 hover:bg-gray-100 focus:outline-none focus:bg-transparent">Bantuan</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="#" className="block px-4 py-2 text-sm text-green-800 hover:bg-gray-100 focus:outline-none focus:bg-transparent">Logout</a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
