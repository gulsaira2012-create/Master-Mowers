//Home page section will be imported as a component below

import Navbar from "../Components/Navbar";
import BlogSection from "../Components/BlogSection";
import ResourcesSection from "../Components/ResourcesSection";
import Footer from "../Components/Footer";
import Seo from "../Components/Seo";

//then the imported commponent name will be called in the return statement of the Home function as a Tag </>
export default function Blog() {
  return (
    <>
      <Seo
        title="Mower Repairs Brisbane | Ride-on & small engine | Master Mowers"
        description="Brisbane trusted mower repair specialists. Ride-on, push, zero-turn & small engine servicve. Pick-up and delivery available call for a quote."
      />
      <Navbar />
      <BlogSection />
      <ResourcesSection />
      <Footer />
    </>
  );
}
