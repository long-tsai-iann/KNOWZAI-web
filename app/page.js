const problems = [
  {
    value: "73%",
    label: "台灣人口暴露於三種以上天然災害風險",
    source: "世界銀行《Natural Disaster Hotspots》報告",
  },
  {
    value: "3~4 個",
    label: "平均每年侵襲台灣的颱風數量",
    source: "中央氣象署統計",
  },
  {
    value: "約 1,000 次",
    label: "台灣每年平均有感地震次數",
    source: "中央氣象署地震測報中心",
  },
];

const painPoints = [
  {
    icon: "🧩",
    title: "資訊分散",
    desc: "災害當下，天氣、警報、道路與避難資訊散落在不同網站與 App，難以即時整合判斷。",
  },
  {
    icon: "📵",
    title: "聯繫中斷",
    desc: "通訊壅塞時打不通電話，最焦慮的往往不是災害本身，而是「不知道家人在哪、平不平安」。",
  },
  {
    icon: "❓",
    title: "不知所措",
    desc: "多數人沒有受過防災訓練，警報響起的那一刻，常常不知道下一步該怎麼做。",
  },
];

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

const screens = [
  {
    src: "/screenshots/home.png",
    title: "首頁",
    desc: "即時天氣、所在地警示與災情地圖一目了然",
  },
  {
    src: "/screenshots/map.png",
    title: "避難設施地圖",
    desc: "依類型與半徑搜尋醫療、救援與避難地點",
  },
  {
    src: "/screenshots/camera.png",
    title: "拍照上傳",
    desc: "災情現場拍照回報，標記即時上地圖",
  },
  {
    src: "/screenshots/info.png",
    title: "災害資訊",
    desc: "豪雨、溫度等官方特報整合查詢",
  },
  {
    src: "/screenshots/profile.png",
    title: "個人與群組",
    desc: "帳號設定、關注地點與家人群組管理",
  },
  {
    src: "/screenshots/auth.png",
    title: "登入與註冊",
    desc: "Email 或社群帳號快速登入",
  },
];

const sdgs = [
  {
    no: "SDG 3",
    title: "良好健康與福祉",
    desc: "降低災害造成的傷亡與心理焦慮，守護每個家庭的安全與安心。",
    color: "bg-green-50 text-green-700 border-green-100",
  },
  {
    no: "SDG 11",
    title: "永續城市與社區",
    desc: "以群眾協作的災情回報，建立更具韌性的社區防災網絡。",
    color: "bg-amber-50 text-amber-700 border-amber-100",
  },
  {
    no: "SDG 13",
    title: "氣候行動",
    desc: "面對極端氣候常態化，協助民眾理解風險、提前準備、即時應變。",
    color: "bg-emerald-50 text-emerald-700 border-emerald-100",
  },
  {
    no: "SDG 17",
    title: "多元夥伴關係",
    desc: "串連政府開放資料、學校與社區，共同打造公共防災基礎建設。",
    color: "bg-sky-50 text-sky-700 border-sky-100",
  },
];

const impacts = [
  {
    icon: "🛡️",
    title: "讓防災資訊零落差",
    desc: "核心功能永久免費，無論年齡、收入與居住地，每個人都能取得保命資訊。",
  },
  {
    icon: "🤝",
    title: "讓互助成為習慣",
    desc: "每一筆災情回報都在幫助身邊的人——我們把「自助」設計成「互助」。",
  },
  {
    icon: "🌱",
    title: "讓社會更有韌性",
    desc: "從家庭到社區、從校園到城市，累積台灣面對災害的集體應變能力。",
  },
];

const businessModels = [
  {
    icon: "💛",
    title: "個人用戶永久免費",
    tag: "公益核心",
    desc: "災害資訊是基本權利。即時警示、災情地圖、家人定位與 AI 助理，對所有民眾免費開放，弱勢族群不被排除在外。",
  },
  {
    icon: "🏛️",
    title: "政府與企業合作",
    tag: "B2G / B2B",
    desc: "為地方政府防災單位與企業 ESG 提供區域災情儀表板、員工安否確認與防災演練方案，以合作收入支撐免費服務。",
  },
  {
    icon: "🎓",
    title: "防災教育服務",
    tag: "教育推廣",
    desc: "與學校及社區合作開設防災工作坊、CBS 警報情境演練，讓防災教育從「聽過」變成「做得到」。",
  },
];

