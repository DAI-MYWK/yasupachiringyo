import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://yasupachiringyo.jp'),
  title: '泰八林業｜岩手県南の庭木・危険木の伐採、山林管理',
  description: 'この木、どうしたらいいだろう。お庭や敷地の大きな木、危険木の伐採から後片付けまで、岩手県奥州市の泰八林業にご相談ください。一関市・平泉町など岩手県南に対応。現地確認・お見積り無料。',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: '合同会社 泰八林業',
    title: 'この木、どうしたらいいだろう。｜泰八林業',
    description: '庭の一本から。伐採から後片付けまで、岩手県南の身近な林業会社にご相談ください。',
    images: [{ url: '/assets/redesign/hero-residential.jpg', width: 1672, height: 941, alt: '家のそばに立つ大きな木と里山の庭' }],
  },
  twitter: { card: 'summary_large_image' },
};

export const viewport: Viewport = { themeColor: '#253f32' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
