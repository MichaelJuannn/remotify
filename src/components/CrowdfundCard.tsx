// components/CrowdfundingCard.js

import React from 'react';
const CrowdfundingCard = () => {
    return (
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-bold mb-2">Penelitian 1</h3>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper dalaracc lacus vel facilisis volutpat est velitom.
        </p>
        <p className="text-gray-700 mb-2">Target donasi: 1.000.000</p>
        <p className="text-gray-700 mb-2">Durasi donasi: 06/07/2024 - 07/07/2024</p>
        <a href="#"  className="text-blue-500 hover:text-blue-700" >Learn more &rarr;</a>
      </div>
    );
  };
  
  export default CrowdfundingCard;
  