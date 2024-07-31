import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { createUser } from "./action";

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100">
      <div className="flex-1 flex flex-col items-center justify-center p-8 bg-gray-100 lg:w-1/2">
        <h1 className={`text-4xl font-bold text-gray-800 mb-4 `}>
          Cendekiawan Aswaja
        </h1>
        <p className={`text-lg text-gray-700 mb-8 lg:text-center `}>
          Menginspirasi Melalui Pengetahuan, Membangun Bersama Ajaran Aswaja
        </p>
      </div>
      <div className="flex-1 flex items-center justify-center p-5">
        <Card className="bg-white p-5 rounded-lg shadow-lg w-full max-w-md">
          <CardHeader>
            <CardTitle className={`text-3xl font-bold text-gray-800 mb-6 `}>
              Daftar
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form action={createUser}>
              <div className="mb-4">
                <Label
                  htmlFor="name"
                  className={`block text-sm font-medium text-gray-700 mb-1 `}
                >
                  Nama
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800 text-gray-800 `}
                  required
                />
              </div>
              <div className="mb-4">
                <Label
                  htmlFor="email"
                  className={`block text-sm font-medium text-gray-700 mb-1 `}
                >
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800 text-gray-800 `}
                  required
                />
              </div>
              <div className="mb-4">
                <Label
                  htmlFor="password"
                  className={`block text-sm font-medium text-gray-700 mb-1 `}
                >
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800 text-gray-800 `}
                  required
                />
              </div>
              <Button
                type="submit"
                className={`w-full bg-green-800 text-white py-2 rounded-lg hover:bg-green-900 transition duration-300 `}
              >
                Daftar
              </Button>
            </form>
            <p className={`text-gray-600 text-center mt-4 `}>
              Sudah punya akun?{" "}
              <Link
                href="/signin"
                className={`text-green-800 hover:underline `}
              >
                Masuk
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPage;
