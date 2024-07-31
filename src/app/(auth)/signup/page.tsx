import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import RegisterForm from "./RegisterForm";

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
            <RegisterForm />
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
