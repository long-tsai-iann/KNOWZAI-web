const features = [
  {
    icon: "🗺️",
    title: "即時災情地圖",
    desc: "使用者可拍照回報災情，標記顯示在地圖上，讓大家即時掌握周邊狀況。",
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
    desc: "依災害類型搜尋鄰近的避難所、醫療與消防設施，規劃最近的避難路線。",
  },
];

export default function Home() {
  return (
    <main>
      {/* 導覽列 */}
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-100">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 text-xl font-bold text-brand-dark">
            <span>攏災影</span>
            <span className="text-sm font-normal text-gray-400">LongZaiYing</span>
          </div>
          <div className="hidden gap-8 text-sm font-medium text-gray-600 md:flex">
            <a href="#motivation" className="hover:text-brand">動機</a>
            <a href="#vision" className="hover:text-brand">願景</a>
            <a href="#features" className="hover:text-brand">App 功能</a>
            <a href="#contact" className="hover:text-brand">聯絡我們</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <p className="mb-4 inline-block rounded-full bg-brand/10 px-4 py-1 text-sm font-medium text-brand-dark">
            防災避難 App
          </p>
          <h1 className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
            在災害來臨前，<br className="hidden md:block" />
            讓你與家人始終<span className="text-brand">在一起</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            攏災影整合即時災情地圖、家人定位、AI 防災助理與緊急警報，
            幫助每一個人在災害情境下，快速做出正確的判斷。
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#features"
              className="rounded-full bg-brand px-8 py-3 font-semibold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark"
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
      </section>

      {/* 動機 */}
      <section id="motivation" className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold text-gray-900">我們的動機</h2>
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
          <h2 className="text-3xl font-bold text-gray-900">我們的願景</h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-600">
            打造一個人人都能輕鬆使用的防災平台——讓即時災情透明流通、
            讓家人之間隨時保持連結、讓 AI 成為每個人身邊的防災夥伴。
            我們相信，更好的防災資訊，能讓社會更有韌性。
          </p>
        </div>
      </section>

      {/* App 介紹 */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold text-gray-900">App 功能介紹</h2>
        <p className="mt-4 text-center text-gray-500">目前正在開發中，以下為核心功能</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-gray-100 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="text-4xl">{f.icon}</div>
              <h3 className="mt-4 text-lg font-bold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
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
              href="mailto:iddw1498@gmail.com"
              className="rounded-full bg-white px-8 py-3 font-semibold text-brand-dark transition hover:bg-orange-50"
            >
              Email 聯絡
            </a>
            <a
              href="https://github.com/FantasticJZI/long_tsai_iann"
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
      <footer className="border-t border-gray-100 py-8">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} 攏災影 LongZaiYing. 防災避難 App.
        </div>
      </footer>
    </main>
  );
}
