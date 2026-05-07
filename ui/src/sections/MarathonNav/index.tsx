import { useState, useEffect } from "react";

export const MarathonNav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Categories", href: "#categories" },
    { label: "Schedule", href: "#schedule" },
    { label: "Sponsors", href: "#sponsors" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-[#FFFFFF] border-b-2 border-brand-black py-2" 
          : "bg-transparent border-b-0 py-4"
      }`}
    >
      <nav className="relative flex items-center justify-between min-h-[72px] md:min-h-[80px] px-4 md:px-12 max-w-[1584px] mx-auto w-full">
        
        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 flex-1">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="font-display font-bold uppercase text-brand-black text-base lg:text-lg tracking-tight hover:text-brand-blue transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* LOGO AREA - Centered on Desktop */}
        <a
          href="#"
          className="flex items-center gap-3 shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2"
        >
          <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-brand-blue border-2 border-brand-black flex items-center justify-center shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
          <span className="font-display font-bold uppercase text-brand-black tracking-tighter text-[16px] md:text-lg lg:text-[1.3rem] leading-[0.95]">
            Kumasi City
            <br />
            Marathon 2026
          </span>
        </a>

        {/* REGISTER & MOBILE TOGGLE */}
        <div className="flex items-center justify-end flex-1">
          <a
            href="#register"
            className="hidden md:inline-flex relative font-display font-bold items-center bg-brand-blue text-brand-white shadow-[rgb(0,0,0)_4px_4px_0px_0px] px-6 min-h-[42px] rounded-full border-2 border-brand-black text-sm lg:text-base uppercase tracking-tight hover:translate-y-[1px] hover:shadow-[rgb(0,0,0)_2px_2px_0px_0px] transition-all"
          >
            Register Now
          </a>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="md:hidden appearance-none flex items-center justify-center bg-brand-blue shadow-[rgb(0,0,0)_3px_4px_0px_0px] w-11 h-11 rounded-full border-2 border-brand-black"
            aria-label="Open menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5">
              <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      {/* MOBILE FULLSCREEN MENU (Same as previous) */}
      {open && (
        <div className="md:hidden fixed inset-0 z-[60] bg-brand-white flex flex-col px-6 pt-5 pb-8 animate-in fade-in duration-200">
          <div className="flex items-center justify-between mb-12">
            <span className="font-display font-bold uppercase text-brand-black tracking-tighter text-[19px]">
              Menu
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="appearance-none flex items-center justify-center bg-brand-blue shadow-[rgb(0,0,0)_3px_4px_0px_0px] w-11 h-11 rounded-full border-2 border-brand-black"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col gap-2 flex-1">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="font-display font-black uppercase text-brand-black tracking-tighter leading-[0.85] py-1"
                style={{ fontSize: "clamp(48px, 15vw, 80px)" }}
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4 mt-auto">
            <a
              href="#register"
              onClick={() => setOpen(false)}
              className="relative font-display font-bold flex items-center justify-center bg-brand-blue text-brand-white shadow-[rgb(0,0,0)_5px_6px_0px_0px] min-h-[58px] rounded-full border-2 border-brand-black text-xl uppercase tracking-tight w-full"
            >
              Register Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};