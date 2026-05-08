import "../Assets/CSS/Components/blogContent2.css";

import blogHero from "../Assets/Images/rideon.webp";
import authorImg from "../Assets/Images/Logo.webp";
import Footer from "./Footer";
import Navbar from "./Navbar";
import tiktoikIcon from "../Assets/Images/icons/tik-tok.png";
import telephoneIconSrc from "../Assets/Images/icons/telephone.png";
import Seo from "./Seo";
import { Link } from "react-router-dom";

export default function BlogContent2() {
  const repairs = [
    {
      title: "1. Engine Won’t Start or Hard to Start",
      cost: "Typical cost: $80 – $180",
      text: "This is one of the most common ride-on mower problems. It is usually caused by stale fuel, a blocked carburettor, a worn spark plug, or a faulty ignition system.",
      fix: (
        <>
          Drain old fuel, clean or rebuild the{" "}
          <Link to="/services">carburettor</Link>, replace spark plugs, and
          inspect fuel lines and filters.
        </>
      ),
    },
    {
      title: "2. Cutting Deck Problems",
      cost: "Typical cost: $100 – $250",
      text: "If your ride-on is leaving strips of uncut grass, scalping your lawn, or the blades are not spinning when engaged, the issue is usually with the cutting deck.",
      fix: "Inspect and sharpen or replace blades, check deck levelness, replace belts and tensioners, and test PTO clutch operation.",
    },
    {
      title: "3. Drive Belt or Transmission Problems",
      cost: "Typical cost: $120 – $300",
      text: "If your ride-on moves slowly, will not move at all, or makes a squealing noise while driving, the drive belt or transmission may be the problem.",
      fix: "Inspect and replace drive belts, check transmission fluid levels, and assess transmission wear on hydrostatic models.",
    },
    {
      title: "4. Battery and Electrical Faults",
      cost: "Typical cost: $60 – $200",
      text: "Ride-on mowers use batteries for starting and often include safety switches throughout the machine. A flat battery, faulty solenoid, or triggered safety switch can stop the mower from operating.",
      fix: "Test battery health, check the charging system, and inspect solenoids and safety switches where needed.",
    },
    {
      title: "5. Steering Problems",
      cost: "Typical cost: $150 – $400",
      text: "Stiff steering, pulling to one side, or loose steering on a ride-on mower can become a safety issue. Zero-turn mower steering can be more complex because it often involves hydraulic drive systems.",
      fix: (
        <>
          Inspect steering linkages, check worn tie rod ends, and assess the{" "}
          <Link to="/services">zero-turn mower</Link> hydraulic drive system.
        </>
      ),
    },
    {
      title: "6. Oil Leaks and Engine Wear",
      cost: "Typical cost: $100 – $500+",
      text: "Oil leaks are usually caused by worn gaskets or seals. If ignored, low oil or oil starvation can lead to serious internal engine damage.",
      fix: "Identify the leak source, replace gaskets and seals, perform an oil service, and assess the engine condition.",
    },
    {
      title: "7. Annual Service / Full Tune-Up",
      cost: "Typical cost: $120 – $220",
      text: "The best way to avoid expensive ride-on mower repairs is regular servicing. A full service keeps the engine, blades, belts, deck, battery, and safety systems working properly.",
      fix: "Service your ride-on mower at least once per year, ideally before Brisbane’s busy spring and summer mowing season.",
    },
  ];

  const faqs = [
    {
      question: "How long does a ride-on mower repair take in Brisbane?",
      answer:
        "Most common repairs such as carburettor cleans, belt replacements, blade services, and electrical faults are completed within 2–5 business days. During peak season, the workshop may be busier, so it is best to bring your mower in early.",
    },
    {
      question: "Do you repair all brands of ride-on mowers?",
      answer:
        "Yes. Master Mowers works on major brands including Honda, Husqvarna, John Deere, Toro, Exmark, Victa, Rover, Ferris, Kubota, and many mowers powered by Briggs & Stratton, Kawasaki, or Kohler engines.",
    },
    {
      question: "Can you pick up my ride-on mower for repair in Brisbane?",
      answer:
        "Master Mowers is based in Meadowbrook and most customers bring their mowers directly to the workshop. If you cannot transport your ride-on mower, call 0456 496 787 to discuss possible options.",
    },
  ];

  return (
    <>
      <Seo
        title="Ride-On Mower Repair Brisbane: Costs & What to Expect | Master Mowers"
        description="Wondering what ride-on mower repairs cost in Brisbane? Get honest pricing, common repairs explained, and book a free inspection at Master Mowers Meadowbrook."
      />

      <Navbar />

      <main className="blogContentPage">
        <section className="blogHeroSection">
          <div className="blogHeroImage">
            <img src={blogHero} alt="Ride-on mower repair workshop in Brisbane" />
          </div>

          <div className="authorFloatingCard">
            <div className="authorInfo">
              <img src={authorImg} alt="Master Mowers logo" />
              <div>
                <strong>Master Mowers</strong>
                <span>Ride-On Mower Repair</span>
              </div>
            </div>

            <div className="blogSocials">
              <a
                href="https://www.facebook.com/profile.php?id=61587786345974"
                aria-label="Facebook"
              >
                f
              </a>

              <a
                href="https://www.tiktok.com/@mastermowers1"
                aria-label="TikTok"
              >
                <img src={tiktoikIcon} alt="" className="blogSocialIcon" />
              </a>
            </div>
          </div>

          <div className="blogTitleCard">
            <div className="blogMeta">
              <span>Repair Guide</span>
              {/* <p>6 min read</p> */}
            </div>

            <h1>
              Ride-On Mower Repair in Brisbane: What to Expect and How Much It
              Costs
            </h1>
          </div>
        </section>

        <article className="blogArticle">
          <section className="blogArticleBlock">
            <h2>Ride-On Mower Repair in Brisbane</h2>

            <p>
              If you own a ride-on mower in Brisbane, you already know how
              valuable it is, especially if you are managing a large block,
              running a lawn care business, or maintaining a property in South
              East Queensland.
            </p>

            <p>
              But when something goes wrong, the first question most people ask
              is simple: how much is this going to cost? The honest answer is
              that ride-on mower repair costs vary depending on the problem,
              brand, age, and condition of the machine.
            </p>

            <p>
              The good news is that most repairs are far more affordable than
              people expect and usually much cheaper than replacing the mower
              altogether.
            </p>
          </section>

          <section className="blogArticleBlock">
            <h2>What Makes Ride-On Mower Repairs Different?</h2>

            <p>
              Ride-on mowers are more complex than push mowers. They have larger
              engines, more moving parts, drive systems, cutting decks with
              multiple blades, and in the case of zero-turn models, hydraulic
              systems too.
            </p>

            <ul>
              <li>Diagnosis usually takes longer and requires more experience.</li>
              <li>Some parts are harder to source and can cost more.</li>
              <li>Labour time is generally higher for major repairs.</li>
              <li>
                Not every mower workshop has experience with all brands and
                models.
              </li>
            </ul>

            <p>
              That said, many common ride-on mower problems are straightforward
              for an experienced small engine mechanic to fix. The key is
              catching issues early before they become expensive.
            </p>
          </section>

          <section className="blogArticleBlock">
            <h2>The 7 Most Common Ride-On Mower Repairs</h2>

            <div className="reasonList">
              {repairs.map((item, index) => (
                <div className="reasonItem" key={index}>
                  <h3>{item.title}</h3>
                  <p>
                    <strong>{item.cost}</strong>
                  </p>
                  <p>{item.text}</p>
                  <p>
                    <strong>What we do:</strong> {item.fix}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="blogArticleBlock">
            <h2>What Affects the Final Repair Cost?</h2>

            <p>
              Several factors influence how much your ride-on mower repair will
              cost. Brand and model matter because parts for major brands are
              usually easier to source, while older or less common machines may
              take longer.
            </p>

            <p>
              The age of the mower also matters. Older machines may have worn
              parts throughout, and a mechanic may find extra issues during the
              repair. How long the problem has been ignored can also affect the
              final price.
            </p>

            <p>
              A small carburettor issue caught early can be affordable. Left too
              long, it can lead to bigger engine problems. At Master Mowers, we
              always provide a quote before starting repair work.
            </p>
          </section>

          <section className="blogArticleBlock">
            <h2>Should You Repair or Replace Your Ride-On Mower?</h2>

            <p>
              This depends on the mower’s age, brand, condition, and the repair
              cost compared to its value. As a general rule, if the repair costs
              less than 50% of what a comparable used mower would cost, repairing
              it often makes sense.
            </p>

            <ul>
              <li>If the repair is minor, repairing is usually worthwhile.</li>
              <li>
                If the engine is seized or there is major structural damage,
                replacement may make more sense.
              </li>
              <li>
                If the mower is a quality brand and less than 10 years old, it is
                often worth repairing.
              </li>
            </ul>

            <p>
              At <Link to="/home">Master Mowers</Link> we give honest advice. If a repair is not worth
              doing, we will tell you.
            </p>
          </section>

          <section className="blogCtaBox">
            <h2>Free Ride-On Mower Inspection at Master Mowers</h2>

            <p>
              Not sure what is wrong with your ride-on mower or whether it is
              worth fixing? Bring it to Master Mowers for a{" "}
              <Link to="/contact">free mower inspection</Link> at our
              Meadowbrook workshop.
            </p>

            <p>
              We service and repair major ride-on mower brands including Honda,
              Husqvarna, John Deere, Victa, Rover, Toro, Exmark, Ferris, Kubota,
              and Briggs & Stratton engines.
            </p>

            <div className="ctaDetails">
              <span>📍 7 Faculty Circuit, Meadowbrook QLD 4131</span>
              <span>
                <PhoneIcon />
                <a className="mm-contactLink" href="tel:+61456496787">
                  {" "}
                  +61 456 496 787
                </a>
              </span>
              <span>🌐 mastermowers.com.au</span>
              <span>✉️ mastermowersbris@gmail.com</span>
            </div>

            <Link to="/contact" className="blogCtaButton">
              Book Free Inspection
            </Link>
          </section>

          <section className="blogFaqSection">
            <div className="faqHeader">
              <span>FAQ</span>
              <h2>Frequently Asked Questions</h2>
            </div>

            <div className="faqList">
              {faqs.map((faq, index) => (
                <details className="faqItem" key={index}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}

const PhoneIcon = () => (
  <span>
    <img src={telephoneIconSrc} alt="Telephone" width="18" height="18" />
  </span>
);