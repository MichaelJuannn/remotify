"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createUser } from "./action"; 
import { useActionState } from "react"; 
import { toast } from "sonner";
import { useEffect } from "react";

const initialState = {
  message: "",
};

export default function RegisterForm() {
  // Replace useFormState with useActionState
  const [state, formAction] = useActionState(createUser, initialState);

  useEffect(() => {
    if (state.message) {
      toast.success(state.message, { position: "bottom-left" });
    }
  }, [state]);

  return (
    <form action={formAction}>
      <div className="mb-4">
        <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Nama
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2"
          required
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2"
          required
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </Label>
        <Input
          id="password"
          name="password"
          type="password"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2"
          required
        />
      </div>
      <Button
        type="submit"
        className="w-full py-2 rounded-lg bg-[#020817] text-white transition duration-300 hover:bg-[#040a15]"
      >
        Daftar
      </Button>
    </form>
  );
}
