interface ContinuityWaveformProps {
  variant?: 'ambient' | 'annotated';
  className?: string;
}

const LIVE_PATH =
  'M0,120 C50,60 100,60 150,120 C200,180 250,180 300,120 C350,60 400,60 450,120 C500,180 550,180 600,120 C650,60 700,60 750,120 C800,180 850,180 900,120 C950,60 1000,60 1050,120 C1100,180 1150,180 1200,120';

const GHOST_PATH =
  'M0,120 C50,60 100,60 150,120 C200,180 250,180 300,120 C350,60 400,60 450,120 C500,180 550,180 600,120 L636,152 L1200,152';

export default function ContinuityWaveform({ variant = 'ambient', className = '' }: ContinuityWaveformProps) {
  const annotated = variant === 'annotated';

  return (
    <svg
      viewBox="0 0 1200 240"
      preserveAspectRatio="none"
      className={className}
      role="img"
      aria-label="Diagram of a continuous power trace passing through a grid outage without interruption, while an unprotected line flatlines at the outage."
    >
      {/* graticule */}
      <g stroke="var(--color-panel-line)" strokeWidth="1" opacity={annotated ? 0.5 : 0.3}>
        {[0, 40, 80, 120, 160, 200].map((y) => (
          <line key={y} x1="0" y1={y} x2="1200" y2={y} />
        ))}
        {Array.from({ length: 13 }).map((_, i) => (
          <line key={i} x1={i * 100} y1="0" x2={i * 100} y2="240" />
        ))}
      </g>

      {annotated && (
        <>
          <line x1="600" y1="0" x2="600" y2="240" stroke="oklch(62% 0.18 25)" strokeWidth="1.5" strokeDasharray="5 5" />
          <circle cx="600" cy="16" r="3" fill="oklch(62% 0.18 25)" />
          <text x="612" y="20" fontFamily="var(--font-mono)" fontSize="12" letterSpacing="0.06em" fill="oklch(62% 0.18 25)">
            GRID OUTAGE
          </text>
        </>
      )}

      {/* ghost / unprotected line */}
      <path
        d={GHOST_PATH}
        fill="none"
        stroke="var(--color-panel-ink-muted)"
        strokeOpacity={annotated ? 0.55 : 0.3}
        strokeWidth="2"
        strokeDasharray="3 5"
      />

      {/* live AusherMed trace */}
      <path
        d={LIVE_PATH}
        fill="none"
        stroke="var(--color-brand-vivid)"
        strokeWidth={annotated ? 3 : 2}
        strokeLinecap="round"
        strokeOpacity={annotated ? 1 : 0.6}
        className="motion-safe:animate-[dash-flow_9s_linear_infinite]"
        pathLength={1200}
        strokeDasharray="18 14"
      />

      {annotated && (
        <>
          <line x1="760" y1="66" x2="700" y2="120" stroke="var(--color-panel-ink-muted)" strokeWidth="1" />
          <text
            x="764"
            y="62"
            fontFamily="var(--font-mono)"
            fontSize="13"
            letterSpacing="0.04em"
            fill="var(--color-panel-ink)"
          >
            0.0ms interruption
          </text>
        </>
      )}
    </svg>
  );
}
