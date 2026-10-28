import Link from "next/link";

// 這一頁的內容是從 App 裡那份隱私政策搬過來的
// （long_tsai_iann 的 lib/l10n/app_localizations.dart，privacySec1~7）。
//
// ⚠️ 兩邊必須一致。Google Play 的資料安全表單會對照這一頁，而使用者在 App
// 內看到的是 l10n 那一份；哪天只改一邊，就等於對外講了兩套說法。
// 改動時請同時更新 App 的 l10n，並在下方的「最後更新」標註日期。
const SECTIONS = [
  {
    title: "1. 我們是誰",
    body: "攏災影（KnowZai）是一款防災避難 App，由攏災影開發團隊營運。本政策說明我們如何蒐集、使用與保護你的個人資料。有任何疑問，請透過 App 內「關於」頁面的官方社群聯繫我們。",
  },
  {
    title: "2. 我們蒐集哪些資料",
    body: [
      "帳號資料：Email、暱稱、頭像（你提供的）；使用 Google 或 Apple 登入時，該服務提供的基本資料。",
      "位置：在你允許時取得裝置定位，用於顯示所在地天氣與警示、搜尋附近避難所與醫療場所、標記災情回報、家人群組定位分享。",
      "你上傳的內容：災情回報照片與文字、物資站資訊、留言。",
      "平安狀態：你在重大警報時回報的狀態（平安／需要協助／已撤離／垂直避難）與備註。這筆資料只會給已互相同意的家人，以及你所在地區的管轄者（如鄰長、村長）看到；給家人看的只有狀態，不含位置。若你沒有回報，管轄者可代為填寫，系統會一併記錄是由誰代填。",
      "所屬地區：你設定的村里／鄰（選填，不設定不影響其他功能）。",
      "治水觀測紀錄：你在水溝、堤防、抽水站等觀察點記錄的狀況、備註與照片。這類紀錄會給同場域的使用者看到（用來累積地方的長期基準），顯示時只帶暱稱、不帶 Email。",
      "阿巧 AI 助理的對話內容（詳見第 4 節）。",
      "裝置推播識別碼（用於發送災害警示通知）。",
      "技術紀錄：登入事件、API 請求的 IP 與時間（用於安全與稽核）。",
    ],
  },
  {
    title: "3. 我們如何使用",
    body: "提供防災資訊與功能、發送災害警示推播、維護帳號安全、處理檢舉與違規、改善服務品質。我們不會將你的資料出售給第三方，也不會用於與防災無關的廣告。",
  },
  {
    title: "4. 阿巧 AI 助理的資料處理",
    body: [
      "你在阿巧輸入的文字會傳送到我們的 AI 服務供應商 Groq, Inc.（伺服器位於美國）以產生回覆。Groq 依其條款不會用這些資料訓練模型。",
      "你的位置座標只在我們的伺服器上用來查詢附近的警示、民眾回報與避難所；送給 AI 的內容只有鄉鎮層級的地名與「距離約 N 公里」，不含座標、姓名或 Email。",
      "對話紀錄（你的輸入與 AI 的回覆）會保存 30 天，供安全事件調查與人工品質覆核使用，到期自動刪除。只有管理員可以查閱，查閱行為會被記錄。",
      "首次使用阿巧前會請你確認同意；你可以選擇不使用，其他功能不受影響。",
      "AI 的回答由模型生成，可能有錯誤或遺漏，僅供參考，不取代政府災防機關的公告與 119。",
    ],
  },
  {
    title: "5. 資料保存與安全",
    body: "帳號資料在你刪除帳號前持續保存。AI 對話紀錄保存 30 天。災情回報（含照片與位置）保存 1 年後自動刪除；照片上傳前會先移除 GPS 等拍攝資訊。家人定位只保留最後一次位置，30 天未更新即自動清除。登入與操作紀錄依《稽核與日誌規範》保存。資料以加密連線傳輸，密碼以不可逆的雜湊儲存，存取權限僅限必要人員。",
  },
  {
    title: "6. 你的權利",
    body: "你可以在 App 內查看與修改個人資料、修改密碼、刪除帳號（「個人」→「帳號與安全」）。刪除帳號後，個人資料會立即清除；你發布過的災情回報會保留但匿名化，因為那些資訊對其他人在災害中仍有價值。若要查詢、取得副本、更正或刪除特定資料，請透過官方社群聯繫我們：查詢與副本 15 天內回覆，更正與刪除 30 天內處理（個人資料保護法第 13 條）。",
  },
  {
    title: "7. 第三方服務",
    body: "本 App 使用以下第三方服務，各自有其隱私政策：Google Maps（地圖與地點搜尋）、Firebase Cloud Messaging（推播）、Groq（AI 助理）、Brevo（寄送驗證碼與通知信，伺服器位於歐盟）、Cloudinary（災情回報照片儲存，美國）、MapTiler 與 OpenStreetMap（離線地圖圖磚）、Google 與 Apple（第三方登入）。你的位置座標反查縣市由我們自己的伺服器完成，不會送給第三方。天氣與災害資料來自中央氣象署、消防署與環境部的開放資料。",
  },
];

export const metadata = {
  title: "隱私政策｜攏災影 KNOW ZAI",
  description:
    "攏災影 KNOW ZAI 如何蒐集、使用與保護你的個人資料，包含位置、災情回報、平安狀態與 AI 助理的資料處理方式。",
};

export default function PrivacyPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
        <Link
          href="/"
          className="text-sm text-gray-500 transition hover:text-brand"
        >
          ← 回首頁
        </Link>

        <h1 className="mt-6 text-3xl font-black text-gray-900 sm:text-4xl">
          隱私政策
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          最後更新：2026 年 9 月 14 日（草稿 0.1）
        </p>

        <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-900">
          本文件為草稿，尚未經法務審閱。正式版本定稿前，內容可能調整。
        </div>

        <div className="mt-10 space-y-9">
          {SECTIONS.map((s) => (
            <section key={s.title}>
              <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                {s.title}
              </h2>
              {Array.isArray(s.body) ? (
                <ul className="mt-3 space-y-2">
                  {s.body.map((line, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-[15px] leading-relaxed text-gray-700"
                    >
                      <span aria-hidden className="select-none text-brand">
                        ・
                      </span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 text-[15px] leading-relaxed text-gray-700">
                  {s.body}
                </p>
              )}
            </section>
          ))}
        </div>

        <p className="mt-12 border-t border-gray-100 pt-6 text-sm text-gray-500">
          App 內亦可查閱同一份政策：「個人／群組」→「關於攏災影」。
        </p>
      </div>
    </main>
  );
}
