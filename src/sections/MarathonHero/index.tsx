import { HeroContent } from "./components/HeroContent";

export const MarathonHero = () => {
  return (
    <section className="box-border caret-transparent outline-[3px] overflow-hidden">

      {/* ── MOBILE layout ── */}
      <div className="md:hidden px-4 pt-10 pb-0">
        {/* Text block */}
        <div className="mb-8">
          <h1 className="text-[52px] leading-[54px] font-bold uppercase font-obviously_narrow text-emerald-900 mb-4 text-left before:table before:mb-[-12px] after:table after:mt-[-3px]">
            Kumasi City Marathon 2026
          </h1>
          <p className="text-base leading-[1.6] font-founders_grotesk text-emerald-900 text-left mb-6 font-normal">
            Run the Heart of Ashanti. Win Big. — July 25, 2026 | Kumasi, Ghana.
            Register and stand a chance to WIN a brand-new car in our official raffle!
          </p>
          <div className="flex flex-col items-start gap-y-4">
            <a
              href="#register"
              className="font-semibold items-center bg-emerald-500 shadow-[rgb(12,82,53)_4px_6px_0px_0px] flex h-11 justify-center tracking-[0.4px] leading-6 uppercase border-emerald-900 px-7 rounded-[200px] border-2 border-solid font-obviously_narrow text-sm"
            >
              Register Now
            </a>
            <a
              href="#race-categories"
              className="font-semibold items-center bg-yellow-400 shadow-[rgb(12,82,53)_4px_6px_0px_0px] flex h-11 justify-center tracking-[0.4px] leading-6 uppercase border-emerald-900 px-7 rounded-[200px] border-2 border-solid font-obviously_narrow text-sm"
            >
              View Race Categories
            </a>
          </div>
        </div>

        {/* Images row — below text, side by side, slightly cut off at edges */}
        <div className="relative flex justify-between items-end h-[280px] -mx-4">
          {/* Left image */}
          <div className="relative w-[48%] h-full flex-shrink-0">
            <div className="relative h-full bg-emerald-900 rounded-[16px] overflow-hidden border-emerald-900 border-2 border-solid -ml-2">
              <img
                src="https://c.animaapp.com/mosxds1qPf1ueg/assets/home-hero-left.jpg"
                alt=""
                className="h-full w-full object-cover object-top"
              />
            </div>
            {/* Tennis ball */}
            <div className="absolute w-[40px] h-[40px] bottom-6 right-0 translate-x-1/2 z-20">
              <img
                src="https://c.animaapp.com/mosxds1qPf1ueg/assets/icon-4.svg"
                alt=""
                className="h-full w-full"
              />
            </div>
          </div>

          {/* Right image */}
          <div className="relative w-[48%] h-[85%] flex-shrink-0 self-end">
            <div className="relative h-full bg-emerald-900 rounded-[16px] overflow-hidden border-emerald-900 border-2 border-solid -mr-2">
              <img
                src="https://c.animaapp.com/mosxds1qPf1ueg/assets/home-hero-right.jpg"
                alt=""
                className="h-full w-full object-cover object-top"
              />
            </div>
            {/* Tennis ball */}
            <div className="absolute w-[40px] h-[40px] top-4 right-4 z-20">
              <img
                src="https://c.animaapp.com/mosxds1qPf1ueg/assets/icon-5.svg"
                alt=""
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── DESKTOP layout (unchanged) ── */}
      <div className="hidden md:block px-12 py-16">
        <div className="relative max-w-[1584px] w-full mx-auto min-h-[700px]">

          {/* Left image — top-left */}
          <div className="absolute top-0 left-0 w-[220px] z-10">
            <div className="relative aspect-[3/4] bg-emerald-900 rounded-[20px] overflow-hidden border-emerald-900 border-2 border-solid">
              <img
                src="https://c.animaapp.com/mosxds1qPf1ueg/assets/home-hero-left.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute w-[52px] h-[52px] -bottom-6 -right-6 z-20">
              <img
                src="https://c.animaapp.com/mosxds1qPf1ueg/assets/icon-4.svg"
                alt=""
                className="h-full w-full"
              />
            </div>
          </div>

          {/* Right image — bottom-right */}
          <div className="absolute bottom-0 right-0 w-[220px] z-10">
            <div className="relative aspect-[3/4] bg-emerald-900 rounded-[20px] overflow-hidden border-emerald-900 border-2 border-solid">
              <img
                src="https://c.animaapp.com/mosxds1qPf1ueg/assets/home-hero-right.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute w-[52px] h-[52px] -top-6 -left-6 z-20">
              <img
                src="https://c.animaapp.com/mosxds1qPf1ueg/assets/icon-5.svg"
                alt=""
                className="h-full w-full"
              />
            </div>
          </div>

          {/* Centered content */}
          <div className="flex items-center justify-center w-full min-h-[700px] px-[280px]">
            <HeroContent />
          </div>
        </div>
      </div>

    </section>
  );
};