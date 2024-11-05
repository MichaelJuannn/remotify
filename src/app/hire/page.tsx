import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import HireForm from "./HireForm";

export default function Page() {
  return (
    <div>
      <nav className="flex justify-between p-4 border-b-gray-300 border-b">
        <div className="text-xl font-bold">Remotify</div>
        <div className="text-xl font-bold">Hire Remotely</div>
        <div className="text-xl font-bold">News</div>
      </nav>
      <div className="my-10 mx-4">
        <HireForm />
      </div>
    </div>
  );
}
