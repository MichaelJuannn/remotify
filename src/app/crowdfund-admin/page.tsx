// pages/crowdfunding.js

import Sidebar from '@/components/Sidebar';
import CrowdfundingCard from '@/components/CrowdfundCard';

const Crowdfunding = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <main className="container mx-auto p-4">
          <h2 className="text-2xl font-bold mb-6">Daftar Penelitian Yang Mengajukan Crowdfunding</h2>
          <div className="grid grid-cols-3 gap-6">
            <CrowdfundingCard />
            <CrowdfundingCard />
            <CrowdfundingCard />
            <CrowdfundingCard />
            <CrowdfundingCard />
            <CrowdfundingCard />
          </div>
          <div className="flex justify-between items-center mt-6">
            <button className="bg-gray-300 p-2 rounded">Prev</button>
            <div className="space-x-2">
              <button className="bg-blue-500 text-white p-2 rounded">1</button>
              <button className="bg-gray-300 p-2 rounded">2</button>
              <button className="bg-gray-300 p-2 rounded">3</button>
              <span>...</span>
              <button className="bg-gray-300 p-2 rounded">10</button>
            </div>
            <button className="bg-gray-300 p-2 rounded">Next</button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Crowdfunding;
