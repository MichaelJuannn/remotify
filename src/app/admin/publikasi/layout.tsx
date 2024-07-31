import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <div className="w-64 bg-white shadow-md h-screen p-4">
        <div className="p-6">
          <h2 className="text-xl font-bold mb-5">
            Aplikasi Proyek dan Penelitian
          </h2>
          <ul className="space-y-4">
            <li>
              <a href="#" className="flex items-center space-x-2 text-blue-500">
                <span>📄</span>
                <span>Publikasi Ilmiah</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-2 text-gray-600">
                📑<span>Dukungan Penelitian</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-2 text-gray-600">
                🔗<span>Kolaborasi Industri</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-2 text-gray-600">
                🎓<span>Konferensi Penelitian</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-2 text-gray-600">
                🛠️<span>Workshop Penelitian</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-2 text-gray-600">
                💰<span>Crowdfunding</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {children}
    </div>
  );
}
