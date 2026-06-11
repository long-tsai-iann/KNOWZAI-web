const features = [
  {
    icon: "🗺️",
    title: "即時災情地圖",
    desc: "使用者可拍照回報災情，標記即時顯示在地圖上，讓大家掌握周邊狀況。",
  },
  {
    icon: "👨‍👩‍👧",
    title: "家人定位",
    desc: "建立家人群組、互相分享位置，災害發生時第一時間確認家人是否平安。",
  },
  {
    icon: "🤖",
    title: "AI 防災助理「阿巧」",
    desc: "以自然語言詢問天氣與防災建議，阿巧依即時資料給你最適合的提醒。",
  },
  {
    icon: "🚨",
    title: "緊急警報模擬",
    desc: "整合細胞廣播（CBS）警報情境，震動與全螢幕提醒，關鍵時刻不漏接。",
  },
  {
    icon: "⛅",
    title: "天氣與災害警示",
    desc: "串接中央氣象署資料，提供即時天氣、地震、豪雨與低溫特報。",
  },
  {
    icon: "📍",
    title: "避難設施查詢",
    desc: "依災害類型搜尋鄰近避難所、醫療與消防設施，規劃最近的避難路線。",
  },
];

const steps = [
  {
    no: "1",
    title: "下載並註冊",
    desc: "用 Email 快速建立帳號，啟動 App 就能看到所在地天氣與災害警示。",
  },
  {
    no: "2",
    title: "加入家人群組",
    desc: "以 Email 邀請家人、互相同意後即可在地圖上看到彼此位置。",
  },
  {
    no: "3",
    title: "回報與求助",
    desc: "遇到災情拍照回報，或詢問 AI 助理阿巧，第一時間做出正確判斷。",
  },
];

const highlights = [
  { value: "即時", label: "災情與天氣資訊" },
  { value: "免費", label: "下載與使用" },
  { value: "全台", label: "縣市天氣與警示" },
  { value: "AI", label: "防災問答助理" },
];

