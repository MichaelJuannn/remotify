import React from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination";
  import { Button } from "@/components/ui/button";
  import { Header } from "@/components/ui/header";


const Publications = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md h-screen p-4">
        <div className="p-6">
          <h2 className="text-xl font-bold mb-5">Aplikasi Proyek dan Penelitian</h2>
          <ul className="space-y-4">
            <li>
              <a href="#" className="flex items-center space-x-2 text-blue-500">
                <span>📄</span>
                <span>Publikasi Ilmiah</span>
              </a>
            </li>
            <li><a href="#" className="flex items-center space-x-2 text-gray-600">📑<span>Dukungan Penelitian</span></a></li>
            <li><a href="#" className="flex items-center space-x-2 text-gray-600">🔗<span>Kolaborasi Industri</span></a></li>
            <li><a href="#" className="flex items-center space-x-2 text-gray-600">🎓<span>Konferensi Penelitian</span></a></li>
            <li><a href="#" className="flex items-center space-x-2 text-gray-600">🛠️<span>Workshop Penelitian</span></a></li>
            <li><a href="#" className="flex items-center space-x-2 text-gray-600">💰<span>Crowdfunding</span></a></li>
          </ul>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-4">
      <Header/>
        <div className="bg-white p-4 shadow-md">
          <h1 className="text-2xl font-bold mb-4">Daftar Publikasi Artikel</h1>
          <div className="flex justify-end mb-4">
            <Button className="bg-blue-500 text-white px-4 py-2 rounded">+ Tambah Publikasi</Button>
          </div>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="text-left py-2 px-4 font-semibold text-gray-700">Nama Judul Publikasi</th>
                <th className="text-left py-2 px-4 font-semibold text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 px-4">Implementasi Reactjs dengan algoritma ...</td>
                <td className="py-2 px-4 flex space-x-2">
                  <Button className="bg-red-500 text-white px-2 py-1 rounded mr-2">Hapus</Button>
                  <Button className="bg-blue-500 text-white px-2 py-1 rounded ml-2">Ubah</Button>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">Lorem ipsum</td>
                <td className="py-2 px-4 flex space-x-2">
                  <Button className="bg-red-500 text-white px-2 py-1 rounded mr-2">Hapus</Button>
                  <Button className="bg-blue-500 text-white px-2 py-1 rounded ml-2">Ubah</Button>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">Dolor sit</td>
                <td className="py-2 px-4 flex space-x-2">
                  <Button className="bg-red-500 text-white px-2 py-1 rounded mr-2">Hapus</Button>
                  <Button className="bg-blue-500 text-white px-2 py-1 rounded ml-2">Ubah</Button>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">Pengaruh game-based learning terhadap motivasi dan prestasi belajar</td>
                <td className="py-2 px-4 flex space-x-2">
                  <Button className="bg-red-500 text-white px-2 py-1 rounded mr-2">Hapus</Button>
                  <Button className="bg-blue-500 text-white px-2 py-1 rounded ml-2">Ubah</Button>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">Game theory: Concepts and applications</td>
                <td className="py-2 px-4 flex space-x-2">
                  <Button className="bg-red-500 text-white px-2 py-1 rounded mr-2">Hapus</Button>
                  <Button className="bg-blue-500 text-white px-2 py-1 rounded ml-2">Ubah</Button>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">Pengembangan Sistem Operasi untuk Universitas</td>
                <td className="py-2 px-4 flex space-x-2">
                  <Button className="bg-red-500 text-white px-2 py-1 rounded mr-2">Hapus</Button>
                  <Button className="bg-blue-500 text-white px-2 py-1 rounded ml-2">Ubah</Button>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">Test</td>
                <td className="py-2 px-4 flex space-x-2">
                  <Button className="bg-red-500 text-white px-2 py-1 rounded mr-2">Hapus</Button>
                  <Button className="bg-blue-500 text-white px-2 py-1 rounded ml-2">Ubah</Button>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">Pattern recognition: An algorithmic approach</td>
                <td className="py-2 px-4 flex space-x-2">
                  <Button className="bg-red-500 text-white px-2 py-1 rounded mr-2">Hapus</Button>
                  <Button className="bg-blue-500 text-white px-2 py-1 rounded ml-2">Ubah</Button>
                </td>
              </tr>
            </tbody>
          </table>
          {/* Pagination */}
          <Pagination>
            <PaginationContent>
                <PaginationItem>
                <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                <PaginationNext href="#" />
                </PaginationItem>
            </PaginationContent>
            </Pagination>
        </div>
      </div>
    </div>
  );
};

export default Publications;
