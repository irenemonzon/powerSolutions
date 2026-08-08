import { useState } from 'react';
import Layout from '../components/Layout';
import { products } from '../data/products';

interface ContactForm {
  name: string;
  company: string;
  email: string;
  phone: string;
  model: string;
  message: string;
}

const initialForm: ContactForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  model: '',
  message: '',
};

const inputClass =
  'rounded-md border border-border px-3.5 py-3 text-[15px] transition-colors focus:border-brand focus:outline-none';

export default function Contact() {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof ContactForm) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 md:px-14 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <div className="mb-4 font-mono text-[13px] font-medium tracking-[0.08em] text-accent uppercase">
            Contact Sales
          </div>
          <h1 className="m-0 mb-5 text-[34px] leading-[1.1] font-semibold tracking-[-0.02em] md:text-[46px]">
            Let's talk about your <span className="text-brand">power needs</span>
          </h1>
          <p className="m-0 mb-11 text-base leading-[1.65] text-ink-muted md:text-[17px]">
            Whether you're specifying power for a hospital ward or a home care setting, our team can help
            identify the right AusherMed model.
          </p>

          <div className="flex flex-col gap-6">
            <a href="tel:+61404597813" className="group flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand/10 transition-transform duration-200 group-hover:scale-110">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 5c0-.6.4-1 1-1h3l2 5-2 1.5a11 11 0 0 0 5 5L14.5 14l5 2v3c0 .6-.4 1-1 1C10.5 20 4 13.5 4 5z" />
                </svg>
              </div>
              <div>
                <div className="mb-1 text-[13px] tracking-[0.04em] text-ink-muted uppercase">Phone</div>
                <div className="text-base font-semibold text-ink transition-colors group-hover:text-brand">
                  +61 404 597 813
                </div>
              </div>
            </a>
            <a href="mailto:info@aushertech.com.au" className="group flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand/10 transition-transform duration-200 group-hover:scale-110">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              </div>
              <div>
                <div className="mb-1 text-[13px] tracking-[0.04em] text-ink-muted uppercase">Email</div>
                <div className="text-base font-semibold text-ink transition-colors group-hover:text-brand">
                  info@aushertech.com.au
                </div>
              </div>
            </a>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand/10">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s-7-6.5-7-11.5a7 7 0 0 1 14 0C19 14.5 12 21 12 21z" />
                  <circle cx="12" cy="9.5" r="2.4" />
                </svg>
              </div>
              <div>
                <div className="mb-1 text-[13px] tracking-[0.04em] text-ink-muted uppercase">Office</div>
                <div className="text-base font-semibold">
                  451 Nepean Highway
                  <br />
                  Brighton East, VIC 3187, Australia
                </div>
              </div>
            </div>
          </div>
        </div>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 rounded-xl border border-border bg-white p-8 md:p-10"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={update('name')}
                  placeholder="Jane Smith"
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold">Company</label>
                <input
                  type="text"
                  value={form.company}
                  onChange={update('company')}
                  placeholder="City General Hospital"
                  className={inputClass}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={update('email')}
                  placeholder="jane@hospital.org"
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold">Phone</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={update('phone')}
                  placeholder="(555) 123-4567"
                  className={inputClass}
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold">Model of interest</label>
              <select value={form.model} onChange={update('model')} className={`${inputClass} bg-white`}>
                <option value="">Not sure yet</option>
                {products.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold">Message</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={update('message')}
                placeholder="Tell us about your facility and power needs..."
                className={`${inputClass} resize-y`}
              />
            </div>
            <button
              type="submit"
              className="mt-2 cursor-pointer rounded-md border-none bg-brand px-7 py-[15px] text-base font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Send Message
            </button>
          </form>
        ) : (
          <div className="self-start rounded-xl border border-border bg-white px-8 py-14 text-center md:px-10">
            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-brand/12">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12l5 5L20 6" />
              </svg>
            </div>
            <div className="mb-2.5 text-xl font-semibold">Message sent</div>
            <div className="text-[15px] leading-[1.6] text-ink-muted">
              Thanks, {form.name}. A member of our sales team will reach out shortly.
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
}
