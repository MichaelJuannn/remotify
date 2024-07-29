// pages/index.tsx
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Crowdfunding Penelitian",
    description:
      "Fitur untuk menggalang dana untuk proyek penelitian yang berkaitan dengan ajaran Aswaja.",
    icon: "💰",
  },
  {
    title: "Penelitian Kolaboratif",
    description:
      "Fitur untuk memfasilitasi kolaborasi antara peneliti dalam proyek penelitian.",
    icon: "🤝",
  },
  {
    title: "Forum Penelitian",
    description:
      "Forum diskusi khusus untuk para peneliti dalam bidang ajaran Aswaja.",
    icon: "💬",
  },
  {
    title: "Pameran Penelitian",
    description:
      "Pameran hasil penelitian untuk berbagi dengan masyarakat luas.",
    icon: "🎨",
  },
  {
    title: "Publikasi Ilmiah",
    description: "Publikasi hasil penelitian dalam bentuk artikel ilmiah.",
    icon: "📚",
  },
  {
    title: "Konferensi Penelitian",
    description:
      "Konferensi secara daring atau tatap muka untuk berbagi hasil penelitian.",
    icon: "🎤",
  },
];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-green-800 text-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-5xl font-bold mb-4">
              Platform Penelitian Ajaran Aswaja
            </h1>
            <p className="text-xl mb-8">
              Temukan dan dukung penelitian berkualitas tentang ajaran Aswaja.
            </p>
            <Button className="bg-white text-green-800 py-2 px-4 rounded font-semibold">
              Gabung Sekarang
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <main className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          Fitur Utama
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="flex items-center p-8">
                <div className="flex-shrink-0">
                  <span className="text-6xl">{feature.icon}</span>
                </div>
                <div className="ml-6">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-800">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-600 ">
                    {feature.description}
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>
            &copy; 2024 Platform Penelitian Ajaran Aswaja. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
