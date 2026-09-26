import { ArrowIcon, CedarBranch, CheckIcon, LeafIcon, MailIcon, PhoneIcon, TreeIcon, TreeRings } from './ForestArtwork';
import { CareIcon, HomeLandscape } from './HomeArtwork';
import { Header, RevealOnScroll } from './SiteInteractions';
import Footer from './SiteFooter';
import BusinessLink from './BusinessLink';

const checks = [
  { kind: 'visit' as const, title: '月1回の巡回点検', text: '定期的に現地を訪問' },
  { kind: 'home' as const, title: '建物外観の確認', text: '外まわりの状態を確認' },
  { kind: 'mail' as const, title: '郵便物の確認', text: 'ポストの状況を確認' },
  { kind: 'air' as const, title: '室内の換気', text: '窓を開けて空気を入れ替え' },
  { kind: 'water' as const, title: '通水作業', text: '水漏れ・排水の状態を確認' },
  { kind: 'lock' as const, title: '施錠の確認', text: '作業後の戸締まりを確認' },
  { kind: 'report' as const, title: '写真付き報告書', text: '点検・作業の結果をご報告' },
];
const prices = [
  { title: '草刈り・除草', english: 'GRASS & WEEDS', rows: [['100㎡まで', '11,000円～'], ['100～300㎡', '22,000円～'], ['300～500㎡', '33,000円～'], ['500～1,000㎡', '55,000円～']], note: '面積・状況によりお見積りいたします。' },
  { title: '樹木剪定', english: 'TREE PRUNING', rows: [['低木（3m未満）', '5,500円～'], ['中木（3～5m）', '11,000円～']], note: '庭木の大きさや状態をお聞かせください。' },
  { title: '危険木・支障木伐採', english: 'TREE REMOVAL', rows: [['小径木', '11,000円～'], ['中径木', '22,000円～'], ['大径木', '55,000円～']], note: '現地確認後にお見積りいたします。' },
  { title: '清掃作業', english: 'PROPERTY CLEANING', rows: [['敷地内清掃', '5,500円～'], ['建物周辺清掃', '11,000円～'], ['家財整理・処分', '別途お見積り']], note: '作業範囲・内容をご相談ください。' },
];
const concerns = ['県外に住んでいて、実家を管理できない', '相続した空き家を、きちんと管理したい', '草木が伸びて、近隣への影響が気になる', '熊や獣害への対策を考えている', '将来の売却・解体まで、家を維持したい'];
const flow = [
  ['まずはご相談', '建物や敷地の場所、今お困りのことをお聞かせください。'],
  ['現地確認・お見積り', '建物・敷地の状況に合わせて、管理内容と費用をご案内します。'],
  ['管理内容のご確認', '巡回や追加作業の範囲、室内作業に必要な鍵などを事前に確認します。'],
  ['定期管理・ご報告', '月1回の巡回点検を行い、写真付き報告書で様子をお伝えします。'],
];
const faqs = [
  ['遠方に住んでいても、相談できますか？', 'はい。遠方にお住まいの方や、現地での管理が難しい方のためのサービスです。電話・メール・LINEから、物件の場所や状況をお知らせください。'],
  ['空き家まるごと管理プランの料金は？', '建物・敷地の状況とご希望の管理内容を確認し、個別にお見積りいたします。草刈りや剪定などの追加作業は、オプション料金もご参照ください。'],
  ['空き地や、庭の草木も管理できますか？', '空き地管理にも対応しています。草刈り・除草、樹木剪定に加え、危険木・支障木の伐採や防風林の管理などもご相談いただけます。'],
  ['台風や大雪のあとも、見てもらえますか？', '台風や大雪後の緊急点検にも対応しています。通常の巡回とは別に、点検の内容や訪問時期、費用についてご相談ください。'],
];

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`eyebrow${light ? ' eyebrow-light' : ''}`}><span />{children}</p>;
}

