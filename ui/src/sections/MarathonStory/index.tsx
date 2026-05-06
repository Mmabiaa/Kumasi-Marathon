export const StorySection = () => {
    return (
      <section className="relative bg-white pt-12 pb-20 px-6 md:pt-32 md:pb-40 overflow-hidden">
        <div className="max-w-[1584px] mx-auto relative flex flex-col items-center justify-center">
          
          {/* RESTORED: Original Badge Image & Desktop Absolute Positioning */}
          <div className="relative mb-10 lg:mb-0 lg:absolute lg:left-4 xl:left-12 lg:top-1/2 lg:-translate-y-1/2 w-[160px] h-[160px] md:w-[180px] md:h-[180px]">
            <img
              src="https://i.pinimg.com/736x/74/57/35/7457350445dd545acfb45cd683ec34a9.jpg"
              alt="Est Badge"
              className="w-full h-full object-contain rotate-[6deg] lg:rotate-[10deg]"
            />
          </div>
  
          {/* Center Content Block - FIXED MOBILE ALIGNMENT */}
          <div className="max-w-[960px] w-full text-center z-10 flex flex-col items-center">
            <h2 className="font-display font-bold uppercase text-[#0083DB] text-[28px] leading-[1.1] tracking-tighter mb-10 md:mb-12 md:text-[68px] lg:text-[74px] max-w-[340px] md:max-w-none">
              Born in Kumasi, run for all of Ghana. The Kumasi City 
              Marathon celebrates community, strength, and the spirit of Ashanti.
            </h2>
            
            <div className="flex justify-center w-full">
              <a
                href="#about"
                className="inline-flex items-center bg-[#F4FBFF] text-[#0083DB] shadow-[rgb(0,0,0)_5px_6px_0px_0px] h-[54px] md:h-[60px] px-10 md:px-12 rounded-full border-2 border-black font-display font-bold uppercase tracking-tight text-lg md:text-xl hover:translate-y-[2px] hover:shadow-[rgb(0,0,0)_3px_4px_0px_0px] transition-all"
              >
                Our Story
              </a>
            </div>
          </div>
  
          {/* RESTORED: Original Racquets Image & Desktop Absolute Positioning */}
          <div className="hidden lg:block absolute lg:right-4 xl:right-12 lg:top-1/2 lg:-translate-y-1/2 w-[220px] h-[180px]">
            <img
              src="https://i.pinimg.com/1200x/89/ae/8d/89ae8db9db5cc0850720ce96ae369af5.jpg"
              alt="Racquets"
              className="w-full h-full object-contain rotate-[-10deg]"
            />
          </div>
  
        </div>
      </section>
    );
  };