"use client";
import React from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Download } from "lucide-react";

const researchData = {
  id: "1",
  title: "Penelitian tentang Inovasi Teknologi dalam Pendidikan",
  authors: "Andi Setiawan, Budi Raharjo",
  abstract:
    "Abstrak dari penelitian tentang inovasi teknologi dalam pendidikan...",
  publicationDate: "2024-07-10",
  journal: "Jurnal Teknologi Pendidikan",
  doi: "10.1234/jurnal.5678",
  pdfLink: "/path/to/fullpdf.pdf",
};

const ResearchDetailPage = () => {
  const params = useParams();
  const id = params?.id;

  // Contoh data statis, bisa diganti dengan fetch data berdasarkan ID
  const research = researchData.id === id ? researchData : null;

  if (!research) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h1 className="text-2xl font-bold text-red-600">
            Penelitian tidak ditemukan
          </h1>
          <p className="text-gray-600 mt-2">Silakan kembali dan coba lagi.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-36 bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          {research.title}
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Penulis: {research.authors}
        </p>
        <div className="bg-gray-100 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Abstrak</h2>
          <p className="text-lg text-gray-600">{research.abstract}</p>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">Tahun Terbit</h2>
          <p className="text-lg text-gray-600">{research.publicationDate}</p>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">
            Jurnal Publikasi
          </h2>
          <p className="text-lg text-gray-600">{research.journal}</p>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">DOI</h2>
          <p className="text-lg text-gray-600">{research.doi}</p>
        </div>
        <div className="flex justify-center mt-8">
          <Button
            asChild
            className="bg-red-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-500 transition duration-300 flex items-center"
          >
            <Link href={research.pdfLink}>
              <Download /> Unduh Pdf File
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResearchDetailPage;
