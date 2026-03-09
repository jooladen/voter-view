import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { candidate } from "@/data/candidate";
import SmoothScroll from "@/components/smooth-scroll";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const seoTitle = `${candidate.name} - ${candidate.slogan}`;
const seoDescription = `${candidate.name} 후보의 공약과 비전을 확인하세요. 청년 일자리, 공교육 혁신, 주거 안정 등 국민을 위한 약속.`;

export const metadata: Metadata = {
  title: seoTitle,
  description: seoDescription,
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    images: ["/og-image.png"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} font-sans antialiased`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