export default function Home() {
  return (
    <main>
      {/* 導覽列 */}
      <header className="sticky top-0 z-30 border-b border-gray-100 bg-white/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-baseline gap-2 text-xl font-bold text-brand-dark">
            <span>攏災影</span>
            <span className="text-sm font-normal text-gray-400">KNOWZAI</span>
          </div>
          <div className="hidden items-center gap-8 text-sm font-medium text-gray-600 md:flex">
            <a href="#motivation" className="transition hover:text-brand">動機</a>
            <a href="#vision" className="transition hover:text-brand">願景</a>
            <a href="#features" className="transition hover:text-brand">App 功能</a>
            <a href="#how" className="transition hover:text-brand">運作方式</a>
            <a href="#team" className="transition hover:text-brand">團隊</a>
            <a
              href="#contact"
              className="rounded-full bg-brand px-5 py-2 font-semibold text-white transition hover:bg-brand-dark"
            >
              聯絡我們
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 via-orange-50/40 to-white">
        {/* 裝飾光暈 */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 top-32 h-72 w-72 rounded-full bg-orange-300/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
          {/* 文案 */}
          <div className="text-center lg:text-left">
            <p className="mb-5 inline-block rounded-full bg-brand/10 px-4 py-1 text-sm font-medium text-brand-dark">
              🛡️ 防災避難 App
            </p>
            <h1 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
              在災害來臨前，<br />
              讓你與家人始終<span className="text-brand">在一起</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gray-600 lg:mx-0">
              攏災影整合即時災情地圖、家人定位、AI 防災助理與緊急警報，
              幫助每一個人在災害情境下，快速做出正確的判斷。
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a
                href="#features"
                className="rounded-full bg-brand px-8 py-3 font-semibold text-white shadow-lg shadow-brand/30 transition hover:-translate-y-0.5 hover:bg-brand-dark"
              >
                了解功能
              </a>
              <a
                href="#contact"
                className="rounded-full border border-brand px-8 py-3 font-semibold text-brand-dark transition hover:bg-brand/5"
              >
                聯絡我們
              </a>
            </div>
          </div>

          {/* 手機模擬畫面（純 CSS，無需圖片） */}
          <div className="flex justify-center">
            <div className="relative w-64 rounded-[2.5rem] border-8 border-gray-900 bg-white shadow-2xl">
              <div className="absolute left-1/2 top-0 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-gray-900" />
              <div className="space-y-3 p-4 pt-7">
                {/* 標題列 */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-brand-dark">攏災影</span>
                  <span className="text-xs text-gray-400">嘉義縣</span>
                </div>
                {/* 天氣卡 */}
                <div className="rounded-xl bg-orange-50 p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">☀️</span>
                    <div className="text-right">
                      <div className="text-xl font-bold text-gray-800">32~34°</div>
                      <div className="text-[10px] text-gray-500">晴時多雲</div>
                    </div>
                  </div>
                </div>
                {/* 地圖區 */}
                <div className="relative h-28 overflow-hidden rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100">
                  <div className="absolute left-6 top-8 text-lg">📍</div>
                  <div className="absolute right-8 top-12 text-lg">🚩</div>
                  <div className="absolute bottom-4 left-12 text-lg">🏠</div>
                </div>
                {/* 底部導覽 */}
                <div className="flex justify-around pt-1 text-base">
                  <span>🏠</span>
                  <span>🗺️</span>
                  <span>📷</span>
                  <span>👨‍👩‍👧</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 亮點帶 */}
        <div className="relative mx-auto max-w-6xl px-6 pb-16">
          <div className="grid grid-cols-2 gap-4 rounded-2xl border border-orange-100 bg-white/70 p-6 text-center shadow-sm sm:grid-cols-4">
            {highlights.map((h) => (
              <div key={h.label}>
                <div className="text-2xl font-extrabold text-brand-dark">{h.value}</div>
                <div className="mt-1 text-sm text-gray-500">{h.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 動機 */}
      <section id="motivation" className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-center text-sm font-semibold tracking-widest text-brand">WHY</p>
        <h2 className="mt-2 text-center text-3xl font-bold text-gray-900">我們的動機</h2>
        <div className="mx-auto mt-8 max-w-3xl space-y-4 text-center text-lg leading-relaxed text-gray-600">
          <p>
            台灣位處地震帶、每年面對颱風與豪雨，天災頻繁。然而當災害發生時，
            資訊往往分散、難以即時整合，民眾也不容易第一時間確認家人是否平安。
          </p>
          <p>
            我們希望把「災情回報、家人聯繫、防災資訊」整合進一支好用的 App，
            讓每個人都能在最短時間內掌握狀況、保護自己與所愛的人。
          </p>
        </div>
      </section>

      {/* 願景 */}
      <section id="vision" className="bg-orange-50 py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-semibold tracking-widest text-brand">VISION</p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">我們的願景</h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-600">
            打造一個人人都能輕鬆使用的防災平台——讓即時災情透明流通、
            讓家人之間隨時保持連結、讓 AI 成為每個人身邊的防災夥伴。
            我們相信，更好的防災資訊，能讓社會更有韌性。
          </p>
        </div>
      </section>

      {/* App 介紹 */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-center text-sm font-semibold tracking-widest text-brand">FEATURES</p>
        <h2 className="mt-2 text-center text-3xl font-bold text-gray-900">App 功能介紹</h2>
        <p className="mt-4 text-center text-gray-500">目前正在開發中，以下為核心功能</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-orange-100 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-50 text-3xl transition group-hover:scale-110">
                {f.icon}
              </div>
              <h3 className="mt-5 text-lg font-bold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 運作方式 */}
      <section id="how" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-center text-sm font-semibold tracking-widest text-brand">HOW IT WORKS</p>
          <h2 className="mt-2 text-center text-3xl font-bold text-gray-900">三步驟開始使用</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.no} className="relative rounded-2xl bg-white p-8 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-xl font-bold text-white">
                  {s.no}
                </div>
                <h3 className="mt-5 text-lg font-bold text-gray-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 團隊介紹 */}
      <section id="team" className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-center text-sm font-semibold tracking-widest text-brand">TEAM</p>
        <h2 className="mt-2 text-center text-3xl font-bold text-gray-900">關於團隊</h2>
        <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-relaxed text-gray-600">
          「攏災影 KNOWZAI」是由國立中正大學學生團隊打造的防災避難專案。
          我們致力於透過資訊科技填補災害發生時的「資訊斷層」，
          讓每個人在極端環境下都能臨危不亂、即時獲得協助。
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm">
            <div className="text-3xl">🎓</div>
            <h3 className="mt-3 font-bold text-gray-900">學校</h3>
            <p className="mt-1 text-sm text-gray-600">國立中正大學</p>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm">
            <div className="text-3xl">👨‍🏫</div>
            <h3 className="mt-3 font-bold text-gray-900">指導老師</h3>
            <p className="mt-1 text-sm text-gray-600">熊博安 教授</p>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm">
            <div className="text-3xl">🏅</div>
            <h3 className="mt-3 font-bold text-gray-900">競賽榮譽</h3>
            <p className="mt-1 text-sm text-gray-600">iGEM 2025 國際金牌（CCU-Taiwan）</p>
          </div>
        </div>

        <blockquote className="mx-auto mt-12 max-w-3xl rounded-2xl bg-orange-50 p-8 text-center">
          <p className="text-xl font-bold text-brand-dark">
            「讓每個人都能活著，直到生活回到正軌。」
          </p>
          <p className="mt-3 text-sm text-gray-500">— 攏災影 KNOWZAI 核心理念</p>
        </blockquote>

        <p className="mx-auto mt-8 max-w-3xl text-center leading-relaxed text-gray-600">
          團隊核心成員曾代表 CCU-Taiwan 參與國際合成生物學競賽 iGEM 並榮獲金牌，
          我們將嚴謹的研究方法與「以人為本」的實踐精神帶入防災領域，
          確保每一項技術都真正站在使用者角度、解決救命的問題。
        </p>
      </section>

      {/* CTA / 聯絡 */}
      <section id="contact" className="bg-brand-dark py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold">想了解更多或一起參與？</h2>
          <p className="mx-auto mt-4 max-w-2xl text-orange-100">
            攏災影正在開發中，歡迎與我們聯繫、給予建議或加入我們。
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:longtsaiiann@gmail.com"
              className="rounded-full bg-white px-8 py-3 font-semibold text-brand-dark transition hover:bg-orange-50"
            >
              ✉️ Email 聯絡
            </a>
            <a
              href="https://github.com/long-tsai-iann"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/60 px-8 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* 頁尾 */}
      <footer className="border-t border-gray-100 bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-gray-500 sm:flex-row">
          <div className="flex items-baseline gap-2 font-bold text-brand-dark">
            <span>攏災影</span>
            <span className="text-xs font-normal text-gray-400">KNOWZAI</span>
          </div>
          <div className="flex gap-6">
            <a href="#features" className="hover:text-brand">App 功能</a>
            <a href="mailto:longtsaiiann@gmail.com" className="hover:text-brand">聯絡</a>
            <a
              href="https://github.com/long-tsai-iann"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand"
            >
              GitHub
            </a>
          </div>
          <div className="text-gray-400">© {new Date().getFullYear()} 攏災影 KNOWZAI</div>
        </div>
      </footer>
    </main>
  );
}
