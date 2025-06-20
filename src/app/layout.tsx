import type { Metadata } from "next";
import "./globals.css";
import QueryProvider from "@/components/QueryProvider";
import EmotionRegistry from "@/components/EmotionRegistry";


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
          <EmotionRegistry>
            <div className=" max-w-[400px] mx-auto overflow-x-hidden">
              {children}
            </div>
          </EmotionRegistry>
        </QueryProvider>
      </body>
    </html>
  );
}
