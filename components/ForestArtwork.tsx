import type { ReactNode } from 'react';

type ArtworkProps = { className?: string };

function Icon({
  className,
  children,
  viewBox = '0 0 24 24',
  strokeWidth = 1.5,
}: ArtworkProps & { children: ReactNode; viewBox?: string; strokeWidth?: number }) {
  return (
    <svg
      className={className}
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

export function ArrowIcon({ className }: ArtworkProps) {
  return (
    <Icon className={className}>
      <path d="M4 12h15M13.5 6.5 19 12l-5.5 5.5" />
    </Icon>
  );
}

export function PhoneIcon({ className }: ArtworkProps) {
  return (
    <Icon className={className}>
      <path d="m7.8 3.5 2.1 4.4c.2.4.1.8-.2 1.1l-1.8 1.6a14.6 14.6 0 0 0 5.5 5.5l1.6-1.8c.3-.3.7-.4 1.1-.2l4.4 2.1c.4.2.6.6.5 1l-.5 2.8c-.1.6-.7 1.1-1.3 1C10.6 20.6 3.4 13.4 3 4.8c-.1-.6.4-1.2 1-1.3l2.8-.5c.4-.1.8.1 1 .5Z" />
    </Icon>
  );
}

export function MailIcon({ className }: ArtworkProps) {
  return (
    <Icon className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.8 6.5 7.1 5.8a1.8 1.8 0 0 0 2.2 0l7.1-5.8" />
    </Icon>
  );
}

export function MenuIcon({ className }: ArtworkProps) {
  return (
    <Icon className={className}>
      <path d="M4 7h16M8 12h12M4 17h16" />
    </Icon>
  );
}

export function CheckIcon({ className }: ArtworkProps) {
  return (
    <Icon className={className}>
      <path d="m5 12 4.5 4.5L19 7" />
    </Icon>
  );
}

export function LeafIcon({ className }: ArtworkProps) {
  return (
    <Icon className={className} viewBox="0 0 40 40" strokeWidth={1.2}>
      <path d="M9 30C4 17 14 6 33 5c1 18-8 29-21 25M7 34 28 11M15 26l-1-9m7 3 8-1M23 17l-1-6" />
    </Icon>
  );
}

export function TreeIcon({ className }: ArtworkProps) {
  return (
    <Icon className={className} viewBox="0 0 80 80" strokeWidth={1.4}>
      <path d="M39 12c-6-3-12 1-12 6-7-2-13 3-12 9-8 2-10 12-4 17-1 7 7 13 14 10 3 6 9 7 15 3 6 4 13 2 15-3 8 2 15-4 13-11 6-6 2-14-5-16 0-7-6-11-13-9-2-6-7-9-11-6Z" />
      <path d="m37 67 1-34m5 34-1-27m-4 9-12-9m15 13 12-10M29 69c6-3 15-3 22 0M19 70h-6m49 0h5" />
      <path d="m27 41-1-8m4 11-8-1m29 2 1-8M21 25c3-5 8-5 11-3m20 7c6-2 10 1 10 5" opacity=".6" />
    </Icon>
  );
}

export function OrchardIcon({ className }: ArtworkProps) {
  return (
    <Icon className={className} viewBox="0 0 80 80" strokeWidth={1.4}>
      <path d="M27 54c-10 1-18-7-15-16-5-7-1-17 7-19 2-10 14-13 22-7 9-6 20-1 21 9 9 3 12 13 7 20 1 8-7 15-17 13M37 68V38m6 30V43M37 51 26 42m17 13 9-9M30 69h21" />
      <path d="M24 29c-5-4-10 0-8 5 1 5 5 7 8 5 3 2 7-1 8-5 1-5-4-8-8-5Zm0 0c-1-3 0-5 2-7M46 22c-2-5 0-9 6-9-1 6-3 8-6 9Z" />
      <path d="M55 34c-5-4-10 0-8 5 1 5 5 7 8 5 3 2 7-1 8-5 1-5-4-8-8-5Zm0 0c-1-3 0-5 2-7M17 68l2-5 3 5m38 1 2-4 3 4" />
    </Icon>
  );
}

export function StumpIcon({ className }: ArtworkProps) {
  return (
    <Icon className={className} viewBox="0 0 80 80" strokeWidth={1.4}>
      <path d="M21 32c1 13 1 26-9 34 8 1 13-1 17-3 5 5 15 6 22 1 6 3 12 4 18 1-10-8-11-20-10-34M21 32c0-8 38-8 38 0s-38 8-38 0Z" />
      <path d="M29 32c0-4 21-4 21 0s-21 4-21 0Zm8 0c0-1.5 6-1.5 6 0s-6 1.5-6 0ZM30 39c1 8 0 16-4 22m22-21c-1 7 0 15 4 21M39 45l-1 15M58 46l8-5 3-7-9 4" />
      <path d="M27 22c-1-8 2-14 8-18m-5 11c-6-1-8-5-7-9 6 1 8 4 7 9Zm1-4c6 0 10 2 10 6-6 1-9-1-10-6Z" />
      <path d="M7 71h12m39 0h14" opacity=".6" />
    </Icon>
  );
}

export function LogsIcon({ className }: ArtworkProps) {
  return (
    <Icon className={className} viewBox="0 0 80 80" strokeWidth={1.4}>
      <path d="m14 44 33-23c6-4 15 4 12 10M34 61l32-24c6-5 3-17-4-20-4-2-7-2-11 0L15 40M30 42l25-18" />
      <path d="M11 47c-1-9 7-13 16-7s15 20 7 24S13 60 11 47Zm7 1c-1-5 3-6 7-3s7 10 3 12-9-4-10-9Z" />
      <path d="m39 49 17-4c10-3 21 15 13 20l-24 5m-6-21c-7 2-8 10-3 16s13 7 16 2-4-20-13-18Zm1 8c-3 2-2 6 1 9s5 2 5-1-3-9-6-8Zm9-1 10-2m-5 9 9-3" />
      <path d="M9 71h16m39 0h9" opacity=".6" />
    </Icon>
  );
}

export function BrandMark({ className }: ArtworkProps) {
  return (
    <Icon className={className} viewBox="0 0 64 64" strokeWidth={1.35}>
      <path d="M48 12C34 3 13 12 9 28 3 48 20 61 36 56c15-4 23-20 16-34C49 15 42 10 35 10" />
      <path d="M44 17c-11-6-26 1-28 14-3 13 7 22 18 19 11-2 17-14 12-24-2-4-5-6-8-7" opacity=".7" />
      <path d="m21 40 11-24 11 24M26 29h12m-16 9h20M32 17v31" />
      <path d="M10 46c9-7 18-7 23-4 7-8 15-9 23-7" />
    </Icon>
  );
}

function ringPath(index: number) {
  const radius = 13 + index * 11.9;
  const points = Array.from({ length: 80 }, (_, point) => {
    const angle = (point / 80) * Math.PI * 2;
    const irregularity =
      1 +
      Math.sin(angle * 3 + index * 0.05) * 0.048 +
      Math.cos(angle * 5 - 0.9) * 0.023 +
      Math.sin(angle * 9 + index * 0.11) * 0.009;
    const x = 244 + index * 0.41 + Math.cos(angle) * radius * irregularity;
    const y = 253 - index * 0.3 + Math.sin(angle) * radius * 0.9 * irregularity;
    return `${point === 0 ? 'M' : 'L'}${x.toFixed(2)} ${y.toFixed(2)}`;
  });
  return `${points.join(' ')}Z`;
}

const rings = Array.from({ length: 19 }, (_, index) => ringPath(index));

/** A quiet, organic end-grain watermark. Set size and opacity in the layout. */
export function TreeRings({ className }: ArtworkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 520 520"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {rings.map((d, index) => (
        <path key={index} d={d} strokeWidth={index % 4 === 0 ? 1.4 : 0.8} />
      ))}
      <path d="m249 257 64 99 18 69m-11-41 17 11M246 246l-43-81-39-45-6-27" strokeWidth="1.1" />
      <path d="m73 357 32-14 15-22M403 139l-29 19-8 13" strokeWidth=".8" />
    </svg>
  );
}

