import type { Metadata } from "next";
import { Nunito } from "@next/font/google";
import "./globals.css";
import { Providers } from "@/components/layout/Provider";
import Header from "@/components/layout/Header";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  title: "Rest Countries | Asep Saepudin",
  description: "Rest Countries",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} antialiased bg-colors-very-light-gray dark:bg-colors-very-dark-blue-bg`}>
        <Providers>
          <Header />
          <main className="p-8">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
