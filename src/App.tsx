import { MarathonNav } from "@/sections/MarathonNav";
import { MarathonHero } from "@/sections/MarathonHero";
import { MarathonAbout } from "@/sections/MarathonAbout";
import { MarathonCategories } from "@/sections/MarathonCategories";
import { MarathonRoute } from "@/sections/MarathonRoute";
import { MarathonSchedule } from "@/sections/MarathonSchedule";
import { MarathonRegister } from "@/sections/MarathonRegister";
import { MarathonSponsors } from "@/sections/MarathonSponsors";
import { MarathonContact } from "@/sections/MarathonContact";
import { MarathonFooter } from "@/sections/MarathonFooter";

export const App = () => {
  return (
    <div className="text-emerald-900 font-founders_grotesk bg-orange-50">
      <MarathonNav />
      <main>
        <MarathonHero />
        <section id="about">
          <MarathonAbout />
        </section>
        <section id="categories">
          <MarathonCategories />
        </section>
        <MarathonRoute />
        <MarathonSchedule />
        <MarathonRegister />
        <section id="sponsors">
          <MarathonSponsors />
        </section>
        <section id="contact">
          <MarathonContact />
        </section>
      </main>
      <MarathonFooter />
    </div>
  );
};