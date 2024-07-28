import React from 'react';
import ResearchCard from '@/components/ResearchCard';

const researches = [
  {
    id: '1',
    date: '10 Juli 2024',
    title: 'Penelitian tentang Inovasi Teknologi dalam Pendidikan',
    authors: 'Andi Setiawan, Budi Raharjo',
  },
  {
    id: '2',
    date: '15 Agustus 2024',
    title: 'Studi Kasus Pembelajaran Mesin di Era Digital',
    authors: 'Siti Aminah, Joko Widodo',
  },
  // Tambahkan lebih banyak penelitian jika diperlukan
];

const ResearchPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-36">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Daftar Penelitian</h1>
        <a
          href="/penelitian/daftar"
          className="mb-4 px-4 py-2 bg-green-800 text-white rounded-lg hover:bg-green-700"
        >
          Daftarkan Penelitian
        </a>
        <div className="flex flex-col space-y-4 mt-4">
          {researches.map((research) => (
            <ResearchCard
              key={research.id}
              date={research.date}
              title={research.title}
              authors={research.authors}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchPage;
