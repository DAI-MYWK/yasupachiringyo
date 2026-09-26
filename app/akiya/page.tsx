import type { Metadata } from 'next';
import './akiya.css';
import VacantPropertyLanding from '../../components/VacantPropertyLanding';

export const metadata: Metadata = {
  title: '空き家・空き地管理｜奥州市・岩手県南の泰八林業',
  description: '家の手入れ、代わりにします。岩手県奥州市を中心に空き家・空き地を定期管理。月1回の巡回、換気・通水、写真付き報告に加え、草刈りや危険木伐採、熊対策の環境整備まで泰八林業にご相談ください。',
  alternates: { canonical: '/akiya/' },
  openGraph: {
    type: 'website', locale: 'ja_JP', siteName: '合同会社 泰八林業', url: '/akiya/',
    title: '家の手入れ、代わりにします。｜泰八林業 空き家・空き地管理',
    description: '月1回の訪問で換気・通水・点検を行い、写真付きでご報告します。草刈り・剪定・危険木伐採にも対応。奥州市を中心に岩手県南地域へ伺います。',
    images: [{ url: '/assets/redesign/akiya-home.jpg', width: 1536, height: 1024, alt: '手入れされた庭と日本家屋のイメージ' }],
  },
  twitter: { card: 'summary_large_image', title: '泰八林業 空き家・空き地管理', images: ['/assets/redesign/akiya-home.jpg'] },
};

export default function Page() { return <VacantPropertyLanding />; }
