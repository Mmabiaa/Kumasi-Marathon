import { useState } from "react";

export const MarathonNav = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "About", href: "#about" },
    { label: "Categories", href: "#categories" },
    { label: "Schedule", href: "#schedule" },
    { label: "Sponsors", href: "#sponsors" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-orange-50 border-b-2 border-emerald-900">
      <nav className="relative flex items-center justify-between h-[80px] px-4 md:px-12 max-w-[1584px] mx-auto w-full">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-full bg-emerald-900 border-2 border-emerald-900 flex items-center justify-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fdf2e3"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
          <span className="font-obviously_narrow font-bold uppercase text-emerald-900 tracking-[0.3px] text-[18px] leading-tight">
            Kumasi City
            <br />
            Marathon 2026
          </span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="font-obviously_narrow font-semibold uppercase text-emerald-900 text-base tracking-[0.3px] hover:text-emerald-600 transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#register"
          className="hidden md:inline-flex relative font-semibold items-center bg-yellow-400 shadow-[rgb(12,82,53)_4px_6px_0px_0px] px-5 h-10 rounded-full border-2 border-emerald-900 text-emerald-900 text-sm uppercase tracking-[0.3px] font-obviously_narrow hover:bg-yellow-300 transition-colors"
        >
          Register Now
        </a>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden appearance-none flex items-center justify-center bg-yellow-400 shadow-[rgb(12,82,53)_3px_4px_0px_0px] w-10 h-10 rounded-full border-2 border-emerald-900"
          aria-label="Toggle menu"
        >
          {open ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0c5235"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0c5235"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>

        {/* Mobile menu */}
        {open && (
          <div className="absolute top-[80px] left-0 w-full bg-orange-50 border-b-2 border-emerald-900 px-4 py-6 flex flex-col gap-4">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="font-obviously_narrow font-bold uppercase text-emerald-900 text-2xl tracking-[0.3px]"
              >
                {label}
              </a>
            ))}
            <a
              href="#register"
              onClick={() => setOpen(false)}
              className="inline-flex relative font-semibold items-center bg-yellow-400 shadow-[rgb(12,82,53)_4px_6px_0px_0px] px-5 h-12 rounded-full border-2 border-emerald-900 text-emerald-900 text-sm uppercase tracking-[0.3px] font-obviously_narrow w-fit"
            >
              Register Now
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};