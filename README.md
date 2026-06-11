# 攏災影 LongZaiYing 官方網站

攏災影（防災避難 App）的官方介紹網站，使用 **Next.js (App Router) + Tailwind CSS** 建置。
內容包含：團隊動機、願景，以及開發中 App 的功能介紹。

## 本機開發

```bash
npm install
npm run dev
```

開啟 http://localhost:3000 即可預覽。

## 建置

```bash
npm run build
npm run start
```

## 部署（建議 Vercel）

1. 將此專案推到 GitHub。
2. 到 [Vercel](https://vercel.com) 以 GitHub 登入 → New Project → 匯入此 repo。
3. Framework 會自動辨識為 Next.js，直接 Deploy 即可（之後每次 push 自動部署）。
4. 可在 Vercel 綁定自訂網域。

## 目錄結構

```
.
├── app/
│   ├── layout.js     # 全站版型與 metadata
│   ├── page.js       # 首頁（Hero / 動機 / 願景 / 功能 / 聯絡）
│   └── globals.css   # Tailwind 入口
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

## 之後可擴充

- 接攏災影後端 API（Render）顯示即時災情 / 天氣（後端已開啟 CORS）。
- 加入 App 截圖、團隊成員、下載連結。
