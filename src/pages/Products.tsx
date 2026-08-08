import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { products } from '../data/products';

const heroContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const heroItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

const tableContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const rowItem = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' as const } },
};

export default function Products() {
  return (
    <Layout>
      <motion.section
        variants={heroContainer}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-6xl px-6 pt-16 pb-12 text-center md:px-14 md:pt-20 md:pb-15"
      >
        <motion.div
          variants={heroItem}
          className="mb-4 font-mono text-[13px] font-medium tracking-[0.08em] text-accent uppercase"
        >
          Product Line
        </motion.div>
        <motion.h1
          variants={heroItem}
          className="m-0 mb-4 text-[36px] leading-[1.1] font-semibold tracking-[-0.02em] md:text-[50px]"
        >
          The <span className="text-brand">AusherMed</span> series
        </motion.h1>
        <motion.p variants={heroItem} className="mx-auto max-w-[640px] text-lg leading-[1.6] text-ink-muted">
          Four models covering the full range of medical power needs — from standard patient rooms to intensive
          care and home use.
        </motion.p>
      </motion.section>

      <section className="mx-auto max-w-6xl overflow-x-auto px-6 pb-20 md:px-14">
        <table className="w-full min-w-[640px] border-collapse overflow-hidden rounded-[10px] border border-border bg-white">
          <thead>
            <tr className="bg-surface">
              <th className="border-b-2 border-brand/30 px-5 py-4 text-left font-mono text-xs tracking-[0.05em] text-ink-muted uppercase">
                Model
              </th>
              <th className="border-b-2 border-brand/30 px-5 py-4 text-left font-mono text-xs tracking-[0.05em] text-ink-muted uppercase">
                Capacity
              </th>
              <th className="border-b-2 border-brand/30 px-5 py-4 text-left font-mono text-xs tracking-[0.05em] text-ink-muted uppercase">
                Type
              </th>
              <th className="border-b-2 border-brand/30 px-5 py-4 text-left font-mono text-xs tracking-[0.05em] text-ink-muted uppercase">
                Recommended Setting
              </th>
            </tr>
          </thead>
          <motion.tbody
            variants={tableContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {products.map((p) => (
              <motion.tr
                key={p.id}
                variants={rowItem}
                className="border-b border-border transition-colors hover:bg-surface"
              >
                <td className="px-5 py-[18px] text-[15px] font-semibold">
                  <a href={p.anchor} className="text-ink transition-colors hover:text-brand">
                    {p.name}
                  </a>
                </td>
                <td className="px-5 py-[18px] font-mono text-sm text-ink-muted">{p.output}</td>
                <td className="px-5 py-[18px] text-sm text-ink-muted">{p.battery}</td>
                <td className="px-5 py-[18px] text-sm text-ink-muted">{p.setting}</td>
              </motion.tr>
            ))}
          </motion.tbody>
        </table>
      </section>

      {products.map((p) => (
        <section
          key={p.id}
          id={p.id}
          className={`border-t border-border px-6 py-20 md:px-14 ${p.bg === 'surface' ? 'bg-surface' : 'bg-page'} scroll-mt-20`}
        >
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: p.imageOrder === 1 ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: 'easeOut' as const }}
              className={`flex aspect-4/3 w-full items-center justify-center overflow-hidden rounded-[10px] border border-border bg-surface ${
                p.imageOrder === 1 ? 'lg:order-1' : 'lg:order-0'
              }`}
            >
              <img src={p.image} alt={p.name} className="h-[88%] w-[88%] object-contain" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: p.imageOrder === 1 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: 'easeOut' as const, delay: 0.1 }}
            >
              <div className="mb-2.5 font-mono text-xs font-medium tracking-[0.06em] text-accent">
                {p.output} · {p.battery}
              </div>
              <h2 className="m-0 mb-4 text-[28px] font-semibold tracking-[-0.01em] md:text-[32px]">{p.name}</h2>
              <p className="m-0 mb-7 text-base leading-[1.65] text-ink-muted">{p.description}</p>
              <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {p.specs.map((s) => (
                  <div key={s.label} className="border-t border-border pt-2.5">
                    <div className="mb-1 text-xs tracking-[0.04em] text-ink-muted uppercase">{s.label}</div>
                    <div className="text-[15px] font-semibold">{s.value}</div>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-block rounded-md bg-brand px-6 py-[13px] text-[15px] font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Contact Sales
              </Link>
            </motion.div>
          </div>
        </section>
      ))}
    </Layout>
  );
}
