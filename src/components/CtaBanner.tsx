import { Link } from 'react-router-dom';

interface CtaBannerProps {
  heading: string;
  body: string;
}

export default function CtaBanner({ heading, body }: CtaBannerProps) {
  return (
    <section className="border-t border-panel-line bg-panel px-6 py-16 md:px-14">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-8">
        <div>
          <h2 className="m-0 mb-2.5 text-[26px] font-semibold text-panel-ink md:text-[30px]">{heading}</h2>
          <p className="m-0 text-base text-panel-ink-muted">{body}</p>
        </div>
        <Link
          to="/contact"
          className="rounded-md bg-brand-vivid px-7 py-[15px] text-base font-semibold whitespace-nowrap text-panel transition-colors hover:bg-brand-light"
        >
          Contact Sales
        </Link>
      </div>
    </section>
  );
}
