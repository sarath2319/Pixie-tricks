import { useId } from 'react';

export default function TornDivider({ reverse = false, paperOnly = false, lowerFillColor, upperFillColor = '#EFE6DE' }) {
  const filterId = `paper-edge-${useId().replaceAll(':', '')}`;
  const edge = 'M0 36 C16 42 23 33 39 40 C54 47 60 38 77 46 C91 52 99 43 111 50 C126 58 137 48 150 55 C164 64 174 52 188 60 C199 67 211 58 224 65 C237 73 245 62 258 69 C272 77 284 66 297 74 C310 82 322 70 335 78 C346 84 357 74 371 81 C384 88 395 78 407 84 C421 90 432 78 446 83 C461 87 469 75 483 80 C496 85 509 72 522 78 C535 83 546 68 558 73 C571 78 584 65 597 70 C609 75 621 60 635 66 C648 72 658 56 670 62 C684 69 695 52 708 58 C722 65 732 49 745 55 C760 62 771 44 785 51 C797 57 810 39 822 46 C837 53 848 34 862 42 C875 50 886 31 899 39 C913 47 923 27 937 34 C951 41 960 21 974 28 C987 35 999 17 1012 25 C1026 32 1036 11 1050 19 C1062 26 1074 7 1088 15 C1102 22 1113 3 1126 11 C1140 19 1150 0 1164 8 C1177 16 1187 2 1201 10 C1215 18 1228 3 1242 12 C1254 20 1265 4 1278 13 C1290 20 1302 6 1315 15 C1329 22 1341 10 1354 20 C1367 28 1382 17 1395 27 C1411 35 1422 21 1440 27';
  const lowerFill = lowerFillColor ?? (paperOnly ? '#EFE6DE' : '#0A0A0A');
  const edgeStroke = paperOnly ? '#C9BEB4' : '#9E978F';

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 96"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute inset-x-0 top-0 z-0 h-16 w-full sm:h-20 ${reverse ? 'rotate-180' : ''}`}
    >
      <defs>
        <filter id={filterId} x="-1%" y="-20%" width="102%" height="140%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.025 0.22" numOctaves="2" seed="11" result="paperNoise" />
          <feDisplacementMap in="SourceGraphic" in2="paperNoise" scale="3" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
      <path d={`M0 36 ${edge.slice(5)} V0 H0 Z`} fill={upperFillColor} />
      <path d={`${edge} V96 H0 Z`} fill={lowerFill} />
      <path d={edge} fill="none" stroke={edgeStroke} strokeWidth="12" opacity="0.7" filter={`url(#${filterId})`} />
      <path d={edge} fill="none" stroke="#EFE6DE" strokeWidth="2" opacity="0.9" filter={`url(#${filterId})`} />
    </svg>
  );
}