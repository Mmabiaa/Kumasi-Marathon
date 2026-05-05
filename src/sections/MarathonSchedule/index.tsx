const schedule = [
  { time: "5:00 AM", event: "Warm-up", highlight: false },
  { time: "5:30 AM", event: "Full Marathon Start", highlight: true },
  { time: "6:00 AM", event: "Half Marathon Start", highlight: true },
  { time: "6:30 AM", event: "10KM Race Start", highlight: true },
  { time: "7:00 AM", event: "5KM Fun Run Start", highlight: true },
  { time: "10:00 AM", event: "Awards Ceremony", highlight: false },
  {
    time: "After Awards",
    event: "Car Raffle Draw",
    highlight: false,
    special: true,
  },
];

export const MarathonSchedule = () => {
  return (
    <section
      id="schedule"
      className="bg-emerald-900 px-4 py-16 md:px-12 md:py-24 overflow-hidden relative"
    >
      {/* bg decoration */}
      <div className="pointer-events-none absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full border-[60px] border-emerald-800 opacity-30" />

      <div className="max-w-[1584px] mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="font-obviously_narrow font-semibold uppercase tracking-[0.4px] text-base text-emerald-400 mb-3">
            Event Schedule
          </span>
          <h2 className="font-obviously_narrow font-bold uppercase text-orange-50 text-[clamp(36px,5vw,61px)] leading-none">
            Race Day — July 25, 2026
          </h2>
        </div>

        <div className="max-w-[720px] mx-auto space-y-3">
          {schedule.map(({ time, event, highlight, special }, i) => (
            <div
              key={i}
              className={`flex items-center gap-5 rounded-[16px] border-2 px-6 py-4 transition-all ${
                special
                  ? "bg-yellow-400 border-yellow-400 shadow-[rgba(255,220,0,0.4)_0px_0px_24px]"
                  : highlight
                  ? "bg-emerald-800 border-emerald-700"
                  : "bg-transparent border-emerald-700"
              }`}
            >
              <span
                className={`font-obviously_narrow font-bold text-xl w-[110px] shrink-0 ${special ? "text-emerald-900" : "text-orange-50"}`}
              >
                {time}
              </span>
              <div
                className={`h-px flex-1 border-t-2 border-dashed ${special ? "border-emerald-700" : "border-emerald-700"}`}
              />
              <span
                className={`font-obviously_narrow font-bold uppercase tracking-[0.4px] text-lg text-right ${special ? "text-emerald-900" : "text-orange-50"}`}
              >
                {event}
              </span>
              {special && (
                <svg
                  className="shrink-0 text-emerald-900"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="8" r="6" />
                  <path d="M12 15l-3.39 5.56a1 1 0 0 0 1.63 1.1L12 19l1.76 2.66a1 1 0 0 0 1.63-1.1L12 15z" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};