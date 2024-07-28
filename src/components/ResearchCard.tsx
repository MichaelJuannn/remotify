import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ResearchCardProps {
  date: string;
  title: string;
  authors: string;
}

const ResearchCard: React.FC<ResearchCardProps> = ({ date, title, authors }) => {
  return (
    <Card className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-4">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-800">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-2 text-gray-600">
          <span className="font-semibold">Tanggal: </span>
          <span>{date}</span>
        </div>
        <div className="text-gray-600">
          <span className="font-semibold">Penulis: </span>
          <span>{authors}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResearchCard;
