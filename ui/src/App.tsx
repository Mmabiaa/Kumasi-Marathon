import { MarathonNav } from "./sections/MarathonNav";
import { MarathonHero } from "./sections/MarathonHero";
import { MarathonAbout } from "./sections/MarathonAbout";
import { MarathonCategories } from "./sections/MarathonCategories";
import { MarathonRoute } from "./sections/MarathonRoutes";
import { MarathonSchedule } from "./sections/MarathonSchedule";
import { MarathonRegister } from "./sections/MarathonRegister";
import { MarathonSponsors } from "./sections/MarathonSponsor";
import { StorySection } from "./sections/MarathonStory";
import { MarathonContact } from "./sections/MarathonContact";
import { MarathonFooter } from "./sections/MarathonFooter";

export const App = () => {
  return (
    <div className="text-brand-black font-founders_grotesk bg-brand-light">
      <MarathonNav />
      <main>
        <MarathonHero />
        <section id="about"><br /><br />
          <MarathonAbout />
        </section>
        <section id="categories"><br /><br />
          <MarathonCategories />
        </section><br /><br />
        <MarathonRoute />
        <MarathonSchedule /><br /><br />
        <MarathonRegister />
        <section id="sponsors"><br /><br />
          <MarathonSponsors />
        </section>
        <section>
          <StorySection />
        </section>
        <section id="contact"><br /><br />
          <MarathonContact />
        </section>
      </main>
      <MarathonFooter />
    </div>
  );
};