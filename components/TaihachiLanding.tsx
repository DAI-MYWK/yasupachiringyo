const asset = (name: string) => `/assets/illustrations/${name}`;
const generatedAsset = (name: string) => `/assets/generated/${name}`;

const navItems = [
  { label: '私たちについて', href: '#about' },
  { label: 'サービス', href: '#service' },
  { label: '施工事例', href: '#works' },
  { label: 'お客様の声', href: '#voice' },
  { label: 'よくあるご質問', href: '#faq' }
];

const worries = [
  { img: 'worry-mountain.png', text: '山や庭の木が\n大きくなりすぎた' },
  { img: 'worry-house.png', text: '枯れ木・危険木が\nあって心配' },
  { img: 'worry-fruit.png', text: '果樹木を整理して\nすっきりしたい' },
  { img: 'worry-logs.png', text: '薪に使いたいけど\n切り分けが大変' },
  { img: 'worry-yen.png', text: 'どこに頼めばいいか\nわからない' }
];

const services = [
  {
    title: '山の管理・整備',
    img: 'service-forest.png',
    body: '山林の間伐・伐採、下草刈りなど健全な山づくりをサポートします。'
  },
  {
    title: '果樹木の伐採・剪定',
    img: 'service-fruit.png',
    body: 'りんご・栗・柿などの果樹木を、状況に合わせて伐採・剪定します。'
  },
  {
    title: '危険木の撤去',
    img: 'service-danger.png',
    body: '倒木のおそれがある木、枯れ木などを安全に撤去します。'
  },
  {
    title: '薪用の切り分け',
    img: 'service-logs.png',
    body: '薪ストーブ用の玉切り・薪割りまで、ご希望に合わせて対応します。'
  }
];

const process = [
  { title: 'ご相談・現地確認', text: 'お悩みやご要望を丁寧にヒアリング' },
  { title: 'お見積り・ご提案', text: '現地を確認し、最適な方法をご提案します' },
  { title: '作業', text: '安全第一で丁寧に伐採・整理します' },
  { title: '後片付け・整理', text: '使いやすいように整えて仕上げます' },
  { title: 'ご確認・お引き渡し', text: 'ご確認いただき、作業完了です' }
];

const areaCities = ['奥州市', '一関市', '平泉町', '金ケ崎町', '住田町', '遠野市 など'];

const voices = [
  {
    text: '危険な枯れ木を撤去してもらい、安心して暮らせるようになりました。作業も丁寧で、頼んで本当によかったです。',
    meta: '一関市　60代 男性'
  },
  {
    text: '果樹園の整理をお願いしました。すっきりして日当たりが良くなり、来年の実りが楽しみです。',
    meta: '奥州市　70代 女性'
  },
  {
    text: '薪用に切り分けまでしてもらえて、助かりました。冬が楽しみです。',
    meta: '金ケ崎町　40代 男性'
  }
];

const works = [
  { img: 'work-forest.png', label: '山の間伐・整備', place: '奥州市' },
  { img: 'service-fruit.png', label: '果樹木の伐採', place: '平泉町' },
  { img: 'service-danger.png', label: '危険木の撤去', place: '一関市' },
  { img: 'service-logs.png', label: '薪用の切り分け', place: '金ケ崎町' },
  { img: 'work-clearing.png', label: '山林の下草刈り', place: '住田町' }
];

const faqs = [
  ['見積りは無料ですか？', 'はい。現地確認とお見積りは無料で行っております。まずはお気軽にご相談ください。'],
  ['1本だけの伐採でもお願いできますか？', 'もちろん可能です。小さな木から危険木まで、内容に合わせて対応いたします。'],
  ['作業中は立ち会いが必要ですか？', '現地確認や作業内容の確認時にお願いする場合があります。ご都合に合わせてご相談ください。'],
  ['どのくらいの期間で作業してもらえますか？', '木の状態や本数、現場環境によって異なります。現地確認後に目安をご案内します。'],
  ['薪の長さや太さの希望はできますか？', '可能です。薪ストーブや保管場所に合わせて、扱いやすいサイズを確認します。'],
  ['どの地域まで対応していますか？', '岩手県南地域を中心に、近隣地域もご相談いただけます。']
];

