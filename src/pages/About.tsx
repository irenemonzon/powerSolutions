import Layout from '../components/Layout';
import CtaBanner from '../components/CtaBanner';
import { aboutValues } from '../data/products';



export default function About() {
  return (
    <Layout>
      <section className="mx-auto max-w-[900px] px-6 pt-20 pb-16 text-center md:px-14 md:pt-24">
        <div className="mb-4 font-mono text-[13px] font-medium tracking-[0.08em] text-accent uppercase">
          About Aushertech
        </div>
        <h1 className="m-0 mb-6 text-[36px] leading-[1.1] font-semibold tracking-[-0.02em] md:text-[50px]">
          Power that <span className="text-brand">critical care</span> depends on
        </h1>
        <p className="m-0 text-lg leading-[1.7] text-ink-muted">
          Aushertech was founded after our team saw firsthand how power outages put patients and medical
          equipment at risk. Today the AusherMed line of medical-grade LiFePO4 power stations supports home
          healthcare, aged care, clinics, and emergency services across Australia.
        </p>
      </section>

    

      <section className="bg-surface px-6 py-20 md:px-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="m-0 mb-12 text-center text-[26px] font-semibold tracking-[-0.01em] md:text-[30px]">
            What we value
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {aboutValues.map((v) => (
              <div
                key={v.title}
                className="rounded-[10px] border border-border bg-white p-8 transition-all duration-200 hover:-translate-y-1 hover:border-ink/30"
              >
                <div className="mb-3 text-lg font-semibold">{v.title}</div>
                <div className="text-sm leading-[1.65] text-ink-muted">{v.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Want to work with us?"
        body="Get in touch to discuss power planning for your facility or home."
      />
    </Layout>
  );
}
