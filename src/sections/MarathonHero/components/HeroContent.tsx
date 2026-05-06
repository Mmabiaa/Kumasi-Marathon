export const HeroContent = () => {
  return (
    <div className="w-full text-center">
      <div className="max-w-[820px] mx-auto text-center px-1">
        {/* Scaled down to match Screenshot (526).jpg proportion */}
        <h1 className="font-display font-bold uppercase text-brand-black tracking-tighter leading-[0.88] mb-6 text-center text-[clamp(3rem,8.5vw,5.2rem)]">
          Kumasi City <br /> Marathon 2026
        </h1>
        <p className="my-5 text-center text-[18px] md:text-[19px] font-normal leading-[1.5] font-founders_grotesk text-brand-black max-w-[560px] mx-auto">
          Run the Heart of Ashanti. Win Big. The Kumasi City Marathon 2026 is
          Ghana&apos;s premier road race, bringing together thousands of runners. 
          Register and stand a chance to WIN a brand-new car in our official raffle!
        </p>
        <div className="flex flex-row flex-wrap items-center justify-center gap-3 md:gap-4 mt-8">
          <a
            href="#register"
            className="font-display font-bold items-center bg-brand-blue text-brand-white shadow-[rgb(0,0,0)_5px_6px_0px_0px] inline-flex min-h-[50px] px-8 justify-center tracking-tight uppercase border-brand-black rounded-full border-2 border-solid text-lg hover:translate-y-[1px] transition-all"
          >
            Register Now
          </a>
          <a
            href="#categories"
            className="font-display font-bold items-center bg-brand-white text-brand-black shadow-[rgb(0,0,0)_5px_6px_0px_0px] inline-flex min-h-[50px] px-8 justify-center tracking-tight uppercase border-brand-black rounded-full border-2 border-solid text-lg hover:bg-brand-light transition-colors"
          >
            Race Categories
          </a>
        </div>
      </div>
    </div>
  );
};