function LineBreakText({ text }: { text: string }) {
  return (
    <>
      {text.split('\n').map((line) => (
        <span key={line} className="block">
          {line}
        </span>
      ))}
    </>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e4d6bb] bg-[#fffaf0]/95 backdrop-blur-sm">
      <div className="lp-container flex h-[76px] items-center justify-between gap-4">
        <a href="#top" className="flex shrink-0 items-center gap-3" aria-label="泰八林業トップへ">
          <img src={asset('logo-mark.png')} alt="泰八林業のロゴマーク" className="h-12 w-12 rounded-full" />
          <div className="leading-tight">
            <p className="text-[13px] font-semibold tracking-[0.18em] text-ink">合同会社</p>
            <p className="font-mincho text-[28px] font-black tracking-[0.06em] text-ink">泰八林業</p>
          </div>
        </a>

        <nav className="hidden items-center gap-4 whitespace-nowrap text-[14px] font-bold tracking-[0.03em] text-ink lg:flex" aria-label="メインナビゲーション">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-forest-700">
              {item.label}
            </a>
          ))}
        </nav>

        <a href="tel:09063897137" className="hidden min-w-[220px] rounded-[12px] bg-forest-700 px-4 py-2 text-right text-white shadow-card transition hover:bg-forest-800 sm:block">
          <span className="block text-[12px] font-semibold">お気軽にお電話ください</span>
          <span className="block whitespace-nowrap text-[22px] font-black leading-tight tracking-[0.03em]">090-6389-7137</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden soft-paper-bg py-10 sm:py-14">
      <div className="lp-container relative grid items-center gap-8 md:grid-cols-[1fr_1fr]">
        <div className="relative z-10">
          <p className="mb-4 inline-flex rounded-full bg-[#f1e0bf] px-4 py-2 text-[14px] font-bold tracking-[0.08em] text-bark-700">
            岩手県南 地域密着
          </p>
          <h1 className="font-hand text-[44px] font-black leading-[1.18] tracking-[0.02em] text-ink sm:text-[52px] md:text-[54px] lg:text-[58px]">
            この<span className="text-forest-700">木</span>、<br />
            <span className="brush-underline whitespace-nowrap">どうしたらいいべ。</span>
          </h1>
          <p className="ja-copy mt-6 text-[18px] font-bold leading-relaxed tracking-[0.05em] text-forest-700 sm:text-[20px]">
            山のこと、木のこと、泰八林業にご相談ください。
          </p>
          <p className="ja-copy mt-4 max-w-[430px] text-[15px] font-semibold leading-[2] text-ink/85">
            岩手県南地域を中心に、山の管理から果樹木の伐採、危険木の撤去、薪用の切り分けまで、地域に根ざした林業サービスを行っています。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href="tel:09063897137" className="cta-green text-center">
              <span className="block text-[13px] font-bold">お電話でのご相談はこちら</span>
              <span className="block whitespace-nowrap text-[26px] font-black leading-tight tracking-[0.03em]">090-6389-7137</span>
            </a>
            <a href="#contact" className="cta-cream text-center font-bold">
              <span className="block text-[14px] text-bark-700">相談・見積り</span>
              <span className="block text-[22px] text-forest-700">無料</span>
            </a>
          </div>
        </div>

        <div className="relative min-h-[300px] md:min-h-[420px]">
          <div className="absolute right-0 top-0 hidden h-28 w-28 rounded-full border border-forest-700/50 bg-[#fffaf0]/80 p-4 text-center font-bold leading-relaxed text-forest-700 shadow-card md:flex md:items-center md:justify-center">
            まずは<br />お気軽に<br />ご相談ください
          </div>
          <img
            src={generatedAsset('hero-forestry.png')}
            alt="木の前でチェーンソーを構える林業スタッフの手描き風イラスト"
            className="ml-auto mt-0 h-auto w-full max-w-[560px] rounded-[22px] border border-[#eadcc2] object-contain shadow-soft"
          />
        </div>
      </div>
    </section>
  );
}

