import type { Metadata } from "next";
import { M_PLUS_Rounded_1c } from "next/font/google";
import "@/app/globals.css";

const M_Plus = M_PLUS_Rounded_1c({
  weight: ["300", "400", "500", "700", "800"],
  subsets: ["latin", "cyrillic"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Javlon Bakodirov's Diary",
  description: "Javlon Bakodirov's Diary",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={M_Plus.className}>{children}</body>
    </html>
  );
}
