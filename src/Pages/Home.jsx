//Home page section will be imported as a component below

import Navbar from "../Components/Navbar";
import FusionHero from "../Components/FusionHero";
import About from "../Components/About";
import WhyChooseUs  from "../Components/WhyChooseUs";
import Services  from "../Components/Services";
import FAQ from "../Components/FAQ";
import Footer from "../Components/Footer"
// import AnimatedTestimonials from "../Components/AnimatedTestimonials";
import BrandMarquee from "../Components/BrandMarquee";
import FinanceHero from "../Components/FinanceHero";
import Seo from "../Components/Seo"

//then the imported commponent name will be called in the return statement of the Home function as a Tag </>
export default function Home() {
  return (
    <>
      <Seo
        title="Master Mowers Brisbane"
        description="Professional lawn mower and equipment repair specialists across Brisbane and Logan. Fast turnaround, honest pricing, servicing, tune-ups & quality second-hand mowers."
      />
      <Navbar />
      <FusionHero />
      <About />
      <Services/>
      <BrandMarquee/>
      <WhyChooseUs />
      {/* <AnimatedTestimonials /> */}
      <FAQ />
      <FinanceHero/>
      <Footer />
    </>
  );
}
