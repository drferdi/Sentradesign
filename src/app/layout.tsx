import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sentra Artificial Intelligence | DB01",
  description: "Sentra Artificial Intelligence design-token prototype DB01."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
