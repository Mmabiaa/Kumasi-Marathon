const sponsorSlots = [
  "Title Sponsor",
  "Gold Sponsor",
  "Silver Sponsor",
  "Bronze Sponsor",
  "Media Partner",
  "Community Partner",
];

export const MarathonSponsors = () => {
  return (
    <section className="bg-brand-white px-4 py-16 md:px-12 md:py-24">
      <div className="max-w-[1584px] mx-auto">
        <div className="text-center mb-12">
          <span className="font-obviously_narrow font-semibold uppercase tracking-[0.4px] text-base text-brand-blue mb-3">
            Our Partners
          </span>
          <h2 className="font-obviously_narrow font-bold uppercase text-brand-black text-[clamp(36px,5vw,61px)] leading-none mb-4">
            Proud Sponsors
          </h2>
          <p className="font-founders_grotesk text-brand-black text-lg max-w-[560px] mx-auto opacity-80">
            Supported by partners committed to sports and community development
            in Ghana and across Africa.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
          {sponsorSlots.map((label) => (
            <div
              key={label}
              className="border-2 border-dashed border-brand-blue/40 rounded-[16px] h-24 flex flex-col items-center justify-center gap-2 text-brand-blue hover:border-brand-black hover:text-brand-black transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M9 21V9" />
              </svg>
              <span className="font-obviously_narrow font-semibold uppercase text-xs text-brand-black tracking-[0.3px] text-center px-2">
                {label}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 font-founders_grotesk text-sm text-brand-black/70">
          Interested in sponsoring? Email us at{" "}
          <a
            href="mailto:info@kumasicitymarathon.com"
            className="underline font-semibold text-brand-blue hover:text-brand-black transition-colors"
          >
            info@kumasicitymarathon.com
          </a>
        </p>
      </div>
    </section>
  );
};
