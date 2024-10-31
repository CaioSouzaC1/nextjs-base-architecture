"use client";
import "./globals.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";
import { ThemeProvider } from "next-themes";
import { ThemeChanger } from "@/components/theme-changer";
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider attribute="class">
            {children}
            <ThemeChanger />
          </ThemeProvider>
          <Toaster />
        </QueryClientProvider>
      </body>
    </html>
  );
}
