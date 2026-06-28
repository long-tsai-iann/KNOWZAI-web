import "./globals.css";
import { Noto_Sans_TC } from "next/font/google";

// 思源黑體（品牌指南指定中文字體）
const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
  variable: "--font-noto-sans-tc",
});

export const metadata = {
  title: "攏災影 KNOW ZAI｜防災避難 App",
  description:
    "攏災影 KNOW ZAI 是一款防災避難 App，整合即時災情地圖、家人定位、AI 防災助理與緊急警報，讓你在災害來臨時與家人在一起。",
  keywords: ["防災", "避難", "災情回報", "家人定位", "天氣", "地震", "攏災影", "KNOW ZAI"],
  openGraph: {
    title: "攏災影 KNOW ZAI｜防災避難 App",
    description:
      "整合即時災情地圖、家人定位、AI 防災助理與緊急警報，讓你在災害來臨時與家人在一起。",
    type: "website",
    locale: "zh_TW",
  },
};

export const viewport = {
  themeColor: "#FC961C",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant" className={notoSansTC.variable}>
      <body className="bg-white font-sans text-gray-800 antialiased">{children}</body>
    </html>
  );
}
