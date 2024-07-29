import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface JournalCardProps {
  title: string;
  doi: string;
  authors: string;
  journalName: string;
  publicationYear: string;
  link: string;
}

const JournalCard: React.FC<JournalCardProps> = ({ title, doi, authors, journalName, publicationYear, link }) => {
  return (
    <Card className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-4">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-800">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-2 text-gray-600">
          <span className="font-semibold">DOI: </span>
          <span>{doi}</span>
        </div>
        <div className="mb-2 text-gray-600">
          <span className="font-semibold">Penulis: </span>
          <span>{authors}</span>
        </div>
        <div className="mb-2 text-gray-600">
          <span className="font-semibold">Jurnal: </span>
          <span>{journalName}</span>
        </div>
        <div className="mb-2 text-gray-600">
          <span className="font-semibold">Tahun Publikasi: </span>
          <span>{publicationYear}</span>
        </div>
        <div className="text-gray-600">
          <a href={link} className="text-blue-600 hover:underline">
            Baca Publikasi
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default JournalCard;
