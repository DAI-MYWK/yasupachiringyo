import { ArrowIcon, BrandMark } from './ForestArtwork';

export default function Footer({ business = 'forestry' }: { business?: 'forestry' | 'akiya' }) {
  return (
    <footer className="site-footer" id="company"><div className="wrap"><div className="footer-top"><div><a href="#top" className="brand footer-brand" aria-label="泰八林業 トップへ"><BrandMark /><span><small>合同会社</small><strong>泰八林業</strong></span></a><p className="footer-address">岩手県奥州市胆沢小山字上中沢168番地<br />代表　菅原 竜太</p><a className="footer-email" href="mailto:egunenosenmonka@gmail.com">egunenosenmonka@gmail.com</a></div><div className="footer-right"><nav aria-label="フッターナビゲーション"><a href="#about">{business === 'akiya' ? '私たちの管理' : '私たちのこと'}</a><a href={business === 'akiya' ? '#plan' : '#service'}>{business === 'akiya' ? '管理プラン' : 'できること'}</a><a href={business === 'akiya' ? '#options' : '#works'}>{business === 'akiya' ? '追加サービス' : '施工事例'}</a><a href="#area">対応エリア</a><a href="#faq">よくあるご質問</a><a href="#contact">お問い合わせ</a></nav><a className="instagram-link" href="https://www.instagram.com/egunenosenmonka/" target="_blank" rel="noopener noreferrer">Instagram<ArrowIcon /></a></div></div><nav className="footer-businesses" aria-label="2つの事業"><span>泰八林業の事業</span><a href="/" aria-current={business === 'forestry' ? 'page' : undefined}>林業・庭木の伐採<ArrowIcon /></a><a href="/akiya/" aria-current={business === 'akiya' ? 'page' : undefined}>空き家・空き地管理<ArrowIcon /></a></nav><div className="footer-bottom"><p>© {new Date().getFullYear()} 合同会社 泰八林業</p><a href="#top">ページの先頭へ<ArrowIcon /></a></div></div></footer>
  );
}

