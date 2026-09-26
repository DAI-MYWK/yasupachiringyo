'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowIcon, BrandMark, MailIcon, PhoneIcon } from './ForestArtwork';

const nav = [
  ['#about', '私たちのこと'], ['#service', 'できること'], ['#works', '施工事例'],
  ['#area', '対応エリア'], ['#faq', 'よくあるご質問'],
];

export function Header({ business = 'forestry' }: { business?: 'forestry' | 'akiya' }) {
  const links = business === 'akiya' ? [
    ['#about', '私たちの管理'], ['#plan', '管理プラン'], ['#options', '追加サービス'],
    ['#area', '対応エリア'], ['#faq', 'よくあるご質問'],
  ] : nav;
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const closeOnDesktop = () => { if (window.innerWidth >= 1100) dialog.current?.close(); };
    window.addEventListener('resize', closeOnDesktop);
    return () => { document.body.style.overflow = previous; window.removeEventListener('resize', closeOnDesktop); };
  }, [open]);
  const close = () => dialog.current?.close();
  return (
    <>
      <div className="site-header-shell"><header className="site-header">
        <a className="brand" href="#top" aria-label="合同会社 泰八林業 トップへ"><BrandMark /><span><small>合同会社</small><strong>泰八林業</strong></span></a>
        <nav className="desktop-nav" aria-label="メインナビゲーション">{links.map(([href, label]) => <a key={href} href={href}>{label}</a>)}</nav>
        <a className="header-contact" href="#contact" aria-label="お問い合わせ"><MailIcon /><span>お問い合わせ</span><ArrowIcon /></a>
        <button className="menu-button" type="button" aria-label="メニューを開く" aria-haspopup="dialog" aria-expanded={open} aria-controls="mobile-menu" onClick={() => { dialog.current?.showModal(); setOpen(true); }}><span /><span /><small>MENU</small></button>
      </header><nav className="business-nav" aria-label="泰八林業の2つの事業"><span>暮らしを支える、2つの事業</span><a href="/" aria-current={business === 'forestry' ? 'page' : undefined}>林業・庭木の伐採<ArrowIcon /></a><a href="/akiya/" aria-current={business === 'akiya' ? 'page' : undefined}>空き家・空き地管理<ArrowIcon /></a></nav></div>
      <dialog className="menu-dialog" id="mobile-menu" ref={dialog} onClose={() => setOpen(false)} onClick={e => { if (e.target === e.currentTarget) close(); }} aria-labelledby="menu-title">
        <div className="menu-dialog-inner"><div className="menu-heading"><p id="menu-title">泰八林業</p><button className="close-button" type="button" aria-label="メニューを閉じる" onClick={close}><span /><span /></button></div><nav aria-label="モバイルナビゲーション">{links.map(([href, label], i) => <a href={href} key={href} onClick={close}><small>0{i + 1}</small>{label}<ArrowIcon /></a>)}</nav><a className="button button-green" href="#contact" onClick={close}>{business === 'akiya' ? '空き家のことを相談する' : '無料で相談する'}<ArrowIcon /></a><a className="menu-phone" href="tel:09063897137"><PhoneIcon />090-6389-7137</a><p className="menu-hours">受付時間 7:00–18:00</p></div>
      </dialog>
    </>
  );
}

const projectPhotos = [
  { src: '/assets/photos/before-work.jpg', label: '施工前', english: 'BEFORE', alt: '道路沿いの草木・低木の整理前。草木が生い茂っている様子' },
  { src: '/assets/photos/after-work.jpg', label: '施工後', english: 'AFTER', alt: '道路沿いの草木・低木の整理後。地面と道路の境界が見える様子' },
];

export function ProjectGallery() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [open]);
  return (
    <>
      <div className="work-gallery" data-reveal>{projectPhotos.map((photo, i) => <button type="button" className="work-photo" key={photo.src} aria-label={`${photo.label}の写真を拡大する`} aria-haspopup="dialog" onClick={() => { setSelected(i); dialog.current?.showModal(); setOpen(true); }}><img src={photo.src} width="1080" height="1080" alt={photo.alt} loading="lazy" /><span className={`work-photo-label${i === 1 ? ' is-after' : ''}`}><span>{photo.english}</span>{photo.label}</span><span className="photo-expand" aria-hidden="true">＋</span></button>)}</div>
      <dialog className="photo-dialog" ref={dialog} onClose={() => setOpen(false)} onClick={e => { if (e.target === e.currentTarget) dialog.current?.close(); }} onKeyDown={e => { if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') { e.preventDefault(); setSelected(i => 1 - i); } }} aria-labelledby="photo-dialog-title"><div className="photo-dialog-inner"><div className="photo-dialog-heading"><h2 id="photo-dialog-title">草木・低木の整理 — {projectPhotos[selected].label}</h2><button type="button" className="close-button" aria-label="写真を閉じる" onClick={() => dialog.current?.close()}><span /><span /></button></div><img src={projectPhotos[selected].src} width="1080" height="1080" alt={projectPhotos[selected].alt} /><div className="photo-dialog-tabs">{projectPhotos.map((p, i) => <button type="button" key={p.src} aria-pressed={selected === i} onClick={() => setSelected(i)}>{p.label}</button>)}</div></div></dialog>
    </>
  );
}

export function RevealOnScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.remove('reveal-pending'); observer.unobserve(entry.target); } });
    }, { threshold: 0.06 });
    elements.forEach(el => { if (el.getBoundingClientRect().top > window.innerHeight) { el.classList.add('reveal-pending'); observer.observe(el); } });
    return () => { observer.disconnect(); elements.forEach(el => el.classList.remove('reveal-pending')); };
  }, []);
  return null;
}
