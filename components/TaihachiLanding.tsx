import {
  ArrowIcon, CedarBranch, CheckIcon, LeafIcon, LogsIcon,
  MailIcon, OrchardIcon, PhoneIcon, RidgeDivider, StumpIcon, TreeIcon, TreeRings,
} from './ForestArtwork';
import { Header, ProjectGallery, RevealOnScroll } from './SiteInteractions';
import BusinessLink from './BusinessLink';
import Footer from './SiteFooter';

const photo = (name: string) => `/assets/redesign/${name}.webp`;
const lineUrl = 'https://line.me/ti/p/ugEYvphpWd';

const services = [
  {
    id: 'garden', number: '01', eyebrow: 'GARDEN & TREE CARE', Icon: StumpIcon,
    title: '庭木・危険木の伐採', image: 'hero-residential',
    alt: '家のそばに大きな木が立つ庭のイメージ',
    concern: '家のそばの木が、大きくなりすぎた。',
    body: '屋根にかかる枝や、倒木のおそれがある木、枯れてしまった木。周囲の建物や敷地の状況を確認し、安全に配慮して伐採・撤去します。庭の一本からご相談ください。',
    tags: ['敷地内の大きな木', '枯れ木・危険木'],
  },
  {
    id: 'orchard', number: '02', eyebrow: 'ORCHARD CARE', Icon: OrchardIcon,
    title: '果樹木の伐採・剪定', image: 'garden-care',
    alt: '里山の庭と果樹が広がる風景のイメージ',
    concern: '手が回らなくなった果樹を、整理したい。',
    body: 'りんご・栗・柿などの果樹木を、状態やご希望に合わせて伐採・剪定。日当たりやお手入れのしやすさを考えながら、すっきりした庭や果樹園に整えます。',
    tags: ['りんご・栗・柿など', '果樹園の整理'],
  },
  {
    id: 'forest', number: '03', eyebrow: 'FOREST MANAGEMENT', Icon: TreeIcon,
    title: '山の管理・整備', image: 'forest-canopy',
    alt: '木漏れ日が差し込む杉林のイメージ',
    concern: '受け継いだ山を、きちんと手入れしたい。',
    body: '山林の間伐・伐採、下草刈りなど、山の状態に合わせた管理・整備をお手伝いします。木々に光が届き、健やかに育つ山づくりをサポートします。',
    tags: ['間伐・伐採', '下草刈り'],
  },
  {
    id: 'firewood', number: '04', eyebrow: 'WOOD FOR EVERYDAY LIFE', Icon: LogsIcon,
    title: '薪用の切り分け', image: 'timber-detail',
    alt: '木口の年輪が見える丸太のイメージ',
    concern: '伐った木を、暮らしの中で使いたい。',
    body: '伐採した木を、薪ストーブや保管場所に合わせて扱いやすい長さに玉切りします。枝払いから整理まで、ご希望を伺いながら使いやすい形に仕上げます。',
    tags: ['ご希望の長さに玉切り', '枝払い・整理'],
  },
];

const steps = [
  ['ご相談・現地確認', '気になる木のこと、ご希望をお聞かせください。現地で木の状態や周囲の環境を確認します。'],
  ['お見積り・ご提案', '作業の方法と費用をご案内します。気になることは、作業前に一緒に確認しましょう。'],
  ['伐採・作業', 'ご相談した内容に沿って、周囲の安全に配慮しながら丁寧に作業を進めます。'],
  ['後片付け・お引き渡し', '枝払いや玉切り、整理まで。仕上がりをご確認いただき、作業完了です。'],
];

const faqs = [
  ['見積りは無料ですか？', 'はい。現地確認とお見積りは無料で行っております。木の大きさや本数が分からなくても、まずはお気軽にご相談ください。'],
  ['1本だけの伐採でもお願いできますか？', 'もちろん可能です。お庭の一本から、大きな木や危険木まで、木の状態と現場の状況に合わせて対応いたします。'],
  ['作業中は立ち会いが必要ですか？', '現地確認や作業内容の確認時にお願いする場合があります。ご都合に合わせてご相談ください。'],
  ['どのくらいの期間で作業してもらえますか？', '木の状態や本数、現場環境によって異なります。現地確認後に、作業時期と所要時間の目安をご案内します。'],
  ['伐った木を薪にしてもらえますか？', '薪用の切り分けにも対応しています。薪ストーブや保管場所に合わせて、ご希望の長さなどをお聞かせください。'],
  ['どの地域まで対応していますか？', '奥州市・一関市・平泉町・金ケ崎町・住田町・遠野市など、岩手県南地域を中心にお伺いします。その他の近隣地域もご相談ください。'],
];

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`eyebrow${light ? ' eyebrow-light' : ''}`}><span />{children}</p>;
}

