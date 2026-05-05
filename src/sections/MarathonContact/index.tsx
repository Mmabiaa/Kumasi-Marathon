export const MarathonContact = () => {
  return (
    <section className="relative bg-emerald-900 px-4 py-16 md:px-12 md:py-24 overflow-hidden">
      <div className="pointer-events-none absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-emerald-800 opacity-40" />

      <div className="max-w-[1584px] mx-auto relative z-10 items-center gap-x-5 grid grid-cols-1 md:grid-cols-[repeat(12,1fr)]">
        <div className="md:col-start-1 md:col-end-[span_6]">
          <span className="font-obviously_narrow font-semibold uppercase tracking-[0.4px] text-base text-emerald-400 mb-3">
            Get in Touch
          </span>
          <h2 className="font-obviously_narrow font-bold text-orange-50 text-[clamp(36px,5vw,61px)] leading-none">
            Contact Us
          </h2>
          <p className="font-founders_grotesk text-emerald-200 text-lg leading-relaxed mb-8">
            Have questions about registration, the race route, or sponsorship
            opportunities? Reach out — we are here to help.
          </p>

          <div className="flex flex-col gap-4">
            <a
              href="mailto:info@kumasicitymarathon.com"
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-full bg-yellow-400 border-2 border-emerald-900 flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0c5235"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <span className="font-founders_grotesk text-orange-50 text-lg group-hover:text-yellow-400 transition-colors">
                info@kumasicitymarathon.com
              </span>
            </a>
            <a
              href="tel:+233000000000"
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-500 border-2 border-emerald-900 flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0c5235"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 0 1 4.69 19.79 19.79 0 0 1 22 16.92z" />
                </svg>
              </div>
              <span className="font-founders_grotesk text-orange-50 text-lg group-hover:text-yellow-400 transition-colors">
                +233 XXX XXX XXX
              </span>
            </a>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-800 border-2 border-emerald-700 flex items-center justify-">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#6ee7b7"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-11.8z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <span className="font-founders_grotesk text-emerald-200 text-lg">
                Kumasi, Ashanti Region, Ghana
              </span>
            </div>
          </div>
        </div>

        {/* Right callout */}
        <div className="md:col-start-8 md:col-end-[span_5]">
          <div className="bg-yellow-400 border-2 border-emerald-900 rounded-[20px] shadow-[rgb(12,82,53)_8px_10px_0px_0px] p-8">
            <svg
              className="mb-4"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0c5235"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="8" r="6" />
              <path d="M12 15l-3.39 5.56a1 1 0 0 0 1.63 1.1L12 19l1.76 2.66a1 1 0 0 0 1.63-1.1L12 15z" />
            </svg>
            <h3 className="font-obviously_narrow font-bold uppercase text-emerald-900 text-3xl leading-tight mb-3">
              Don&#39;t Miss the Raffle
            </h3>
            <p className="font-founders_grotesk text-emerald-900 text-base leading-relaxed mb-6">
              Every registered participant is automatically entered into the car
              raffle draw. Register before spots fill up!
            </p>
            <a
              href="#register"
              className="inline-flex relative font-semibold items-center bg-emerald-900 shadow-[rgba(0,0,0,0.3)_4px_6px_0px_0px] px-6 h-12 rounded-full border-2 border-emerald-900 text-orange-50 font-obviously_narrow uppercase tracking-[0.4px] hover:bg-emerald-800 transition-colors"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};