export default function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex h-9 w-9 items-center justify-center rounded-[9px] bg-linear-155 from-brand-vivid to-brand-dark shadow-[0_1px_2px_oklch(46%_0.15_48/0.35)] transition-transform duration-200 group-hover:scale-105">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="white">
          <path d="M13 1 4 14h7l-1 9 10-14h-7l1-8z" />
        </svg>
      </div>
      <span className="font-display text-[19px] font-semibold tracking-[-0.01em] text-ink">Aushertech</span>
    </div>
  );
}