function Hero() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-heading">
        <img className="hero-image" src={photo('hero-residential')} alt="家のそばに立つ大きな木と、穏やかな里山の庭のイメージ" width="1672" height="941" fetchPriority="high" />
        <div className="hero-shade" />
        <div className="hero-inner wrap">
          <p className="hero-eyebrow"><span />岩手県南の、身近な林業会社</p>
          <h1 id="hero-heading">この木、<br /><span>どうしたらいいだろう。</span></h1>
          <p className="hero-description">お庭や敷地の大きな木、倒れそうで心配な木。<br className="desktop-break" />伐採から後片付けまで、泰八林業にご相談ください。</p>
          <a href="#contact" className="button button-cream">木のことを相談する<ArrowIcon /></a>
        </div>
        <a className="hero-note" href="#contact"><LeafIcon /><span>庭の一本から。<strong>相談・見積り無料</strong></span></a>
        <span className="hero-scroll" aria-hidden="true">SCROLL<span /></span>
        <RidgeDivider className="hero-ridge" />
      </section>
      <nav className="service-shortcuts wrap" aria-label="サービスを探す">
        {services.map(({ id, Icon, title }, index) => <a href={`#${id}`} key={id}><Icon /><span>{title}</span><span className="shortcut-number">0{index + 1}</span></a>)}
      </nav>
    </>
  );
}

