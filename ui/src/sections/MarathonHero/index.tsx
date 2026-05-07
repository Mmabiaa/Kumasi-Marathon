import { HeroContent } from "./components/HeroContent";

export const MarathonHero = () => {
  return (
    <section className="box-border outline-[3px] overflow-hidden bg-brand-white">

      {/* ── MOBILE layout (RESTORED) ── */}
      <div className="md:hidden px-4 pt-6 pb-0">
        <div className="mb-8">
          {/* Scaled down headline */}
          <h1 className="animate-fade-in-up font-display font-bold uppercase text-brand-black tracking-tighter leading-[0.9] mb-4 text-left text-[clamp(2.6rem,12vw,3.8rem)]">
            Kumasi City <br /> Marathon 2026
          </h1>
          <p className="animate-fade-in-up-delay text-[16px] leading-[1.5] font-founders_grotesk text-brand-black text-left mb-7 font-normal max-w-[280px]">
            Run the Heart of Ashanti. Win Big. July 25, 2026 | Kumasi, Ghana.
            Register and stand a chance to WIN a brand-new car!
          </p>
          <div className="animate-fade-in-up-delay-2 flex flex-col items-stretch gap-y-3 max-w-[340px]">
            <a
              href="#register"
              className="font-display font-bold items-center bg-brand-blue text-brand-white shadow-[rgb(0,0,0)_5px_6px_0px_0px] flex min-h-[52px] justify-center tracking-tight uppercase border-brand-black px-8 rounded-full border-2 border-solid text-lg hover:opacity-90 transition-opacity"
            >
              Register Now
            </a>
            <a
              href="#categories"
              className="font-display font-bold items-center bg-brand-white text-brand-black shadow-[rgb(0,0,0)_5px_6px_0px_0px] flex min-h-[52px] justify-center tracking-tight uppercase border-brand-black px-8 rounded-full border-2 border-solid text-lg hover:bg-brand-light transition-colors"
            >
              View Race Categories
            </a>
          </div>
        </div>

        {/* Original Image row structure restored */}
        <div className="relative flex justify-between h-[300px] gap-x-3 mt-4">
          <div className="relative w-[44%] flex-shrink-0 self-start" style={{ height: '58%' }}>
            <div className="h-full bg-brand-blue rounded-[16px] overflow-hidden border-brand-black border-2 border-solid">
              <img
                src="https://i.pinimg.com/1200x/95/33/97/95339765d3ad2eab848d63ce777ecbcc.jpg"
                alt=""
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>

          <div className="relative w-[44%] flex-shrink-0 self-end" style={{ height: '88%' }}>
            <div className="h-full bg-brand-blue rounded-[20px] overflow-hidden border-brand-black border-2 border-solid">
              <img
                src="https://i.pinimg.com/1200x/99/97/cf/9997cfdd11c5f80a5547161bb67e2283.jpg"
                alt=""
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── DESKTOP layout (pushed down further) ── */}
      <div className="hidden md:block px-12 pt-32 pb-16">
        <div className="relative max-w-[1584px] w-full mx-auto">
          <div className="grid grid-cols-12 gap-x-5 items-start">

            {/* Left image — Original positioning */}
            <div className="col-start-1 col-span-2 relative -mt-12">
              <div className="relative aspect-[3/4] bg-brand-blue rounded-[20px] overflow-hidden border-brand-black border-2 border-solid w-full">
                <img
                  src="https://i.pinimg.com/1200x/95/33/97/95339765d3ad2eab848d63ce777ecbcc.jpg"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Center content — Re-sized typography within original structure */}
            <div className="col-start-3 col-span-8 flex items-center justify-center py-8">
              <HeroContent />
            </div>

            {/* Right image — Original positioning */}
            <div className="col-start-11 col-span-2 relative self-end pb-0">
              <div className="relative aspect-[3/4] bg-brand-blue rounded-[20px] overflow-hidden border-brand-black border-2 border-solid w-full">
                <img
                  src="https://i.pinimg.com/1200x/99/97/cf/9997cfdd11c5f80a5547161bb67e2283.jpg"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};