function Worries() {
  return (
    <section id="about" className="py-9 sm:py-12">
      <div className="lp-container">
        <h2 className="section-heading">こんなお悩み、ありませんか？</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {worries.map((item) => (
            <article key={item.img} className="paper-card flex min-h-[150px] flex-col items-center justify-between p-4 text-center transition hover:-translate-y-1 hover:shadow-soft">
              <img src={generatedAsset(item.img)} alt="" className="h-[74px] w-full object-contain mix-blend-multiply" />
              <p className="mt-2 text-[15px] font-bold leading-relaxed text-ink">
                <LineBreakText text={item.text} />
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="service" className="py-5 sm:py-8">
      <div className="lp-container">
        <h2 className="section-heading">サービス内容</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article key={service.title} className="paper-card overflow-hidden p-3 transition hover:-translate-y-1 hover:shadow-soft">
              <div className="mb-2 text-center">
                <span className="label-ribbon">{service.title}</span>
              </div>
              <div className="overflow-hidden rounded-[12px] border border-[#e1d2b8] bg-[#fffaf1]">
                <img src={generatedAsset(service.img)} alt={`${service.title}の手描き風イラスト`} className="h-[148px] w-full object-cover" />
              </div>
              <p className="ja-copy px-2 py-4 text-[14px] font-semibold leading-[1.85] text-ink/85">{service.body}</p>
            </article>
          ))}
        </div>
        <p className="mt-3 text-right text-[13px] font-semibold text-ink/70">その他の作業もお気軽にご相談ください。</p>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="py-8 sm:py-11">
      <div className="lp-container">
        <div className="paper-card paper-texture overflow-hidden rounded-[26px] p-5 sm:p-7">
          <div className="relative z-10 grid gap-6">
            <div className="mx-auto max-w-[820px] text-center">
              <h2 className="font-mincho text-[28px] font-black leading-tight tracking-[0.03em] text-forest-700 sm:text-[34px] lg:whitespace-nowrap lg:text-[36px]">
                伐って終わりではなく、その後使いやすいところまで。
              </h2>
              <p className="ja-copy mx-auto mt-4 max-w-[680px] text-left text-[15px] font-semibold leading-[2] text-ink/80 sm:text-center">
                泰八林業は、ただ伐るだけではありません。ご要望や現場の状況を丁寧に確認し、伐採後の枝払い・玉切り・整理・運び出しまで、その後が使いやすい形で仕上げます。
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-5">
              {process.map((step, index) => (
                <article key={step.title} className="flow-arrow rounded-[16px] bg-[#fffaf5]/80 p-3 text-center">
                  <div className="mx-auto flex h-[82px] w-[82px] items-center justify-center rounded-full border border-[#dccbad] bg-white text-[28px] font-black text-forest-700 shadow-card">
                    {index + 1}
                  </div>
                  <h3 className="mt-3 text-[14px] font-black text-forest-700">{step.title}</h3>
                  <p className="ja-copy mt-2 text-[12px] font-semibold leading-relaxed text-ink/75">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Area() {
  return (
    <section className="py-8">
      <div className="lp-container grid gap-7 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <h2 className="font-mincho text-[28px] font-black leading-relaxed tracking-[0.06em] text-forest-700 sm:text-[32px]">
            岩手県南地域を中心に<br className="hidden sm:block" />サポートします！
          </h2>
          <p className="ja-copy mt-4 text-[15px] font-semibold leading-[2] text-ink/80">
            奥州市・一関市・平泉町・金ケ崎町・住田町・遠野市など、岩手県南地域を中心にお伺いします。地域の気候や地形を知り尽くした地元の林業会社として、迅速・丁寧に対応いたします。
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-[0.8fr_0.9fr_1.2fr] sm:items-center">
          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border-[6px] border-[#d7cfaf] bg-forest-700 text-center text-[18px] font-black leading-relaxed text-white shadow-card">
            対応エリア<br />目安
          </div>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-[15px] font-bold text-ink/85 sm:block sm:space-y-2">
            {areaCities.map((city) => (
              <li key={city} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-forest-700" aria-hidden="true" />
                {city}
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-1">
            <img src={generatedAsset('area-map.png')} alt="岩手県南地域の地図風イラスト" className="h-[140px] w-full rounded-[16px] border border-[#e0d2b8] bg-[#fffaf1] object-contain p-2 shadow-card" />
            <img src={generatedAsset('area-view.png')} alt="岩手県南の山と町並みの手描き風イラスト" className="h-[140px] w-full rounded-[16px] border border-[#e0d2b8] bg-[#fffaf1] object-cover shadow-card" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Voices() {
  return (
    <section id="voice" className="py-8">
      <div className="lp-container">
        <h2 className="section-heading">お客様の声</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {voices.map((voice) => (
            <article key={voice.meta} className="paper-card p-4">
              <p className="ja-copy text-[14px] font-semibold leading-[1.85] text-ink/85">{voice.text}</p>
              <p className="mt-3 text-right text-[13px] font-black text-forest-700">{voice.meta}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Works() {
  return (
    <section id="works" className="py-8">
      <div className="lp-container">
        <div className="mb-5 flex items-end justify-between gap-4">
          <h2 className="section-heading !mx-0 !mb-0 flex-1">施工事例</h2>
          <a href="#contact" className="hidden rounded-full border border-[#d6c39f] px-4 py-2 text-[13px] font-bold text-forest-700 transition hover:bg-white sm:block">
            他の事例もご覧ください
          </a>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {works.map((work) => (
            <article key={`${work.label}${work.place}`} className="group overflow-hidden rounded-[14px] border border-[#dfd0b5] bg-white shadow-card">
              <div className="overflow-hidden bg-[#fffaf1]">
                <img src={generatedAsset(work.img)} alt={`${work.label}の施工事例イメージ`} className="h-[132px] w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="px-3 py-2 text-center">
                <p className="text-[13px] font-black text-ink">{work.label}</p>
                <p className="text-[12px] font-semibold text-ink/60">{work.place}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="py-8">
      <div className="lp-container">
        <h2 className="section-heading">よくあるご質問</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {faqs.map(([question, answer]) => (
            <details key={question} className="faq-row rounded-[12px] border border-[#dfd0b5] bg-[#fffaf1] px-4 py-3 shadow-card">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[14px] font-black text-ink">
                <span>
                  <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-forest-700 text-[13px] text-white">Q</span>
                  {question}
                </span>
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-[#cbb894] text-forest-700">+</span>
              </summary>
              <p className="ja-copy mt-3 border-t border-[#eadfc8] pt-3 text-[13px] font-semibold leading-[1.8] text-ink/75">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-forest-800 py-6 text-white">
      <div className="lp-container relative z-10 grid gap-4 md:grid-cols-[1.15fr_0.65fr_1fr] md:items-center">
        <div>
          <p className="text-[17px] font-black tracking-[0.06em]">まずはお気軽にご相談ください！</p>
          <a href="tel:09063897137" className="mt-2 block whitespace-nowrap text-[24px] font-black leading-none tracking-[0.03em] sm:text-[28px]">
            090-6389-7137
          </a>
          <p className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[12px] font-semibold text-white/80">
            <span className="whitespace-nowrap">受付時間 7:00〜18:00</span>
            <span>18:00〜翌7:00は対応できません。</span>
          </p>
        </div>
        <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-[#eadc88] bg-forest-700 text-center font-black leading-relaxed shadow-card">
          相談・見積り<br />無料
        </div>
        <div className="grid gap-3 sm:items-center">
          <a href="mailto:info@example.com" className="rounded-[15px] border border-[#d6c39f] bg-[#fffaf0] px-5 py-4 text-center font-black text-forest-800 shadow-card transition hover:bg-white">
            お問い合わせフォームへ進む
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#fffaf0] py-5 text-[12px] font-semibold text-ink/70">
      <div className="lp-container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex shrink-0 items-center gap-2">
          <img src={asset('logo-mark.png')} alt="泰八林業のロゴマーク" className="h-8 w-8 rounded-full" />
          <span className="whitespace-nowrap font-mincho text-[20px] font-black text-ink">合同会社 泰八林業</span>
        </div>
        <p className="ja-copy">所在地　岩手県奥州市江刺〇〇〇〇-〇〇　代表者　佐藤 泰</p>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          <a href="#" className="hover:text-forest-700">プライバシーポリシー</a>
          <a href="#" className="hover:text-forest-700">特定商取引法に基づく表記</a>
        </div>
      </div>
    </footer>
  );
}

export default function TaihachiLanding() {
  return (
    <div className="min-h-screen overflow-hidden bg-paper text-ink">
      <Header />
      <main>
        <Hero />
        <Worries />
        <Services />
        <Process />
        <Area />
        <Voices />
        <Works />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
