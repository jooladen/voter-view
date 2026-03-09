import type { Metadata } from "next";
import { Geist } from "next/font/google";
import SmoothScroll from "@/components/smooth-scroll";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const seoTitle = "VoterView - 모든 리더의 프로모션 랜딩 페이지";
const seoDescription =
  "정치인, CEO, 공인, 비영리 단체까지 — 리더의 비전을 가장 효과적으로 전달하는 프리미엄 프로모션 사이트. 맞춤 프로필, 비전 카드, 활동 갤러리, 실시간 문의까지 올인원.";

export const metadata: Metadata = {
  metadataBase: new URL("https://voter-view.vercel.app"),
  title: seoTitle,
  description: seoDescription,
  keywords: [
    "프로모션 사이트",
    "랜딩 페이지",
    "후보자 홍보",
    "개인 브랜딩",
    "리더 홍보",
    "선거 캠페인",
    "CEO 프로필",
    "비영리 홍보",
  ],
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    images: ["/og-image.png"],
    type: "website",
  },
  verification: {
    google: "q3vp3LyDmgQmf35ljxaZCN_z8FbHb1xGJSAcgEw4THM",
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
