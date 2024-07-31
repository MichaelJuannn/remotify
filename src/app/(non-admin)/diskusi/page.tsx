'use client';
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination';
import DiscussionCard from '@/components/DiscussionCard';

const discussions = [
  {
    id: '1',
    user: {
      name: 'Contoh Nama User',
      avatar: '/path/to/avatar.png',
    },
    time: '10 Jam yang lalu',
    title: 'Judul diskusi contoh saja',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    tags: ['#Tag1', '#Tag2', '#Tag3'],
  },
  // Tambahkan lebih banyak data diskusi jika diperlukan
];

const popularKeywords = ['#keyword1', '#keyword2', '#keyword3', '#keyword4'];

const DiscussionsPage = () => {
  const [filter, setFilter] = useState('terbaru');

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-24">
        <div className="flex justify-between mb-4">
          <Button className="bg-green-800 text-white">Buat Diskusi Baru</Button>
          <Input placeholder="Search" className="w-1/3 border-gray-300" />
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-3">
            <div className="mb-6">
              <h2 className="text-lg font-bold text-gray-800 mb-2">Urut berdasarkan</h2>
              <div className="flex flex-col">
                <label className="flex items-center mb-2">
                  <input
                    type="radio"
                    name="filter"
                    value="terbaru"
                    checked={filter === 'terbaru'}
                    onChange={() => setFilter('terbaru')}
                    className="mr-2"
                  />
                  Diskusi terbaru
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="filter"
                    value="terlama"
                    checked={filter === 'terlama'}
                    onChange={() => setFilter('terlama')}
                    className="mr-2"
                  />
                  Diskusi terlama
                </label>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-2">Kata kunci populer</h2>
              <div className="flex flex-wrap gap-2">
                {popularKeywords.map((keyword, index) => (
                  <Badge key={index} className="text-xs bg-green-100 text-green-800">
                    {keyword}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-9">
            {discussions.map((discussion) => (
              <DiscussionCard
                key={discussion.id}
                user={discussion.user}
                time={discussion.time}
                title={discussion.title}
                content={discussion.content}
                tags={discussion.tags}
              />
            ))}
            <div className="flex justify-center mt-6">
              <Pagination>
                <PaginationPrevious>Prev</PaginationPrevious>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationLink isActive>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink>2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink>3</PaginationLink>
                  </PaginationItem>
                  <PaginationEllipsis />
                  <PaginationItem>
                    <PaginationLink>10</PaginationLink>
                  </PaginationItem>
                </PaginationContent>
                <PaginationNext>Next</PaginationNext>
              </Pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscussionsPage;
