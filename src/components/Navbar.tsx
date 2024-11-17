import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 border-b-gray-300 border-b">
      <Link href={"/"} className="text-xl font-bold">
        Remotify
      </Link>
      <div className="text-xl font-bold">Hire Remotely</div>
      <Link href={"/news"} className="text-xl font-bold">
        News
      </Link>
    </nav>
  );
}
