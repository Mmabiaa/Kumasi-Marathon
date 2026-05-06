const features = [
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Iconic Route",
    desc: "Run through the historic and vibrant roads of Kumasi, the heart of the Ashanti Region.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "Full Safety",
    desc: "Professional safety marshals and security personnel stationed along the entire route.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 11H5l-4 4v6h18v-6l-4-4h-4" />
        <path d="M9 11V9a3 3 0 0 1 6 0v2" />
      </svg>
    ),
    title: "Water Stations",
    desc: "Hydration stations placed every 2.5km to keep every runner performing at their best.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4.5 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 2.5 2.5v10a2.5 2.5 0 0 0 5 0v-7a2.5 2.5 0 0 1 5 0v4a2.5 2.5 0 0 0 5 0" />
      </svg>
    ),
    title: "Medical Support",
    desc: "Qualified medical teams on standby at intervals and at the finish line for immediate care.",
  },
];

export const MarathonRoute = () => {
  return (
    <section className="bg-brand-light px-4 py-16 md:px-12 md:py-24">
      <div className="max-w-[1584px] mx-auto items-center gap-x-5 grid grid-cols-1 md:grid-cols-[repeat(12,1fr)] gap-y-12">
        <div className="md:col-start-1 md:col-end-[span_5] flex flex-col justify-center">
          <span className="font-obviously_narrow font-semibold uppercase tracking-[0.4px] text-base text-brand-blue mb-3">
            Route &amp; Details
          </span>
          <h2 className="font-obviously_narrow font-bold uppercase text-brand-black text-[clamp(36px,5vw,61px)] leading-none mb-4">
            Run the Streets of Kumasi
          </h2>
          <p className="font-founders_grotesk text-brand-black text-lg leading-relaxed mb-8">
            Run through iconic roads in Kumasi with full safety, water stations,
            and medical support every step of the way.
          </p>
          <a
            href="#register"
            className="inline-flex self-start relative font-semibold items-center bg-brand-blue text-brand-white shadow-[rgb(0,0,0)_6px_8px_0px_0px] px-6 h-12 rounded-full border-2 border-brand-black font-obviously_narrow uppercase tracking-[0.4px] hover:opacity-90 transition-opacity"
          >
            Secure Your Spot
          </a>
        </div>

        <div className="md:col-start-7 md:col-end-[span_6] grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="border-2 border-brand-black bg-brand-white rounded-[16px] p-5 shadow-[rgb(0,0,0)_4px_6px_0px_0px] flex flex-col"
            >
              <div className="text-brand-blue">{icon}</div>
              <h3 className="font-obviously_narrow font-bold uppercase text-brand-black text-lg leading-tight">
                {title}
              </h3>
              <p className="font-founders_grotesk text-brand-black text-sm leading-snug opacity-80">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
