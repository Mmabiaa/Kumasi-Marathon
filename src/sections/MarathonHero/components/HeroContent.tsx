export const HeroContent = () => {
  return (
    <div className="w-full text-center">
      <div className="max-w-[890px] mx-auto text-center">
        <h1 className="text-[90px] leading-[90px] font-bold uppercase font-obviously_narrow text-brand-black mb-8 text-center before:table before:mb-[-19px] after:table after:mt-[-2.5px]">
          Kumasi City Marathon 2026
        </h1>
        <p className="my-5 text-center text-[20px] font-normal leading-[1.6] font-founders_grotesk text-brand-black">
          Run the Heart of Ashanti. Win Big. The Kumasi City Marathon 2026 is
          Ghana&apos;s premier road race, bringing together thousands of runners from
          across the country and beyond. Whether you&apos;re a seasoned athlete or a
          first-time runner, this is your chance to be part of something
          historic — July 25, 2026 | Kumasi, Ghana. Register and stand a chance
          to WIN a brand-new car in our official raffle!
        </p>
        <div className="flex flex-row items-center justify-center gap-x-3 mt-8">
          <a
            href="#register"
            className="font-semibold items-center bg-brand-blue text-brand-white shadow-[rgb(0,0,0)_6px_8px_0px_0px] flex h-12 justify-center tracking-[0.4px] leading-6 uppercase border-brand-black px-8 rounded-[200px] border-2 border-solid font-obviously_narrow text-base hover:opacity-90 transition-opacity"
          >
            Register Now
          </a>
          <a
            href="#categories"
            className="font-semibold items-center bg-brand-white text-brand-black shadow-[rgb(0,0,0)_6px_8px_0px_0px] flex h-12 justify-center tracking-[0.4px] leading-6 uppercase border-brand-black px-8 rounded-[200px] border-2 border-solid font-obviously_narrow text-base hover:bg-brand-light transition-colors"
          >
            View Race Categories
          </a>
        </div>
      </div>
    </div>
  );
};
