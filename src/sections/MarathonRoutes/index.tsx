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
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-11.8z" />
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
        <polyline points="20 6 9 17 4 12" />
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
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "Medical Support",
    desc: "Qualified medical teams on standby at intervals and at the finish line for immediate care.",
  },
];

export const MarathonRoute = () => {
  return (
    <section className="bg-orange-50 px-4 py-16 md:px-12 md:py-24">
      <div className="max-w-[1584px] mx-auto items-center gap-x-5 grid grid-cols-1 md:grid-cols-[repeat(12,1fr)] gap-y-12">
        {/* Text side */}
        <div className="md:col-start-1 md:col-end-[span_5] flex flex-col justify-center">
          <span className="font-obviously_narrow font-semibold uppercase tracking-[0.4px] text-base text-emerald-500 mb-3">
            Route &amp; Details
          </span>
          <h2 className="font-obviously_narrow font-bold uppercase text-emerald-900 text-[clamp(36px,5vw,61px)] leading-none mb-4">
            Run the Streets of Kumasi
          </h2>
          <p className="font-founders_grotesk text-emerald-900 text-lg leading-relaxed mb-8">
            Run through iconic roads in Kumasi with full safety, water stations,
            and medical support every step of the way.
          </p>
          <a
            href="#register"
            className="inline-flex self-start relative font-semibold items-center bg-emerald-500 shadow-[rgb(12,82,53)_6px_8px_0px_0px] px-6 h-12 rounded-full border-2 border-emerald-900 text-emerald-900 font-obviously_narrow uppercase tracking-[0.4px] hover:bg-emerald-400 transition-colors"
          >
            Secure Your Spot
          </a>
        </div>

        {/* Feature cards */}
        <div className="md:col-start-7 md:col-end-[span_6] grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="border-2 border-emerald-900 bg-white rounded-[16px] p-5 shadow-[rgb(12,82,53)_4px_6px_0px_0px] flex flex-col"
            >
              <div className="text-emerald-900">{icon}</div>
              <h3 className="font-obviously_narrow font-bold uppercase text-emerald-900 text-lg leading-tight">
                {title}
              </h3>
              <p className="font-founders_grotesk text-emerald-900 text-sm leading-snug opacity-80">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};