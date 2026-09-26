import { ArrowIcon, LeafIcon } from './ForestArtwork';

export default function BusinessLink({ to }: { to: 'forestry' | 'akiya' }) {
  const isHome = to === 'akiya';
  return (
    <aside className="business-feature wrap" aria-label="泰八林業のもうひとつの事業" data-reveal>
      <a href={isHome ? '/akiya/' : '/'}>
        <div className="business-feature-image"><img src={`/assets/redesign/${isHome ? 'akiya-home' : 'hero-residential'}.webp`} alt={isHome ? '庭に囲まれた日本家屋のイメージ' : '家のそばの大きな木のイメージ'} width="1536" height="1024" loading="lazy" /></div>
        <div className="business-feature-copy"><p className="eyebrow"><span />OUR OTHER SERVICE</p><p className="business-feature-label">泰八林業の、もうひとつのお手伝い。</p><h2>{isHome ? '空き家・空き地管理' : '林業・庭木の伐採'}</h2><p>{isHome ? '月1回、ご自宅の換気・通水・点検を行います。草刈りや庭木の剪定・伐採もご相談ください。' : '庭の一本から、山林まで。大きくなりすぎた木や、倒れそうな木もご相談ください。'}</p><span className="text-link">{isHome ? '空き家管理のページへ' : '林業・伐採のページへ'}<ArrowIcon /></span></div>
        <LeafIcon className="business-feature-leaf" />
      </a>
    </aside>
  );
}
