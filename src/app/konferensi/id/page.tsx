// src/app/konferensi/[id]/page.tsx
import React from 'react';

const ConferenceDetail = () => {
  // Data contoh untuk contoh ini
  const conference = {
    title: 'Konferensi Inovasi Teknologi',
    description: 'Pandangan mendalam tentang tren terbaru dalam teknologi dan inovasi. Konferensi ini akan menampilkan pidato utama, diskusi panel, dan lokakarya yang dipimpin oleh pakar industri. Peserta akan memiliki kesempatan untuk berjejaring dengan profesional dari berbagai sektor dan menjelajahi kemajuan teknologi terbaru.',
    institution: 'Institut Inovator Teknologi',
    contact: 'info@inovatorsteknologi.com',
    date: '10 September 2024, 09:00 - 17:00',
    location: 'Pusat Konvensi, Balai Kota, NY'
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto flex flex-col lg:flex-row">
        <div className="w-full lg:w-2/3 lg:mr-12 bg-white p-6 rounded-lg shadow-md mb-6 lg:mb-0">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{conference.title}</h1>
          <p className="text-gray-700 mb-4">{conference.description}</p>
          <div className="text-gray-600">
            <h2 className="font-semibold mb-1">Institusi:</h2>
            <p className="mb-2">{conference.institution}</p>
            <h2 className="font-semibold mb-1">Kontak:</h2>
            <p>{conference.contact}</p>
          </div>
        </div>
        <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
          <div className="text-gray-600 mb-4">
            <h2 className="font-semibold mb-1">Tanggal:</h2>
            <p className="mb-2">{conference.date}</p>
            <h2 className="font-semibold mb-1">Lokasi:</h2>
            <p>{conference.location}</p>
          </div>
          <button className="bg-green-800 text-white py-2 px-4 rounded">Daftar</button>
        </div>
      </div>
    </div>
  );
};

export default ConferenceDetail;
