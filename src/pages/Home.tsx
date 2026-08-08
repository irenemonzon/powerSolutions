import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import CtaBanner from '../components/CtaBanner';
import ContinuityWaveform from '../components/ContinuityWaveform';
import { companyValues, products } from '../data/products';

const featureIcons = [
  <g key="handshake">
    <path d="m11 17 2 2a1 1 0 1 0 3-3" />
    <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
    <path d="m21 3 1 11h-2" />
    <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
    <path d="M3 4h8" />
  </g>,
  <path key="shield" d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" />,
  <g key="bulb">
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5A6 6 0 1 0 6.5 11.5c.8.8 1.3 1.5 1.5 2.5" />
    <path d="M9 18h6" />
    <path d="M10 22h4" />
  </g>,
  <g key="scalable">
    <path d="M4 13a8 8 0 0 1 13.5-6.2" />
    <path d="M18 3.5V8h-4.5" />
    <path d="M13 7 8 13h3l-.5 4 5-6h-3l.5-4z" />
  </g>,
];

const heroUnit = products[2];

export default function Home() {
  return (
    <Layout>
      
      <section className="bg-panel">
        <div className="relative overflow-hidden">
          <ContinuityWaveform
            variant="ambient"
            className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.18]"
          />
          <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 pt-24 pb-16 md:px-14 md:pt-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-panel-line px-3 py-1.5 font-mono text-xs tracking-[0.08em] text-panel-ink-muted uppercase">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-vivid opacity-75 motion-reduce:hidden" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-vivid" />
              </span>
              Medical Power Solutions
            </div>
            <h1 className="m-0 mb-6 text-[44px] leading-[1.06] font-semibold tracking-[-0.02em] text-panel-ink md:text-[60px]">
              Reliable power.
              <br />
              <span className="text-brand-vivid">Every second counts.</span>
            </h1>
            <p className="m-0 mb-9 max-w-[520px] text-lg leading-[1.6] text-panel-ink-muted md:text-[19px]">
              Aushertech designs medical-grade power solutions that keep essential medical equipment running,
              without interruption, in hospitals and at home.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="rounded-md bg-brand-vivid px-7 py-[15px] text-base font-semibold text-panel transition-colors hover:bg-brand-light"
              >
                Contact Sales
              </Link>
              <Link
                to="/products"
                className="rounded-md border border-panel-line px-7 py-[15px] text-base font-semibold text-panel-ink transition-colors hover:border-panel-ink hover:bg-panel-soft"
              >
                View Product Line
              </Link>
            </div>
          </div>

          <div className="rounded-xl border border-panel-line bg-panel-soft p-5">
            <div className="flex aspect-4/3 w-full items-center justify-center overflow-hidden rounded-lg bg-page ring-1 ring-brand-vivid/15">
              <img src={heroUnit.image} alt={heroUnit.name} className="h-[82%] w-[82%] object-contain" />
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-panel-line pt-4 font-mono text-[11px] tracking-[0.05em] text-panel-ink-muted uppercase">
              <span>{heroUnit.name}</span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-vivid" />
                Switchover &lt;10ms
              </span>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Product line */}
      <section className="bg-surface px-6 py-20 md:px-14">
        <div className="mx-auto max-w-6xl">
          <div className="mb-11 flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="m-0 text-[28px] font-semibold tracking-[-0.01em] md:text-[32px]">The AusherMed line</h2>
            <Link to="/products" className="group text-[15px] font-semibold">
              Compare all models
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <Link
                key={p.id}
                to={`/products${p.anchor}`}
                className="group block rounded-[10px] border border-border bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand hover:shadow-lg"
              >
                <div className="mb-5 flex aspect-square w-full items-center justify-center overflow-hidden rounded-lg bg-surface">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-[94%] w-[94%] object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mb-1.5 font-mono text-xs font-medium tracking-[0.04em] text-accent">
                  {p.output}
                </div>
                <div className="mb-2 text-lg font-semibold text-ink md:text-[19px]">{p.name}</div>
                <div className="text-sm leading-[1.5] text-ink-muted">{p.tagline}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:px-14">
        <h2 className="m-0 mb-3 text-center text-[28px] font-semibold tracking-[-0.01em] md:text-[32px]">
          Why hospitals and families choose Aushertech
        </h2>
        <p className="mx-auto mb-14 max-w-[600px] text-center text-[17px] text-ink-muted">
          Power infrastructure engineered to medical-grade standards, wherever care happens.
        </p>
        <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {companyValues.map((value, i) => (
            <div
              key={value.title}
              className="group rounded-2xl border border-border bg-white p-8 transition-all duration-200 hover:-translate-y-1 hover:border-ink/30"
            >
              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-[10px] bg-surface text-ink transition-transform duration-200 group-hover:scale-110">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {featureIcons[i]}
                </svg>
              </div>
              <div className="mb-3 text-lg font-semibold text-ink">{value.title}</div>
              <div className="text-sm leading-[1.6] text-ink-muted">{value.body}</div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner
        heading="Ready to specify power for your facility?"
        body="Talk to our team about the right AusherMed model for your setting."
      />
    </Layout>
  );
}
