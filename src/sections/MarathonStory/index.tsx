export const StorySection = () => {
    return (
      <section className="relative bg-white pt-16 pb-24 px-6 md:pt-32 md:pb-40 overflow-hidden">
        <div className="max-w-[1584px] mx-auto relative flex flex-col items-center justify-center">
          
          {/* Top Badge: Visible on Mobile, absolute on Desktop */}
          <div className="relative mb-10 lg:mb-0 lg:absolute lg:left-4 xl:left-12 lg:top-1/2 lg:-translate-y-1/2 w-[160px] h-[160px] md:w-[180px] md:h-[180px]">
            <img
              src="https://c.animaapp.com/mosxds1qPf1ueg/assets/ss-est-2012.png"
              alt="Est Badge"
              className="w-full h-full object-contain rotate-[6deg] lg:rotate-[10deg]"
            />
          </div>
  
          {/* Center Content Block */}
          <div className="max-w-[960px] w-full text-center z-10">
            <h2 className="font-display font-bold uppercase text-[#0083DB] text-[34px] leading-[0.92] tracking-tighter md:text-[68px] lg:text-[74px] mb-10 md:mb-12">
              Born in Kumasi, run for all of Ghana. The Kumasi City 
              Marathon celebrates community, strength, and the spirit of Ashanti.
            </h2>
            
            <div className="flex justify-center">
              <a
                href="#about"
                className="inline-flex items-center bg-[#F4FBFF] text-[#0083DB] shadow-[#000000_5px_6px_0px_0px] h-[54px] md:h-[60px] px-10 md:px-12 rounded-full border-2 border-[#000000] font-display font-bold uppercase tracking-tight text-lg md:text-xl hover:translate-y-[2px] hover:shadow-[#000000_3px_4px_0px_0px] transition-all"
              >
                Our Story
              </a>
            </div>
          </div>
  
          {/* Right Icon: Hidden on Mobile, absolute on Desktop */}
          <div className="hidden lg:block absolute lg:right-4 xl:right-12 lg:top-1/2 lg:-translate-y-1/2 w-[220px] h-[180px]">
            <img
              src="https://c.animaapp.com/mosxds1qPf1ueg/assets/racquets.png"
              alt="Racquets"
              className="w-full h-full object-contain rotate-[-10deg]"
            />
          </div>
  
        </div>
      </section>
    );
  };