import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const links = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `border-b-2 pb-1.5 text-[15px] transition-colors ${
    isActive
      ? 'border-brand font-semibold text-brand'
      : 'border-transparent font-medium text-ink hover:text-brand'
  }`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 border-b border-border bg-page/96 backdrop-blur-[6px]">
      <div className="flex items-center justify-between px-6 py-[22px] md:px-14">
        <NavLink to="/" onClick={() => setOpen(false)} className="group">
          <Logo />
        </NavLink>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="rounded-md bg-brand px-[22px] py-[11px] text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Contact Sales
          </NavLink>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-0.5 w-6 bg-ink transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-6 bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-ink transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border px-6 py-4 lg:hidden">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-md px-3 py-2.5 text-[15px] ${
                  isActive ? 'font-semibold text-brand' : 'font-medium text-ink'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-md bg-brand px-[22px] py-[11px] text-center text-sm font-semibold text-white"
          >
            Contact Sales
          </NavLink>
        </nav>
      )}
    </header>
  );
}
