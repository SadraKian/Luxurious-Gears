import "./globals.css";
import type { Metadata } from "next";
import { Nav, Footer } from "@/components";

export const metadata: Metadata = {
  title: "Luxurious Gears",
  description: "Create a luxurious ride scene with our high-end cars",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative bg-[#1E1E1E]">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
