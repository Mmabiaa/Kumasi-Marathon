export const MarathonFooter = () => {
  return (
    <footer className="bg-brand-black border-t-2 border-brand-blue px-4 py-8 md:px-12">
      <div className="max-w-[1584px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-brand-blue border-2 border-brand-white flex items-center justify-center">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
          <span className="font-obviously_narrow font-bold uppercase text-brand-white tracking-[0.4px] text-base">
            Kumasi City Marathon 2026
          </span>
        </div>
        <nav className="flex gap-6 flex-wrap justify-center">
          {["About", "Categories", "Schedule", "Register", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-founders_grotesk text-brand-light text-sm hover:text-brand-white transition-colors"
              >
                {item}
              </a>
            ),
          )}
        </nav>
        <p className="font-founders_grotesk text-brand-light/80 text-sm">
          &copy; Kumasi City Marathon 2026. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
