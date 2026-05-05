export const MarathonRegister = () => {
  return (
    <section
      id="register"
      className="bg-orange-50 px-4 py-16 md:px-12 md:py-24"
    >
      <div className="max-w-[900px] mx-auto">
        <div className="bg-emerald-900 border-2 border-emerald-900 rounded-[24px] shadow-[rgb(12,82,53)_8px_10px_0px_0px] overflow-hidden">
          {/* Top bar */}
          <div className="bg-yellow-400 px-8 py-4 flex items-center gap-3">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0c5235"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="8" r="6" />
              <path d="M12 15l-3.39 5.56a1 1 0 0 0 1.63 1.1L12 19l1.76 2.66a1 1 0 0 0 1.63-1.1L12 15z" />
            </svg>
            <span className="font-obviously_narrow font-bold uppercase text-emerald-900 tracking-[0.4px]">
              Official Registration — Car Raffle Included
            </span>
          </div>

          {/* Body */}
          <div className="px-8 py-10 md:px-14 md:py-12 text-center">
            <h2 className="font-obviously_narrow font-bold text-orange-50 text-[clamp(36px,5vw,56px)] leading-none mb-4">
              Secure Your Spot
            </h2>
            <p className="font-founders_grotesk text-emerald-200 text-lg leading-relaxed mb-10 max-w-[560px] mx-auto">
              Register to secure your spot in the Kumasi City Marathon 2026 and
              automatically enter the car raffle. Every runner qualifies — no
              extra steps needed.
            </p>

            {/* Form */}
            <form
              className="flex flex-col gap-4 max-w-[480px] mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                placeholder="Full Name"
                className="h-12 rounded-[200px] border-2 border-emerald-700 bg-emerald-800 text-orange-50 placeholder-emerald-400 px-5 font-founders_grotesk text-base outline-none focus:border-yellow-400 transition-colors"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="h-12 rounded-[200px] border-2 border-emerald-700 bg-emerald-800 text-orange-50 placeholder-emerald-400 px-5 font-founders_grotesk text-base outline-none focus:border-yellow-400 transition-colors"
              />
              <select
                className="h-12 rounded-[200px] border-2 border-emerald-700 bg-emerald-800 text-orange-50 px-6 font-founders_grotesk text-base outline-none focus:border-yellow-400 transition-colors appearance-none"
              >
                <option value="" disabled selected>
                  Select Race Category
                </option>
                <option value="full">Full Marathon (42.2km)</option>
                <option value="half">Half Marathon (21.1km)</option>
                <option value="10k">10KM Race</option>
                <option value="5k">5KM Fun Run</option>
              </select>
              <input
                type="tel"
                placeholder="Phone Number"
                className="h-12 rounded-[200px] border-2 border-emerald-700 bg-emerald-800 text-orange-50 placeholder-emerald-400 px-5 font-founders_grotesk text-base outline-none focus:border-yellow-400 transition-colors"
              />
              <button
                type="submit"
                className="mt-2 relative font-semibold items-center bg-yellow-400 shadow-[rgb(12,82,53)_6px_8px_0px_0px] flex h-12 rounded-full border-2 border-emerald-900 text-emerald-900 justify-center font-obviously_narrow uppercase tracking-[0.4px] hover:bg-yellow-300 transition-colors"
              >
                Register &amp; Enter the Raffle
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};