import { HeroContent } from "./components/HeroContent";

export const MarathonHero = () => {
  return (
    <section className="box-border outline-[3px] overflow-hidden">

      {/* ── MOBILE layout ── */}
      <div className="md:hidden px-4 pt-10 pb-0">
        <div className="mb-8">
          <h1 className="text-[52px] leading-[54px] font-bold uppercase font-obviously_narrow text-brand-black mb-4 text-left">
            Kumasi City Marathon 2026
          </h1>
          <p className="text-base leading-[1.6] font-founders_grotesk text-brand-black text-left mb-6 font-normal">
            Run the Heart of Ashanti. Win Big. — July 25, 2026 | Kumasi, Ghana.
            Register and stand a chance to WIN a brand-new car in our official raffle!
          </p>
          <div className="flex flex-col items-start gap-y-4">
            <a
              href="#register"
              className="font-semibold items-center bg-brand-blue text-brand-white shadow-[rgb(0,0,0)_4px_6px_0px_0px] flex h-11 justify-center tracking-[0.4px] leading-6 uppercase border-brand-black px-7 rounded-[200px] border-2 border-solid font-obviously_narrow text-sm hover:opacity-90 transition-opacity"
            >
              Register Now
            </a>
            <a
              href="#race-categories"
              className="font-semibold items-center bg-brand-white text-brand-black shadow-[rgb(0,0,0)_4px_6px_0px_0px] flex h-11 justify-center tracking-[0.4px] leading-6 uppercase border-brand-black px-7 rounded-[200px] border-2 border-solid font-obviously_narrow text-sm hover:bg-brand-light transition-colors"
            >
              View Race Categories
            </a>
          </div>
        </div>

        {/* Images row below text */}
        <div className="relative flex justify-between h-[300px] gap-x-3 mt-4">

          {/* Left image — portrait, shorter, anchored top */}
          <div className="relative w-[44%] flex-shrink-0 self-start" style={{ height: '58%' }}>
            <div className="h-full bg-brand-blue rounded-[16px] overflow-hidden border-brand-black border-2 border-solid">
              <img
                src="https://c.animaapp.com/mosxds1qPf1ueg/assets/home-hero-left.jpg"
                alt=""
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>

          {/* Right image — portrait, taller, starts lower, anchored bottom */}
          <div className="relative w-[44%] flex-shrink-0 self-end" style={{ height: '88%' }}>
            <div className="h-full bg-brand-blue rounded-[20px] overflow-hidden border-brand-black border-2 border-solid">
              <img
                src="https://c.animaapp.com/mosxds1qPf1ueg/assets/home-hero-right.jpg"
                alt=""
                className="h-full w-full object-cover object-top"
              />
            </div>
            {/* Tennis ball */}
            <div className="absolute w-[34px] h-[34px] top-[38%] -right-4 z-20">
              <img
                src="https://c.animaapp.com/mosxds1qPf1ueg/assets/icon-5.svg"
                alt=""
                className="h-full w-full"
              />
            </div>
          </div>

        </div>
      </div>

      {/* ── DESKTOP layout ── */}
      <div className="hidden md:block px-12 py-16">
        <div className="relative max-w-[1584px] w-full mx-auto">

          {/* Grid: 12 cols, content in middle, images pinned left and right */}
          <div className="grid grid-cols-12 gap-x-5 items-start">

            {/* Left image — col 1–2, nudged upward */}
            <div className="col-start-1 col-span-2 relative -mt-12">
              <div className="relative aspect-[3/4] bg-brand-blue rounded-[20px] overflow-hidden border-brand-black border-2 border-solid w-full">
                <img
                  src="https://c.animaapp.com/mosxds1qPf1ueg/assets/home-hero-left.jpg"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              {/* Tennis ball */}
              <div className="absolute w-[44px] h-[44px] bottom-24 -right-6 z-20">
                <img
                  src="https://c.animaapp.com/mosxds1qPf1ueg/assets/icon-4.svg"
                  alt=""
                  className="h-full w-full"
                />
              </div>
            </div>

            {/* Center content — col 3–10 */}
            <div className="col-start-3 col-span-8 flex items-center justify-center py-8">
              <HeroContent />
            </div>

            {/* Right image — col 11–12, bottom aligned */}
            <div className="col-start-11 col-span-2 relative self-end pb-0">
              <div className="relative aspect-[3/4] bg-brand-blue rounded-[20px] overflow-hidden border-brand-black border-2 border-solid w-full">
                <img
                  src="https://c.animaapp.com/mosxds1qPf1ueg/assets/home-hero-right.jpg"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              {/* Tennis ball */}
              <div className="absolute w-[44px] h-[44px] top-8 -right-5 z-20">
                <img
                  src="https://c.animaapp.com/mosxds1qPf1ueg/assets/icon-5.svg"
                  alt=""
                  className="h-full w-full"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};