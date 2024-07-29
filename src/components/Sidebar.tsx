// components/Sidebar.js
import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-100 h-screen p-4">
      <nav>
        <ul className="space-y-4">
          <li><Link href="/" legacyBehavior ><a className="text-blue-500">Pameran Penelitian</a></Link></li>
          <li><Link href="/publikasi" legacyBehavior ><a className="text-blue-500">Publikasi Ilmiah</a></Link></li>
          <li><Link href="/dukungan" legacyBehavior ><a className="text-blue-500">Dukungan Penelitian</a></Link></li>
          <li><Link href="/kolaborasi-industri" legacyBehavior ><a className="text-blue-500">Kolaborasi Industri</a></Link></li>
          <li><Link href="/konferensi" legacyBehavior ><a className="text-blue-500">Konferensi Penelitian</a></Link></li>
          <li><Link href="/workshop" legacyBehavior ><a className="text-blue-500">Workshop Penelitian</a></Link></li>
          <li><Link href="/crowdfunding"legacyBehavior ><a className="text-blue-500">Crowdfunding</a></Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
