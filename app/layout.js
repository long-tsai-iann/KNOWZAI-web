import "./globals.css";

export const metadata = {
  title: "攏災影 LongZaiYing｜防災避難 App",
  description:
    "攏災影是一款防災避難 App，整合即時災情地圖、家人定位、AI 防災助理與緊急警報，讓你在災害來臨時與家人在一起。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body className="bg-white text-gray-800 antialiased">{children}</body>
    </html>
  );
}
