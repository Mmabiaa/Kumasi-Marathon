export const MarathonAbout = () => {
  return (
    <section className="bg-brand-light px-4 py-16 md:px-12 md:py-24">
      <div className="max-w-[1584px] mx-auto items-start gap-x-5 grid grid-cols-1 md:grid-cols-[repeat(12,1fr)] gap-y-12">
        <div className="md:col-start-1 md:col-end-[span_6] flex flex-col justify-center">
          <span className="font-obviously_narrow font-semibold uppercase tracking-[0.4px] text-base text-brand-blue mb-3">
            About the Race
          </span>
          <h2 className="font-obviously_narrow font-bold uppercase text-brand-black text-[clamp(36px,5vw,61px)] leading-none">
            More Than a Race
          </h2>
          <p className="font-founders_grotesk text-brand-black text-lg leading-relaxed mb-6">
            The Kumasi City Marathon is more than a race — it is a celebration
            of culture, endurance, and community.
          </p>
          <p className="font-founders_grotesk text-brand-black text-lg leading-relaxed mb-8">
            Every registered participant automatically qualifies for our
            official raffle, with a chance to win a brand-new car.
          </p>
          <div>
            <a
              href="#register"
              className="inline-flex relative font-semibold items-center bg-brand-blue text-brand-white shadow-[rgb(0,0,0)_6px_8px_0px_0px] px-6 h-12 rounded-full border-2 border-brand-black font-obviously_narrow uppercase tracking-[0.4px] hover:opacity-90 transition-opacity"
            >
              Join the Movement
            </a>
          </div>
        </div>

        <div className="md:col-start-7 md:col-end-[span_6] grid grid-cols-2 gap-4">
          {[
            {
              icon: (
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0083DB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              ),
              title: "Community",
              desc: "Thousands of runners from across Ghana and beyond",
            },
            {
              icon: (
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0083DB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              ),
              title: "Endurance",
              desc: "Full safety, medical support, and water stations",
            },
            {
              icon: (
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0083DB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              ),
              title: "Culture",
              desc: "Ashanti heritage at the heart of every stride",
            },
            {
              icon: (
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0083DB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15 9 22 10 17 15 18 22 12 18 6 22 7 15 2 10 9 9 12 2" />
                </svg>
              ),
              title: "Win Big",
              desc: "Brand-new car raffle for every registrant",
            },
          ].map(({ icon, title, desc }) => (
            <div
              key={title}
              className="bg-brand-white border-2 border-brand-black rounded-[16px] p-5 shadow-[rgb(0,0,0)_4px_6px_0px_0px]"
            >
              <div className="mb-3">{icon}</div>
              <h3 className="font-obviously_narrow font-bold uppercase text-brand-black text-xl leading-tight mb-1">
                {title}
              </h3>
              <p className="font-founders_grotesk text-brand-black text-sm leading-snug">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
