import React from 'react';
import JournalCard from '@/components/JournalCard';

const publications = [
  {
    id: '1',
    title: 'Inovasi Teknologi dalam Pendidikan',
    doi: '10.1234/abcd.2024.001',
    authors: 'Andi Setiawan, Budi Raharjo',
    journalName: 'Jurnal Teknologi Pendidikan',
    publicationYear: '2024',
    link: 'https://example.com/journal/1',
  },
  {
    id: '2',
    title: 'Pembelajaran Mesin di Era Digital',
    doi: '10.1234/abcd.2024.002',
    authors: 'Siti Aminah, Joko Widodo',
    journalName: 'Jurnal Pembelajaran Mesin',
    publicationYear: '2024',
    link: 'https://example.com/journal/2',
  },
  // Tambahkan lebih banyak publikasi jika diperlukan
];

const PublicationsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-36">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Daftar Jurnal Publikasi</h1>
        <div className="flex flex-col space-y-4">
          {publications.map((publication) => (
            <JournalCard
              key={publication.id}
              title={publication.title}
              doi={publication.doi}
              authors={publication.authors}
              journalName={publication.journalName}
              publicationYear={publication.publicationYear}
              link={publication.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PublicationsPage;