export default function VacantPropertyLanding() {
  return (
    <div className="site homecare-site" id="top">
      <a className="skip-link" href="#main">本文へ移動</a><Header business="akiya" />
      <main id="main">
        <section className="care-hero" aria-labelledby="care-heading">
          <div className="care-hero-copy">
            <p className="care-service-name">泰八林業<span />空き家・空き地管理サービス</p>
            <h1 id="care-heading">家の手入れ、<br />代わりにします</h1>
            <p className="care-hero-lead">月1回、ご自宅を訪問して、<br />換気・通水・点検を行います。</p>
            <p className="care-hero-description">管理が難しい空き家・空き地をご相談ください。<br />草刈りや庭木の剪定・伐採にも対応します。</p>
            <a className="button button-green" href="#contact">空き家のことを相談する<ArrowIcon /></a>
            <p className="care-hero-area"><span />岩手県奥州市を中心に、県南地域に対応</p>
          </div>
          <figure className="care-hero-visual"><img src="/assets/redesign/akiya-home.webp" width="1536" height="1024" alt="木々と手入れされた庭に囲まれた日本家屋のイメージ" fetchPriority="high" /><figcaption>月1回、家の状態を確認します。</figcaption><span className="care-photo-note">イメージ写真</span></figure>
          <HomeLandscape className="care-hero-drawing" />
        </section>
        <div className="care-promise wrap"><p><span>01</span>月1回の定期巡回</p><p><span>02</span>写真付きでご報告</p><p><span>03</span>草刈り・剪定・伐採にも対応</p></div>

        <section className="care-about section-space" id="about">
          <div className="wrap care-about-grid">
            <figure className="care-about-photo" data-reveal><img src="/assets/redesign/akiya-ventilation.webp" width="1000" height="1250" alt="開いた窓から風と光が入る、静かな和室のイメージ" loading="lazy" /><figcaption>REGULAR HOME MAINTENANCE</figcaption><CedarBranch /></figure>
            <div className="care-about-copy" data-reveal><Eyebrow>CARE FOR YOUR HOME</Eyebrow><h2 className="section-title">ご実家や空き家を、<br />定期的に管理します。</h2><p className="body-copy">遠方にお住まいの方や、ご自身での管理が難しい方に代わり、建物と敷地の状態を確認します。点検・作業の結果は、写真付きの報告書でお伝えします。</p><p className="body-copy">草刈り・剪定・伐採などの追加作業も承ります。相続した空き家や、売却・解体を検討中の物件もご相談ください。</p><ul className="care-concerns">{concerns.map(text => <li key={text}><CheckIcon />{text}</li>)}</ul></div>
          </div>
        </section>

        <section className="care-plan section-space" id="plan">
          <TreeRings className="care-plan-rings" />
          <div className="wrap">
            <div className="section-heading-row" data-reveal><div><Eyebrow>MONTHLY HOME CARE</Eyebrow><h2 className="section-title">月1回、訪問して<br />換気・通水・点検。</h2></div><p className="section-intro">建物の外観確認から、室内の換気、作業後の施錠まで。<br />プランに含まれる7つの項目をご紹介します。</p></div>
            <div className="care-plan-panel" data-reveal>
              <div className="care-plan-heading"><CareIcon kind="home" /><p>空き家まるごと</p><h3>管理プラン</h3><div className="care-frequency">月<span>1</span>回の巡回</div><p className="care-plan-price">料金は個別にお見積り</p><p className="care-plan-price-note">建物・敷地の状況や<br />ご希望を伺ってご案内します。</p><a href="#contact">プランを相談する<ArrowIcon /></a></div>
              <ol className="care-checks">{checks.map(({ kind, title, text }, i) => <li key={kind}><span className="care-check-number">0{i + 1}</span><CareIcon kind={kind} /><h4>{title}</h4><p>{text}</p></li>)}</ol>
            </div>
            <div className="care-detail-grid">
              <article data-reveal><div><CareIcon kind="air" /><h3>窓を開け、空気を入れ替える。</h3></div><p className="care-detail-label">室内換気で行うこと</p><ul>{['窓や玄関の開放・室内空気の入れ替え', '押入れや収納の換気', 'カビや異臭の確認'].map(x => <li key={x}><CheckIcon />{x}</li>)}</ul></article>
              <article data-reveal><div><CareIcon kind="water" /><h3>水を流し、水漏れを確認する。</h3></div><p className="care-detail-label">通水作業で行うこと</p><ul>{['台所・洗面所・浴室の通水', '水漏れの確認', '排水状況の確認'].map(x => <li key={x}><CheckIcon />{x}</li>)}</ul></article>
            </div>
          </div>
        </section>

        <section className="care-options section-space" id="options"><div className="wrap">
          <div className="section-heading-row" data-reveal><div><Eyebrow>OPTIONAL SERVICES</Eyebrow><h2 className="section-title">草刈り・剪定・伐採・清掃の<br />作業内容と料金。</h2></div><p className="section-intro">月1回の管理プランとは別に承る追加作業です。<br />作業範囲と現地の状況を確認してお見積りします。</p></div>
          <div className="care-price-grid">{prices.map(({ title, english, rows, note }, i) => <article className="care-price-card" key={title} data-reveal><div className="care-price-heading"><span>0{i + 1}</span><div><p>{english}</p><h3>{title}</h3></div>{i < 2 ? <LeafIcon /> : i === 2 ? <TreeIcon /> : <CareIcon kind="home" />}</div><table><caption className="sr-only">{title}の料金目安</caption><thead className="sr-only"><tr><th scope="col">作業内容</th><th scope="col">料金目安</th></tr></thead><tbody>{rows.map(([label, price]) => <tr key={label}><th scope="row">{label}</th><td>{price}</td></tr>)}</tbody></table><p className="care-price-note">{note}</p></article>)}</div>
          <p className="care-price-disclaimer">掲載料金は目安です。作業範囲・現地の状況を確認のうえ、正式なお見積りをご案内します。</p>
        </div></section>

        <section className="care-forestry section-space" id="strength"><TreeRings className="care-forestry-rings" /><div className="wrap care-forestry-grid"><div className="care-forestry-copy" data-reveal><Eyebrow light>OUR FORESTRY EXPERTISE</Eyebrow><h2 className="section-title">危険な木の伐採や、<br />藪刈りにも対応します。</h2><p>建物にかかる枝や倒れそうな木の伐採、<br />風で倒れた木の処理、熊対策のための藪刈りなど。<br />林業会社として、敷地や周辺の樹木も管理します。</p><ul>{['危険木・支障木の伐採', '防風林の管理', '風倒木の処理', '熊対策のための藪刈り', '空き地の管理', '台風・大雪後の緊急点検', '森林・山林の維持管理'].map(x => <li key={x}><CheckIcon />{x}</li>)}</ul></div><figure className="care-forestry-photo" data-reveal><img src="/assets/redesign/garden-care.webp" width="1000" height="667" alt="住まいと木々が寄り添う里山の庭のイメージ" loading="lazy" /><figcaption><LeafIcon />空き家管理から、危険木伐採まで。</figcaption></figure></div></section>

        <section className="care-flow section-space" id="flow"><div className="wrap"><div className="section-heading-row" data-reveal><div><Eyebrow>GETTING STARTED</Eyebrow><h2 className="section-title">ご相談から<br />定期管理までの流れ。</h2></div><p className="section-intro">所在地と、管理をお願いしたい内容をお知らせください。<br />現地を確認し、作業内容と費用をご案内します。</p></div><ol className="care-flow-list">{flow.map(([title, text], i) => <li key={title} data-reveal><div><span>0{i + 1}</span>{i < 3 && <ArrowIcon />}</div><h3>{title}</h3><p>{text}</p></li>)}</ol>
          <div className="care-area" id="area" data-reveal><div><Eyebrow>OUR LOCAL AREA</Eyebrow><h2>岩手県奥州市を中心に、<br />県南地域へ。</h2><p>空き家・空き地の所在地をお知らせください。<br />訪問できる地域や管理内容をご案内します。</p></div><div className="care-area-drawing"><HomeLandscape /><p>奥州市を拠点に、現地へ伺います。</p></div></div>
        </div></section>

        <section className="faq section-space" id="faq"><div className="wrap faq-grid"><div className="faq-heading" data-reveal><Eyebrow>QUESTIONS & ANSWERS</Eyebrow><h2 className="section-title">管理内容についての<br />よくあるご質問。</h2><LeafIcon className="faq-leaf" /></div><div className="faq-list">{faqs.map(([q, a], i) => <details key={q} className="faq-item" name="care-questions" open={i === 0}><summary><span className="faq-q">Q.</span><span>{q}</span><span className="faq-toggle" aria-hidden="true" /></summary><div className="faq-answer"><span>A.</span><p>{a}</p></div></details>)}</div></div></section>
        <BusinessLink to="forestry" />
        <section id="contact" className="contact section-space care-contact"><CedarBranch className="contact-branch" /><TreeRings className="contact-rings" /><div className="wrap contact-inner"><div className="contact-heading" data-reveal><Eyebrow>LET’S TALK ABOUT YOUR HOME</Eyebrow><h2 className="section-title">空き家・空き地の管理を<br /><span>電話・メール・LINEでご相談。</span></h2><p>定期的な点検や換気、敷地の草刈りなど、<br />ご希望の作業と、現在の状況をお知らせください。</p></div><div className="contact-options"><div className="contact-phone"><p className="contact-label">お電話でのご相談</p><a href="tel:09063897137"><PhoneIcon /><span>090-6389-7137</span></a><p className="contact-hours">受付時間 7:00–18:00</p><p className="contact-hours-note">18:00〜翌7:00は電話対応をお休みしています。</p></div><div className="contact-online"><a className="button button-green" href="mailto:egunenosenmonka@gmail.com?subject=%E7%A9%BA%E3%81%8D%E5%AE%B6%E3%83%BB%E7%A9%BA%E3%81%8D%E5%9C%B0%E7%AE%A1%E7%90%86%E3%81%AE%E7%9B%B8%E8%AB%87"><MailIcon />メールで相談する<ArrowIcon /></a><a className="line-link" href="https://line.me/ti/p/ugEYvphpWd" target="_blank" rel="noopener noreferrer"><span className="line-bubble" aria-hidden="true">LINE</span>LINEで相談する<ArrowIcon /></a></div></div><div className="care-contact-hint"><CareIcon kind="report" /><p>ご相談の際は、<strong>物件の所在地・お困りのこと</strong>をお知らせください。<br />写真があれば、LINEやメールでお送りいただけます。</p></div></div></section>
      </main>
      <Footer business="akiya" /><div className="mobile-contact"><a href="tel:09063897137"><PhoneIcon /><span>電話で相談<small>7:00–18:00</small></span></a><a href="#contact"><CareIcon kind="home" /><span>空き家の相談</span><ArrowIcon /></a></div><RevealOnScroll />
    </div>
  );
}
