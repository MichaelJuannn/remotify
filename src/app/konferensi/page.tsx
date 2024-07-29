// pages/conferences.tsx
import React from 'react';
import ConferenceCard from '@/components/ConferenceCard';

const conferences = [
  {
    id: '1',
    title: 'Konferensi Inovasi Teknologi',
    date: '10 September 2024, 09:00 - 17:00',
    location: 'Pusat Konvensi, Balai Kota, NY',
  },
  {
    id: '2',
    title: 'Summit AI & Pembelajaran Mesin',
    date: '15 Oktober 2024, 10:00 - 16:00',
    location: 'Hotel Grand, Pusat Kota, SF',
  },
  // Tambahkan lebih banyak konferensi jika diperlukan
];

const ConferencePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-36">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Konferensi yang akan datang</h1>
        <div className="flex flex-col space-y-4">
          {conferences.map((conference) => (
            <ConferenceCard
              key={conference.id}
              title={conference.title}
              date={conference.date}
              location={conference.location}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConferencePage;