function About() {
  return (
    <section id="about" className="about section-space">
      <TreeRings className="about-rings" />
      <div className="wrap about-grid">
        <div className="about-copy" data-reveal>
          <Eyebrow>OUR APPROACH</Eyebrow>
          <h2 className="section-title">伐った、<br className="small-only" />その先まで。</h2>
          <p className="about-lead">木がなくなった、そのあとに。<br />いつもの暮らしが、<br />少し心地よくなるように。</p>
          <p className="body-copy">泰八林業は、岩手県南の林業会社です。<br />お庭の木から、果樹、山林まで。<br />一本一本の状態と、そこに暮らす方の<br className="desktop-break" />気持ちを確かめながら向き合います。</p>
          <p className="body-copy">伐採後の枝払い、玉切り、整理、運び出しまで。<br className="desktop-break" />その後も使いやすい形に整えることを<br className="desktop-break" />大切にしています。</p>
          <a href="#process" className="text-link">ご相談から作業まで<ArrowIcon /></a>
        </div>
        <div className="about-visual" data-reveal>
          <div className="forest-photo"><img src={photo('forest-canopy')} alt="木漏れ日が差す杉林のイメージ" width="1122" height="1402" loading="lazy" /></div>
          <div className="log-photo"><img src={photo('timber-detail')} alt="木のぬくもりが感じられる丸太のイメージ" width="1448" height="1086" loading="lazy" /></div>
          <CedarBranch className="about-cedar" />
          <span className="photo-caption">WITH TREES, WITH YOUR LIFE.</span>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="service" className="services section-space">
      <div className="wrap">
        <div className="section-heading-row" data-reveal>
          <div><Eyebrow>OUR SERVICES</Eyebrow><h2 className="section-title">木の困りごと、<br />お聞かせください。</h2></div>
          <div className="leaf-note"><LeafIcon /><span>一本から、<br />ご相談を。</span></div>
        </div>
        <div className="services-grid">
          {services.map(({ id, number, eyebrow, Icon, title, image, alt, concern, body, tags }) => (
            <article className={`service-item service-${id}`} id={id} key={id} data-reveal>
              <a className="service-image-link" href={`#${id}-description`} aria-label={`${title}について読む`}>
                <img src={photo(image)} alt={alt} width="1536" height="1024" loading="lazy" />
                <span className="service-number">{number}</span><span className="service-image-arrow"><ArrowIcon /></span>
              </a>
              <div className="service-copy" id={`${id}-description`}>
                <p className="service-eyebrow">{eyebrow}</p>
                <h3><Icon />{title}</h3>
                <p className="service-concern">{concern}</p>
                <p className="body-copy">{body}</p>
                <ul className="service-tags">{tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
        <p className="service-footnote">その他の木に関する作業も、お気軽にご相談ください。</p>
      </div>
    </section>
  );
}

function Works() {
  return (
    <section id="works" className="works section-space">
      <div className="wrap">
        <div className="section-heading-row" data-reveal>
          <div><Eyebrow>OUR WORK</Eyebrow><h2 className="section-title">手を入れると、<br />景色が変わる。</h2></div>
          <p className="section-intro">すっきりと、気持ちよく。<br />実際の作業前と作業後をご紹介します。</p>
        </div>
        <ProjectGallery />
        <div className="work-description"><div><span className="work-category">植栽管理</span><h3>道路沿いの草木・低木の整理</h3></div><p>生い茂った草木を整理し、<br className="desktop-break" />見通しのよい、すっきりとした状態へ。</p></div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="process section-space">
      <TreeRings className="process-rings" />
      <div className="wrap">
        <div className="section-heading-row" data-reveal><div><Eyebrow light>HOW WE WORK</Eyebrow><h2 className="section-title">まずは、お話から。</h2></div><p className="section-intro">「どこに頼めばいいか分からない」<br />そんなときも、お気軽にご連絡ください。</p></div>
        <ol className="process-list">{steps.map(([title, text], index) => <li key={title} data-reveal><div className="step-top"><span className="step-number">0{index + 1}</span>{index < 3 && <ArrowIcon />}</div><h3>{title}</h3><p>{text}</p>{index === 0 && <span className="step-free">現地確認・お見積り無料</span>}</li>)}</ol>
      </div>
      <RidgeDivider className="process-ridge" />
    </section>
  );
}

function Area() {
  return (
    <section id="area" className="area section-space">
      <div className="wrap area-grid">
        <div className="area-copy" data-reveal><Eyebrow>OUR LOCAL AREA</Eyebrow><h2 className="section-title">この土地の木と、<br />この土地の暮らしと。</h2><p className="body-copy">奥州市を拠点に、岩手県南地域を中心にお伺いします。<br className="desktop-break" />ご自宅のお庭から、地域の山林まで。<br className="desktop-break" />身近な木の相談相手として、丁寧にお手伝いします。</p><p className="area-small">記載のない近隣地域も、まずはご相談ください。</p></div>
        <div className="area-panel" data-reveal><div className="area-panel-top"><TreeIcon /><p>岩手県南を中心に<br /><strong>お伺いします。</strong></p></div><ul>{['奥州市', '一関市', '平泉町', '金ケ崎町', '住田町', '遠野市'].map(city => <li key={city}><CheckIcon />{city}</li>)}</ul><span className="area-panel-caption">ROOTED IN IWATE.</span><CedarBranch className="area-cedar" /></div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="faq section-space"><div className="wrap faq-grid"><div className="faq-heading" data-reveal><Eyebrow>QUESTIONS & ANSWERS</Eyebrow><h2 className="section-title">よくある<br className="desktop-break" />ご質問。</h2><p className="body-copy">ご相談の前に、<br />気になることを少しでも。</p><LeafIcon className="faq-leaf" /></div><div className="faq-list">{faqs.map(([question, answer], index) => <details key={question} className="faq-item" name="questions" open={index === 0}><summary><span className="faq-q">Q.</span><span>{question}</span><span className="faq-toggle" aria-hidden="true" /></summary><div className="faq-answer"><span>A.</span><p>{answer}</p></div></details>)}</div></div></section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact section-space">
      <CedarBranch className="contact-branch" /><TreeRings className="contact-rings" />
      <div className="wrap contact-inner">
        <div className="contact-heading" data-reveal><Eyebrow>LET’S TALK ABOUT YOUR TREE</Eyebrow><h2 className="section-title">気になっている、その木のこと。<br /><span>私たちに聞かせてください。</span></h2><p>木の名前や大きさが分からなくても、大丈夫。<br />まずは、今お困りのことからお話しください。</p><span className="contact-free">ご相談・現地確認・お見積り無料</span></div>
        <div className="contact-options">
          <div className="contact-phone"><p className="contact-label">お電話でのご相談</p><a href="tel:09063897137"><PhoneIcon /><span>090-6389-7137</span></a><p className="contact-hours">受付時間 7:00–18:00</p><p className="contact-hours-note">18:00〜翌7:00は電話対応をお休みしています。</p></div>
          <div className="contact-online"><a className="button button-green" href="mailto:egunenosenmonka@gmail.com"><MailIcon />メールで相談する<ArrowIcon /></a><a className="line-link" href={lineUrl} target="_blank" rel="noopener noreferrer"><span className="line-bubble" aria-hidden="true">LINE</span>LINEで相談する<ArrowIcon /></a></div>
        </div>
        <div id="line-contact" className="line-contact"><div><span className="line-bubble" aria-hidden="true">LINE</span><div><h3>写真を見ながら、ご相談も。</h3><p>QRコードから友だち追加して、<br />気になる木の写真をお送りください。</p></div></div><a href={lineUrl} target="_blank" rel="noopener noreferrer" aria-label="LINEで泰八林業を友だち追加"><img src="/assets/illustrations/qr-line.jpg" width="750" height="524" alt="泰八林業のLINE友だち追加用QRコード" loading="lazy" /></a></div>
      </div>
    </section>
  );
}


export default function TaihachiLanding() {
  return (
    <div className="site" id="top"><a href="#main" className="skip-link">本文へ移動</a><Header /><main id="main"><Hero /><About /><Services /><Works /><Process /><Area /><FAQ /><BusinessLink to="akiya" /><Contact /></main><Footer /><div className="mobile-contact"><a href="tel:09063897137"><PhoneIcon /><span>電話で相談<small>7:00–18:00</small></span></a><a href="#contact"><LeafIcon /><span>無料で相談する</span><ArrowIcon /></a></div><RevealOnScroll /></div>
  );
}
