import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-border px-6 py-12 md:px-14">
      <span className="text-sm text-ink-muted">© 2026 Aushertech. Medical power solutions.</span>
      <div className="flex gap-7">
        <Link to="/products" className="text-sm text-ink-muted hover:text-brand">
          Products
        </Link>
        <Link to="/about" className="text-sm text-ink-muted hover:text-brand">
          About
        </Link>
        <Link to="/contact" className="text-sm text-ink-muted hover:text-brand">
          Contact
        </Link>
      </div>
    </footer>
  );
}
