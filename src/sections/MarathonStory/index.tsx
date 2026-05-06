export const StorySection = () => {
    return (
      <section className="relative bg-white pt-24 pb-32 px-4 md:pt-32 md:pb-40 overflow-hidden">
        <div className="max-w-[1584px] mx-auto relative flex flex-col items-center justify-center">
          
          {/* Left Floating Badge - Positioned like Screenshot (530).png */}
          <div className="hidden lg:block absolute left-4 xl:left-12 top-1/2 -translate-y-1/2 w-[180px] h-[180px]">
            <img
              src="https://c.animaapp.com/mosxds1qPf1ueg/assets/ss-est-2012.png"
              alt="Est Badge"
              className="w-full h-full object-contain rotate-[10deg]"
            />
          </div>
  
          {/* Center Content Block */}
          <div className="max-w-[1000px] w-full text-center px-4 z-10">
            <h2 className="font-display font-bold uppercase text-[#0083DB] text-[42px] leading-[0.95] tracking-tight md:text-[68px] lg:text-[76px] mb-12">
              Born in Kumasi, run for all of Ghana. The Kumasi City 
              Marathon celebrates community, strength, and the spirit of Ashanti.
            </h2>
            
            <div className="flex justify-center">
              <a
                href="#about"
                className="inline-flex items-center bg-[#FACC15] text-[#0083DB] shadow-[#0C5235_5px_6px_0px_0px] h-[58px] px-12 rounded-full border-2 border-[#0C5235] font-display font-bold uppercase tracking-tight text-xl hover:translate-y-[2px] hover:shadow-[#0C5235_3px_4px_0px_0px] transition-all"
              >
                Our Story
              </a>
            </div>
          </div>
  
          {/* Right Floating Icon - Positioned like Screenshot (530).png */}
          <div className="hidden lg:block absolute right-4 xl:right-12 top-1/2 -translate-y-1/2 w-[220px] h-[180px]">
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