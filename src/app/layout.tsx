import type { Metadata } from "next";
import "./globals.css";
import QueryProvider from "@/components/QueryProvider";
// import { Geist, Geist_Mono } from "next/font/google";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "中華電信 - 如意卡",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>
          <div className=" max-w-[400px] mx-auto overflow-x-hidden">
            {children}
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
