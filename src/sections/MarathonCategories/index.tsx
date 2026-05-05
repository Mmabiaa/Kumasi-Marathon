const categories = [
  {
    label: "Full Marathon",
    distance: "42.2km",
    color: "bg-emerald-900",
    textColor: "text-orange-50",
    accentColor: "text-yellow-400",
    borderColor: "border-emerald-900",
    desc: "The ultimate test of endurance. Run the full course through the iconic streets of Kumasi.",
  },
  {
    label: "Half Marathon",
    distance: "21.1km",
    color: "bg-yellow-400",
    textColor: "text-emerald-900",
    accentColor: "text-emerald-900",
    borderColor: "border-emerald-900",
    desc: "Challenge yourself on the half-distance route with full race-day atmosphere.",
  },
  {
    label: "10KM Race",
    distance: "10km",
    color: "bg-emerald-500",
    textColor: "text-emerald-900",
    accentColor: "text-emerald-900",
    borderColor: "border-emerald-900",
    desc: "A competitive 10KM course perfect for seasoned and intermediate runners alike.",
  },
  {
    label: "5KM Fun Run",
    distance: "5km",
    color: "bg-orange-50",
    textColor: "text-emerald-900",
    accentColor: "text-emerald-900",
    borderColor: "border-emerald-900",
    desc: "Open to all ages and fitness levels. Bring the family and enjoy the energy of race day.",
  },
];

export const MarathonCategories = () => {
  return (
    <section className="bg-white px-4 py-16 md:px-12 md:py-24">
      <div className="max-w-[1584px] mx-auto">
        <div className="text-center mb-12">
          <span className="font-obviously_narrow font-semibold uppercase tracking-[0.4px] text-base text-emerald-500 mb-3">
            Race Categories
          </span>
          <h2 className="font-obviously_narrow font-bold uppercase text-emerald-900 text-[clamp(36px,5vw,61px)] leading-none">
            Choose Your Challenge
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {categories.map(
            ({
              label,
              distance,
              color,
              textColor,
              accentColor,
              borderColor,
              desc,
            }) => (
              <div
                key={label}
                className={`${color} ${textColor} border-2 ${borderColor} rounded-[20px] shadow-[rgb(12,82,53)_6px_8px_0px_0px] p-8 flex flex-col min-h-[380px]`}
              >
                <span
                  className={`font-obviously_narrow font-bold uppercase text-[clamp(52px,8vw,72px)] leading-none ${accentColor}`}
                >
                  {distance}
                </span>
                <h3
                  className={`font-obviously_narrow font-bold uppercase text-2xl leading-tight mb-4`}
                >
                  {label}
                </h3>
                <p className="font-founders_grotesk text-sm leading-relaxed flex-1 opacity-80">
                  {desc}
                </p>
                <a
                  href="#register"
                  className={`mt-6 inline-flex items-center justify-center h-10 border-2 border-current rounded-[200px] px-6 font-obviously_narrow font-bold uppercase tracking-[0.3px] text-sm hover:bg-white hover:text-emerald-900 transition-colors`}
                >
                  Register
                </a>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};