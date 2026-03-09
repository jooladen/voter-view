import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "홍길동 - 함께 만드는 더 나은 내일",
  description:
    "홍길동 후보의 공약과 비전을 확인하세요. 청년 일자리, 공교육 혁신, 주거 안정 등 국민을 위한 약속.",
  openGraph: {
    title: "홍길동 - 함께 만드는 더 나은 내일",
    description:
      "홍길동 후보의 공약과 비전을 확인하세요. 청년 일자리, 공교육 혁신, 주거 안정 등 국민을 위한 약속.",
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
        {children}
      </body>
    </html>
  );
}
