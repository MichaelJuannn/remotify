import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">
          <Link legacyBehavior href="/">
            <a>Aplikasi Proyek dan Penelitian</a>
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link legacyBehavior href="/crowdfunding">
                <a className="text-gray-700">Crowdfunding</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/kolaborasi">
                <a className="text-gray-700">Kolaborasi</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/forum">
                <a className="text-gray-700">Forum</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/daftar-penelitian">
                <a className="text-gray-700">Daftar Penelitian</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/daftar-publikasi">
                <a className="text-gray-700">Daftar Publikasi</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/dukungan">
                <a className="text-gray-700">Dukungan</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/industri">
                <a className="text-gray-700">Industri</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/workshop">
                <a className="text-gray-700">Workshop</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/konferensi">
                <a className="text-gray-700">Konferensi</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/jurnal-penelitian">
                <a className="text-gray-700">Jurnal Penelitian</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/admin">
                <a className="text-gray-700">Admin</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export { Header };
