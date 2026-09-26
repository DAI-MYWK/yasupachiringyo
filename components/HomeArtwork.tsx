type Props = { className?: string };
type Kind = 'home' | 'mail' | 'air' | 'water' | 'lock' | 'report' | 'visit';

export function CareIcon({ kind, className }: Props & { kind: Kind }) {
  const shapes = {
    home: <><path d="m8 29 24-18 24 18M14 25v30h36V25M27 55V38h10v17M22 18v-7h8" /><path d="M42 34h1M20 34h1" /></>,
    visit: <><path d="M18 15h28v41H18zM26 15v-5h12v5M24 27l3 3 6-7M24 41l3 3 6-7M38 27h3M38 41h3" /></>,
    mail: <><path d="M10 22h44v30H10zM10 22l22 17 22-17M20 14h24M24 8h16" /></>,
    air: <><path d="M12 35h28c12 0 12-16 4-16-5 0-7 4-5 7M8 43h27c11 0 11 13 4 13-4 0-6-3-4-6M16 27h9c9 0 9-16 1-16" /></>,
    water: <><path d="M32 9S15 29 15 39a17 17 0 0 0 34 0C49 29 32 9 32 9Z" /><path d="M23 39c0 6 4 10 9 10" /></>,
    lock: <><rect x="15" y="29" width="34" height="26" rx="3" /><path d="M22 29V19a10 10 0 0 1 20 0v10M32 39v6" /></>,
    report: <><path d="M15 9h25l9 9v38H15zM40 9v11h9M23 45l7-7 6 5 5-5M23 28h13" /><circle cx="25" cy="35" r="1" /></>,
  };
  return <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{shapes[kind]}</svg>;
}

export function HomeLandscape({ className }: Props) {
  return <svg className={className} viewBox="0 0 620 190" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M8 167c77-7 115 6 172 0s129 4 169 0 138-3 258 0M172 166V84l102-60 113 62v80M153 88l121-76 133 76M172 100h215M207 166v-49h55v49M288 119h63v26h-63zM318 120v25M234 119v46M193 74l83-49M362 61V36h13v32" /><path d="M83 163V89m-24 37 24 14 25-23M76 97c-49 8-48-53-17-56-9-31 43-47 57-15 29-4 39 46 11 58 3 25-36 39-51 13ZM487 164V84m-27 33 27 14 29-22M486 31l-39 65h21l-31 46h99l-30-46h19ZM564 165v-35m-17 13 17 12 13-16M541 127c-9-37 46-41 46-10 19 27-34 41-46 10Z" /><path d="M252 166l-16 21M267 166l13 21M117 166l8-14 8 14M415 165l9-15 6 16M27 162l6-11 4 11" /></svg>;
}