const roadmap = [
  {
    stage: "第一階段",
    status: "已完成",
    done: true,
    title: "打造 MVP 產品",
    desc: "完成 App 核心開發：即時天氣與警示、災情回報地圖、家人群組與定位、AI 助理阿巧、CBS 警報模擬與後端系統。",
  },
  {
    stage: "第二階段",
    status: "進行中",
    done: false,
    title: "驗證與優化",
    desc: "進行使用者測試與校園示範推廣，蒐集真實回饋、優化操作體驗，驗證社會需求與影響力假設。",
  },
  {
    stage: "第三階段",
    status: "規劃中",
    done: false,
    title: "正式上線與在地合作",
    desc: "於雙平台正式上架，與地方政府、社區與學校建立合作，推動防災教育並擴大災情回報網絡。",
  },
  {
    stage: "第四階段",
    status: "未來願景",
    done: false,
    title: "成為防災基礎建設",
    desc: "讓攏災影成為台灣家庭的防災日常，並將經驗輸出至同樣面對地震與颱風的東亞地區。",
  },
];

const partners = [
  { icon: "🌦️", name: "中央氣象署", desc: "開放氣象與地震資料" },
  { icon: "🗺️", name: "OpenStreetMap", desc: "開源地圖圖資" },
  { icon: "⚡", name: "Groq AI", desc: "AI 助理推論引擎" },
  { icon: "🏫", name: "國立中正大學", desc: "團隊孵育與學研支持" },
];

const faqs = [
  {
    q: "攏災影是免費的嗎？",
    a: "是的。我們相信防災資訊是基本權利，App 的核心功能——即時天氣與警示、災情地圖、家人定位、AI 助理——對個人用戶永久免費。營運成本將透過政府與企業合作方案支撐。",
  },
  {
    q: "App 什麼時候可以下載？",
    a: "目前 App 已完成 MVP 開發，正在進行使用者測試與優化。正式上架前，歡迎透過 Email 與我們聯繫，加入早期測試或取得最新進度。",
  },
  {
    q: "家人定位會不會洩漏我的隱私？",
    a: "位置分享採「雙方同意制」——必須互相加入家人群組才看得到彼此位置，你也可以隨時移除家人或停止分享。我們只蒐集服務必要的資料，不會販售個資。",
  },
  {
    q: "災情回報的資訊可靠嗎？",
    a: "災情回報以「照片＋定位」為基礎，讓資訊有憑有據；同時搭配中央氣象署官方警特報資料交叉呈現，幫助使用者綜合判斷，而非僅依賴單一來源。",
  },
  {
    q: "我是政府單位／企業／學校，可以怎麼合作？",
    a: "我們提供區域災情儀表板、員工或師生安否確認、防災教育工作坊等合作方案，歡迎來信 longtsaiiann@gmail.com，我們會盡快與您聯繫。",
  },
];

const members = [
  {
    name: "張書涵",
    dept: "資訊管理學系四年級",
    role: "專案負責人 / 商業策略與營運規劃",
    desc:
      "具備大型活動統籌、政府計畫執行與跨域協作經驗，曾主導教育部青年發展署專案，負責從提案發想、預算編列到結案管理。擅長整合資源與制定策略，負責團隊整體方向、時程控管與市場推進。",
  },
  {
    name: "江宗諺",
    dept: "資訊管理學系四年級",
    role: "核心技術開發（AI 系統與開放資料整合）",
    desc:
      "具備網頁開發與軟體開發經驗，負責 AI 問答助理「阿巧」與系統核心邏輯開發，將技術落實於實際應用場景。",
  },
  {
    name: "林威岑",
    dept: "資訊工程學系三年級",
    role: "核心技術開發（系統架構與地圖功能開發）",
    desc:
      "具備系統設計與前端開發能力，曾帶領團隊開發 AI 評估系統。負責災害地圖與系統整合開發。",
  },
  {
    name: "林新恩",
    dept: "資訊管理學系四年級",
    role: "團隊主要接洽人、UI/UX 設計與品牌形象",
    desc:
      "專長於視覺設計與使用者介面規劃，負責 App 整體介面設計與品牌形象建構，確保產品在緊急情境下仍具備良好操作體驗。",
  },
  {
    name: "柯達宏",
    dept: "機械工程學系二年級",
    role: "產品策略與使用者體驗優化",
    desc:
      "擅長問題分析與系統性思考，曾於 iGEM 國際競賽榮獲金牌。負責產品概念發想、策略規劃與使用者體驗優化。",
  },
];

