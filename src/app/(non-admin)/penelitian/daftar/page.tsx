import React from 'react';
import JournalRegistrationForm from '@/components/JournalRegistrationForm';

const RegisterJournalPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-36">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Pendaftaran Jurnal</h1>
        <JournalRegistrationForm />
      </div>
    </div>
  );
};

export default RegisterJournalPage;
