"use client";

import LoginForm from "@/components/auth/login-form";

export default function Home() {
  return (
    <div
      suppressHydrationWarning
      className="flex h-screen w-full items-center justify-center px-4">
      <LoginForm />
    </div>
  );
}
