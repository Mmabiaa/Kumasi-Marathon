import { useState, useEffect } from "react";

export const MarathonHero = () => {
  const targetDate = new Date("2026-07-25T05:00:00");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const tick = () => {
      const now = new Date().getTime();
      const diff = targetDate.getTime() - now;
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section className="relative bg-orange-50 overflow-hidden px-4 pt-12 pb-0 md:px-12 md:pt-20">
      {/* Background circle decoration */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-emerald-900 opacity-10" />

      <div className="max-w-[1584px] mx-auto">
        {/* Date badge */}
        <div className="flex justify-center md:justify-start mb-6">
          <span className="inline-flex items-center gap-2 border-2 border-emerald-900 rounded-full px-6 py-2 font-obviously_narrow">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            July 25, 2026 &nbsp;|&nbsp; Kumasi, Ghana
          </span>
        </div>

        {/* Main heading */}
        <div className="text-center md:text-left mb-6">
          <h1 className="font-obviously_narrow font-bold uppercase text-emerald-900 leading-none tracking-tight text-[clamp(48px,10vw,120px)]">
            Kumasi
            <br />
            City
            <br />
            Marathon
            <span className="text-yellow-400"> 2026</span>
          </h1>
        </div>

        {/* Sub-heading */}
        <p className="font-obviously_narrow font-semibold uppercase text-emerald-900 text-[clamp(20px,3.5vw,36px)] tracking-[0.5px]">
          Run the Heart of Ashanti. Win Big.
        </p>

        {/* Prize callout */}
        <div className="flex justify-center md:justify-start mb-10">
          <div className="bg-yellow-400 border-2 border-emerald-900 shadow-[rgb(12,82,53)_6px_8px_0px_0px] rounded-[20px] p-4 flex items-center gap-4">
            <svg
              width="28"
              height="28"
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
            <p className="font-obviously_narrow font-bold uppercase text-emerald-900 tracking-[0.4px] text-lg leading-tigh">
              Register &amp; Win a Brand-New Car in Our Official Raffle!
            </p>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-16">
          <a
            href="#register"
            className="relative font-semibold items-center bg-emerald-500 shadow-[rgb(12,82,53)_6px_8px_0px_0px] flex h-14 rounded-full border-2 border-emerald-900 text-emerald-900 px-8 uppercase tracking-[0.4px] font-obviously_narrow hover:bg-emerald-400 transition-colors"
          >
            Register Now
          </a>
          <a
            href="#schedule"
            className="relative font-semibold items-center bg-yellow-400 shadow-[rgb(12,82,53)_6px_8px_0px_0px] flex h-14 rounded-full border-2 border-emerald-900 text-emerald-900 px-8 uppercase tracking-[0.4px] font-obviously_narrow hover:bg-yellow-300 transition-colors"
          >
            View Schedule
          </a>
        </div>

        {/* Countdown */}
        <div className="bg-emerald-900 rounded-t-[24px] px-6 py-8 md:px-12">
          <p className="font-obviously_narrow font-semibold uppercase text-yellow-400 tracking-[0.4px] text-base text-cent">
            Race Day Countdown
          </p>
          <div className="grid grid-cols-4 gap-3 md:gap-8 max-w-[600px] mx-auto">
            {[
              { label: "Days", value: pad(timeLeft.days) },
              { label: "Hours", value: pad(timeLeft.hours) },
              { label: "Mins", value: pad(timeLeft.minutes) },
              { label: "Secs", value: pad(timeLeft.seconds) },
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col items-center">
                <span className="font-obviously_narrow font-bold text-orange-50 text-[clamp(40px,8vw,80px)] leading-none">
                  {value}
                </span>
                <span className="font-founders_grotesk text-emerald-400 text-sm uppercase tracking-widest mt-1">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};