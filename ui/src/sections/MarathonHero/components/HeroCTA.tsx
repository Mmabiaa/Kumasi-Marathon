export const HeroCta = () => {
  return (
    <div className="items-start box-border caret-transparent gap-x-3 flex flex-col justify-normal outline-[3px] gap-y-5 text-start">
      <a
        href="/classes/"
        className="relative font-semibold items-center bg-brand-blue text-brand-white shadow-[rgb(0,0,0)_6px_8px_0px_0px] box-border caret-transparent flex h-14 rounded-full border-2 border-brand-black px-8 uppercase tracking-[0.4px] font-obviously_narrow hover:opacity-90 transition-opacity"
      >
        <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-start md:text-center">
          Group Lessons
        </span>
      </a>
      <a
        href="/private-lessons/"
        className="relative font-semibold items-center bg-brand-white text-brand-black shadow-[rgb(0,0,0)_6px_8px_0px_0px] box-border caret-transparent flex h-14 rounded-full border-2 border-brand-black px-8 uppercase tracking-[0.4px] font-obviously_narrow hover:bg-brand-light transition-colors"
      >
        <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-start md:text-center">
          Private Lessons
        </span>
      </a>
    </div>
  );
};
