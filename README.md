# 攏災影 KNOW ZAI 官方網站

攏災影 KNOW ZAI（防災避難 App）的官方介紹網站，使用 **Next.js (App Router) + Tailwind CSS** 建置。
內容包含：團隊動機、願景、App 功能介紹、運作方式與團隊介紹。

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

## 部署（Vercel）

本網站已部署於 Vercel（連動 `long-tsai-iann/KNOWZAI-web`），每次 push 到 `main` 會自動重新部署。

新環境若要重新部署：
1. 到 [Vercel](https://vercel.com) 以 GitHub 登入 → New Project → 匯入此 repo。
2. Framework 會自動辨識為 Next.js，直接 Deploy。
3. 可在 Vercel → Settings → Domains 綁定自訂網域。

## 目錄結構

```
.
├── app/
│   ├── layout.js     # 全站版型與 metadata (SEO / OG)
│   ├── page.js       # 首頁（Hero / 動機 / 願景 / 功能 / 運作方式 / 團隊 / 聯絡）
│   └── globals.css   # Tailwind 入口
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

## 之後可擴充

- 接攏災影後端 API（Render）顯示即時災情 / 天氣（後端已開啟 CORS）。
- 加入真實 App 截圖、成員照片、下載連結。