const news = [
  {
    date: "2026.04.24",
    tag: "🎉 團隊喜訊",
    highlight: { value: "16 萬", label: "教育部補助" },
    title: "攏災影榮獲教育部創業實戰模擬學習平台 16 萬元補助",
    desc:
      "本學期，攏災影團隊以防災社會創新提案通過教育部「創業實戰模擬學習平台」審核，榮獲新臺幣 16 萬元補助。國立中正大學青創團隊此次以「AI 雙星」之姿，於教育部 U-start 與創業實戰計畫合計獲得 86 萬元肯定。這筆補助將投入 App 優化與校園防災推廣，讓更多人能用上即時的防災工具。",
    links: [
      {
        label: "教育部實戰模擬平台公告",
        href: "https://ssp.moe.gov.tw/newses/67",
      },
      {
        label: "中正大學新聞稿",
        href: "https://www.ccu.edu.tw/p/406-1000-88740,r981.php?Lang=zh-tw",
      },
      {
        label: "中正大學 Facebook",
        href: "https://www.facebook.com/share/p/18cV8zNFKj/?mibextid=wwXIfr",
      },
    ],
  },
];

export default function Home() {
  return (
    <main>
      {/* 導覽列 */}
      <header className="sticky top-0 z-30 border-b border-gray-100 bg-white/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center">
            <img src="/logo.png" alt="攏災影 KNOW ZAI" className="h-14 w-auto" />
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium text-gray-600 lg:flex">
            <a href="#news" className="transition hover:text-brand">最新消息</a>
            <a href="#problem" className="transition hover:text-brand">社會問題</a>
            <a href="#features" className="transition hover:text-brand">App 功能</a>
            <a href="#screens" className="transition hover:text-brand">實際畫面</a>
            <a href="#impact" className="transition hover:text-brand">社會影響力</a>
            <a href="#model" className="transition hover:text-brand">永續經營</a>
            <a href="#team" className="transition hover:text-brand">團隊</a>
            <a href="#faq" className="transition hover:text-brand">FAQ</a>
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
      <section id="top" className="relative overflow-hidden bg-gradient-to-b from-orange-50 via-orange-50/40 to-white">
        {/* 裝飾光暈 */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 top-32 h-72 w-72 rounded-full bg-orange-300/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
          {/* 文案 */}
          <div className="text-center lg:text-left">
            <p className="mb-5 inline-block rounded-full bg-brand/10 px-4 py-1 text-sm font-medium text-brand-dark">
              🌱 社會創新 × 防災科技
            </p>
            <h1 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
              在災害來臨前，<br />
              讓你與家人始終<span className="text-brand">在一起</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gray-600 lg:mx-0">
              攏災影是一支來自國立中正大學的社會創新團隊，
              我們把即時災情地圖、家人定位、AI 防災助理與緊急警報整合進一支 App，
              讓每個人在災害情境下都能快速做出正確的判斷。
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a
                href="#features"
                className="rounded-full bg-brand px-8 py-3 font-semibold text-white shadow-lg shadow-brand/30 transition hover:-translate-y-0.5 hover:bg-brand-dark"
              >
                了解功能
              </a>
              <a
                href="#impact"
                className="rounded-full border border-brand px-8 py-3 font-semibold text-brand-dark transition hover:bg-brand/5"
              >
                我們的影響力
              </a>
            </div>
          </div>

          {/* 實際 App 首頁畫面 */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 overflow-hidden rounded-[2.5rem] border-8 border-gray-900 bg-gray-900 shadow-2xl">
                <img
                  src="/screenshots/home.png"
                  alt="攏災影 App 首頁：即時天氣與災情地圖"
                  className="w-full rounded-[2rem]"
                />
              </div>
              <span className="absolute -right-4 top-6 rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-dark shadow-md">
                📱 實際 App 畫面
              </span>
              <img
                src="/a-chiao.png"
                alt="AI 防災助理阿巧"
                className="absolute -bottom-4 -left-6 h-20 w-20 rounded-full border-4 border-white bg-white object-cover shadow-lg"
              />
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

      {/* 最新消息 */}
      <section id="news" className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-center text-sm font-semibold tracking-widest text-brand">NEWS</p>
        <h2 className="mt-2 text-center text-3xl font-bold text-gray-900">最新消息</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-500">
          團隊的最新動態、獲獎與合作消息，都會在這裡更新。
        </p>

        <div className="mt-12 space-y-6">
          {news.map((n) => (
            <article
              key={n.title}
              className="overflow-hidden rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50/70 to-white shadow-sm transition hover:shadow-md"
            >
              <div className="grid gap-8 p-8 md:grid-cols-[200px,1fr] md:p-10">
                {/* 補助亮點 */}
                {n.highlight && (
                  <div className="flex flex-col items-center justify-center rounded-2xl bg-white p-6 text-center shadow-sm">
                    <div className="text-4xl font-extrabold text-brand-dark">{n.highlight.value}</div>
                    <div className="mt-2 text-sm font-medium text-gray-500">{n.highlight.label}</div>
                  </div>
                )}

                {/* 內容 */}
                <div className={n.highlight ? "" : "md:col-span-2"}>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand-dark">
                      {n.tag}
                    </span>
                    <time className="text-sm font-medium text-gray-400">{n.date}</time>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-gray-900">{n.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{n.desc}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {n.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-white px-4 py-2 text-sm font-semibold text-brand-dark transition hover:bg-brand hover:text-white"
                      >
                        {l.label}
                        <span aria-hidden>↗</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 社會問題 */}
      <section id="problem" className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-center text-sm font-semibold tracking-widest text-brand">THE PROBLEM</p>
        <h2 className="mt-2 text-center text-3xl font-bold text-gray-900">我們想解決的社會問題</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-500">
          台灣是全世界天然災害風險最高的地區之一，但防災資訊與工具，至今仍跟不上災害的速度。
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {problems.map((p) => (
            <div
              key={p.label}
              className="rounded-2xl border border-orange-100 bg-orange-50/60 p-8 text-center"
            >
              <div className="text-4xl font-extrabold text-brand-dark">{p.value}</div>
              <p className="mt-3 font-medium text-gray-700">{p.label}</p>
              <p className="mt-2 text-xs text-gray-400">資料來源：{p.source}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {painPoints.map((p) => (
            <div key={p.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="text-3xl">{p.icon}</div>
              <h3 className="mt-4 text-lg font-bold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 動機與願景 */}
      <section id="vision" className="bg-orange-50 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold tracking-widest text-brand">WHY WE START</p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">我們的起點</h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-gray-600">
              <p>
                台灣位處地震帶、每年面對颱風與豪雨，天災頻繁。然而當災害發生時，
                資訊往往分散、難以即時整合，民眾也不容易第一時間確認家人是否平安。
              </p>
              <p>
                我們希望把「災情回報、家人聯繫、防災資訊」整合進一支好用的 App，
                讓每個人都能在最短時間內掌握狀況、保護自己與所愛的人。
              </p>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold tracking-widest text-brand">OUR VISION</p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">我們的願景</h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-gray-600">
              <p>
                打造一個人人都能輕鬆使用的防災平台——讓即時災情透明流通、
                讓家人之間隨時保持連結、讓 AI 成為每個人身邊的防災夥伴。
              </p>
              <p>
                我們相信，更好的防災資訊，能讓社會更有韌性；
                而韌性，是一個社會最重要的公共財。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App 介紹 */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-center text-sm font-semibold tracking-widest text-brand">FEATURES</p>
        <h2 className="mt-2 text-center text-3xl font-bold text-gray-900">App 功能介紹</h2>
        <p className="mt-4 text-center text-gray-500">MVP 已完成開發，以下為核心功能</p>
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

      {/* App 實際畫面 */}
      <section id="screens" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-center text-sm font-semibold tracking-widest text-brand">SCREENSHOTS</p>
          <h2 className="mt-2 text-center text-3xl font-bold text-gray-900">App 實際畫面</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-500">
            不只是概念——以下皆為目前 App 的真實操作畫面。
          </p>
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {screens.map((s) => (
              <figure key={s.title} className="text-center">
                <div className="overflow-hidden rounded-2xl border-4 border-gray-900 bg-gray-900 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
                  <img
                    src={s.src}
                    alt={`攏災影 App ${s.title}畫面`}
                    className="w-full rounded-xl"
                  />
                </div>
                <figcaption className="mt-3">
                  <div className="font-bold text-gray-900">{s.title}</div>
                  <div className="mt-1 text-xs leading-relaxed text-gray-500">{s.desc}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 認識阿巧 */}
      <section className="bg-gradient-to-b from-white to-orange-50/60 py-20">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-6 md:grid-cols-[auto,1fr]">
          <div className="flex justify-center">
            <div className="rounded-full border-4 border-orange-100 bg-white p-4 shadow-lg">
              <img
                src="/a-chiao.png"
                alt="AI 防災助理阿巧"
                className="h-44 w-44 rounded-full object-cover md:h-52 md:w-52"
              />
            </div>
          </div>
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold tracking-widest text-brand">MEET A-CHIAO</p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              認識阿巧——你身邊的防災夥伴
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              阿巧是攏災影的 AI 防災助理，也是我們的品牌吉祥物。
              你可以用最自然的方式問它「台北天氣如何？」「下雨要帶傘嗎？」，
              它會依據即時氣象資料給你穿衣建議、攜帶雨具提醒與防災叮嚀。
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              我們希望防災不再是冷冰冰的警報，而是一位隨時在你身邊、
              讓你安心的好夥伴。
            </p>
          </div>
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

      {/* 社會影響力 */}
      <section id="impact" className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-center text-sm font-semibold tracking-widest text-brand">SOCIAL IMPACT</p>
        <h2 className="mt-2 text-center text-3xl font-bold text-gray-900">我們創造的社會影響力</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-500">
          攏災影不只是科技產品，更是一項回應真實社會需求的公共服務。
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {impacts.map((i) => (
            <div key={i.title} className="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm">
              <div className="text-4xl">{i.icon}</div>
              <h3 className="mt-4 text-lg font-bold text-gray-900">{i.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{i.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="mt-16 text-center text-xl font-bold text-gray-900">
          對應聯合國永續發展目標（SDGs）
        </h3>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {sdgs.map((s) => (
            <div key={s.no} className={`rounded-2xl border p-6 ${s.color}`}>
              <div className="text-sm font-extrabold tracking-wide">{s.no}</div>
              <h4 className="mt-2 font-bold">{s.title}</h4>
              <p className="mt-2 text-sm leading-relaxed opacity-80">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 永續經營模式 */}
      <section id="model" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-center text-sm font-semibold tracking-widest text-brand">SUSTAINABLE MODEL</p>
          <h2 className="mt-2 text-center text-3xl font-bold text-gray-900">永續經營模式</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-500">
            社會企業的精神，是用可持續的商業模式，支撐不間斷的社會使命。
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {businessModels.map((m) => (
              <div key={m.title} className="flex flex-col rounded-2xl bg-white p-8 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{m.icon}</span>
                  <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand-dark">
                    {m.tag}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-gray-900">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 發展里程碑 */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="text-center text-sm font-semibold tracking-widest text-brand">ROADMAP</p>
        <h2 className="mt-2 text-center text-3xl font-bold text-gray-900">發展里程碑</h2>
        <div className="mt-12 space-y-0">
          {roadmap.map((r, idx) => (
            <div key={r.stage} className="relative flex gap-6 pb-10 last:pb-0">
              {/* 時間軸 */}
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                    r.done ? "bg-brand text-white" : "border-2 border-brand/40 bg-white text-brand-dark"
                  }`}
                >
                  {r.done ? "✓" : idx + 1}
                </div>
                {idx < roadmap.length - 1 && <div className="mt-1 w-0.5 flex-1 bg-orange-100" />}
              </div>
              {/* 內容 */}
              <div className="pt-1">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-sm font-semibold text-gray-400">{r.stage}</span>
                  <span
                    className={`rounded-full px-3 py-0.5 text-xs font-semibold ${
                      r.done
                        ? "bg-green-50 text-green-700"
                        : r.status === "進行中"
                        ? "bg-brand/10 text-brand-dark"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {r.status}
                  </span>
                </div>
                <h3 className="mt-2 text-lg font-bold text-gray-900">{r.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 資料來源與夥伴 */}
      <section className="bg-orange-50/60 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-center text-sm font-semibold tracking-widest text-brand">DATA & PARTNERS</p>
          <h2 className="mt-2 text-center text-3xl font-bold text-gray-900">資料來源與技術夥伴</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {partners.map((p) => (
              <div
                key={p.name}
                className="flex items-center gap-4 rounded-2xl border border-orange-100 bg-white p-5"
              >
                <span className="text-3xl">{p.icon}</span>
                <div>
                  <div className="font-bold text-gray-900">{p.name}</div>
                  <div className="text-xs text-gray-500">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 團隊介紹 */}
      <section id="team" className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-center text-sm font-semibold tracking-widest text-brand">TEAM</p>
        <h2 className="mt-2 text-center text-3xl font-bold text-gray-900">關於團隊</h2>
        <div className="mx-auto mt-8 max-w-3xl space-y-4 text-center text-lg leading-relaxed text-gray-600">
          <p>
            本團隊由國立中正大學跨領域學生組成，成員涵蓋資訊管理、資訊工程、機械工程，
            具備技術開發、產品設計、商業規劃與專案執行之完整能力鏈。
          </p>
          <p>
            團隊以「解決真實社會問題」為核心導向，結合 AI 技術、系統開發與使用者體驗設計，
            致力於打造具備實際落地能力之防災解決方案《攏災影》。在過去的專題實作、競賽參與與
            政府計畫經驗中，已累積跨域協作與專案執行能力，能有效將構想轉化為可行產品。
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {members.map((m) => (
            <div
              key={m.name}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-lg font-bold text-brand-dark">
                  {m.name[0]}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{m.name}</h3>
                  <p className="text-xs text-gray-500">{m.dept}</p>
                </div>
              </div>
              <p className="mt-4 text-sm font-semibold text-brand-dark">{m.role}</p>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{m.desc}</p>
            </div>
          ))}
        </div>

        <blockquote className="mx-auto mt-12 max-w-3xl rounded-2xl bg-orange-50 p-8 text-center">
          <p className="text-xl font-bold text-brand-dark">
            「讓每個人都能活著，直到生活回到正軌。」
          </p>
          <p className="mt-3 text-sm text-gray-500">— 攏災影 KNOW ZAI 核心理念</p>
        </blockquote>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-center text-sm font-semibold tracking-widest text-brand">FAQ</p>
          <h2 className="mt-2 text-center text-3xl font-bold text-gray-900">常見問題</h2>
          <div className="mt-10 space-y-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm open:border-orange-100"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between font-bold text-gray-900">
                  {f.q}
                  <span className="ml-4 text-brand transition group-open:rotate-45">＋</span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / 聯絡 */}
      <section id="contact" className="bg-brand-dark py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold">想了解更多或一起參與？</h2>
          <p className="mx-auto mt-4 max-w-2xl text-orange-100">
            無論你是想搶先體驗的使用者、想推動防災的政府與學校，
            或是尋找 ESG 合作的企業——歡迎與我們聯繫，一起讓台灣更有韌性。
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:longtsaiiann@gmail.com"
              className="rounded-full bg-white px-8 py-3 font-semibold text-brand-dark transition hover:bg-orange-50"
            >
              ✉️ Email 聯絡
            </a>
            <a
              href="mailto:longtsaiiann@gmail.com?subject=%E5%90%88%E4%BD%9C%E6%B4%BD%E8%AB%87"
              className="rounded-full border border-white/60 px-8 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              🤝 合作洽談
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
          <img src="/logo.png" alt="攏災影 KNOW ZAI" className="h-11 w-auto" />
          <div className="flex gap-6">
            <a href="#news" className="hover:text-brand">最新消息</a>
            <a href="#problem" className="hover:text-brand">社會問題</a>
            <a href="#features" className="hover:text-brand">App 功能</a>
            <a href="#impact" className="hover:text-brand">影響力</a>
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
          <div className="text-gray-400">© {new Date().getFullYear()} 攏災影 KNOW ZAI</div>
        </div>
      </footer>
    </main>
  );
}