type Point = [number, number];
type Twig = [Point, Point, Point];

const cedarTwigs: Twig[] = [
  [[276, 401], [217, 395], [177, 357]],
  [[263, 379], [302, 351], [310, 301]],
  [[248, 351], [191, 350], [146, 311]],
  [[235, 325], [276, 298], [283, 253]],
  [[221, 296], [165, 300], [120, 257]],
  [[211, 274], [248, 247], [255, 203]],
  [[194, 238], [146, 240], [99, 201]],
  [[182, 211], [217, 182], [219, 145]],
  [[166, 181], [120, 181], [78, 148]],
  [[153, 158], [180, 127], [177, 98]],
  [[133, 126], [95, 124], [61, 96]],
  [[115, 99], [132, 72], [124, 48]],
  [[97, 73], [72, 70], [48, 50]],
  [[85, 55], [91, 31], [79, 15]],
];

function twigPoint([start, control, end]: Twig, t: number): Point {
  const remainder = 1 - t;
  return [
    remainder * remainder * start[0] + 2 * remainder * t * control[0] + t * t * end[0],
    remainder * remainder * start[1] + 2 * remainder * t * control[1] + t * t * end[1],
  ];
}

function twigNeedles(twig: Twig, twigIndex: number) {
  const needles: string[] = [];
  const needleCount = twigIndex > 9 ? 8 : 12;
  for (let index = 1; index < needleCount; index += 1) {
    const t = index / needleCount;
    const [x, y] = twigPoint(twig, t);
    const [nextX, nextY] = twigPoint(twig, Math.min(1, t + 0.03));
    const magnitude = Math.hypot(nextX - x, nextY - y);
    const dx = (nextX - x) / magnitude;
    const dy = (nextY - y) / magnitude;
    const length = (twigIndex > 9 ? 12 : 20) * (0.66 + Math.sin(t * Math.PI) * 0.34);
    for (const side of [-1, 1]) {
      const tipX = x + dx * length * 0.78 - dy * side * length * 0.58;
      const tipY = y + dy * length * 0.78 + dx * side * length * 0.58;
      const controlX = x + dx * length * 0.58 - dy * side * length * 0.17;
      const controlY = y + dy * length * 0.58 + dx * side * length * 0.17;
      needles.push(
        `M${x.toFixed(1)} ${y.toFixed(1)}Q${controlX.toFixed(1)} ${controlY.toFixed(1)} ${tipX.toFixed(1)} ${tipY.toFixed(1)}`,
      );
    }
  }
  return needles.join(' ');
}

const cedarNeedles = cedarTwigs.map(twigNeedles).join(' ');

/** Fine botanical linework, drawn as a single evergreen bough. */
export function CedarBranch({ className }: ArtworkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 360 460"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M299 441C250 366 220 300 192 234S130 117 78 44" strokeWidth="1.65" />
      {cedarTwigs.map(([start, control, end], index) => (
        <path
          key={index}
          d={`M${start.join(' ')}Q${control.join(' ')} ${end.join(' ')}`}
          strokeWidth="1.15"
        />
      ))}
      <path d={cedarNeedles} strokeWidth=".8" />
    </svg>
  );
}

export function RidgeDivider({ className }: ArtworkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M0 48C127 65 213 73 315 62S474 19 593 27 767 71 908 51 1101 4 1220 16 1356 44 1440 31V90H0Z" />
    </svg>
  );
}
