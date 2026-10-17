export default function FilmTape({ className = '' }) {
  const tapePath = 'M-80 86 C170 86 240 338 510 287 S890 66 1280 300';
  const topEdge = 'M-80 41 C170 41 240 293 510 242 S890 21 1280 255';
  const bottomEdge = 'M-80 131 C170 131 240 383 510 332 S890 111 1280 345';

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 420"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute ${className}`}
    >
      <path d={tapePath} fill="none" stroke="#0A0A0A" strokeWidth="118" />
      <path d={tapePath} fill="none" stroke="#9A0002" strokeWidth="90" />
      <path d={topEdge} fill="none" stroke="#EFE6DE" strokeWidth="10" strokeDasharray="1 22" strokeLinecap="round" />
      <path d={bottomEdge} fill="none" stroke="#EFE6DE" strokeWidth="10" strokeDasharray="1 22" strokeLinecap="round" />
      <path d={tapePath} fill="none" stroke="#EFE6DE" strokeWidth="3" strokeDasharray="1 104" opacity="0.8" />
    </svg>
  );
}
