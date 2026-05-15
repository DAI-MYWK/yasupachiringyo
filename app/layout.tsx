import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '合同会社 泰八林業 | 岩手県南の山林管理・伐採',
  description: '岩手県南地域で山林の管理・伐採、果樹木の伐採、危険木の撤去、薪用の切り分けまで対応する泰八林業のランディングページです。'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
