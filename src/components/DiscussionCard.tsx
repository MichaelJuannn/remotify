import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const DiscussionCard = ({ user, time, title, content, tags }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow mb-4">
      <div className="flex items-center mb-2">
        <Avatar className="w-10 h-10 mr-3">
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback>{user.name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-semibold text-gray-800">{user.name}</p>
          <p className="text-xs text-gray-500">{time}</p>
        </div>
      </div>
      <h2 className="text-lg font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-sm text-gray-600 mb-4">{content}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <Badge key={index} className="text-xs bg-green-100 text-green-800">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default DiscussionCard;
