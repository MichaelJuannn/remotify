import Navbar from "@/components/Navbar";
import HireForm from "./HireForm";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <Navbar />
      <div className="my-10 mx-4">
        <HireForm />
      </div>
    </div>
  );
}
