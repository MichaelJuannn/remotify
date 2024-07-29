"use client";
import { useFormStatus } from "react-dom";
import { Button } from "./button";
import { Loader2 } from "lucide-react";

export function SubmitButton({ children, ...props }: any) {
  const { pending } = useFormStatus();

  if (pending) {
    return (
      <Button disabled {...props}>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>
    );
  }

  return <Button {...props}>{children}</Button>;
}