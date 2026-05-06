import "../Assets/CSS/Components/blogContent.css";

import blogHero from "../Assets/Images/repairingshop.webp";
import authorImg from "../Assets/Images/Logo.webp";
import Footer from "./Footer";
import Navbar from "./Navbar";
import tiktoikIcon from "../Assets/Images/icons/tik-tok.png";
import Seo from "./Seo";
import { Link } from "react-router-dom";

export default function BlogContent() {
  const reasons = [
    {
      title: "1. Old or Stale Fuel",
      text: "This is one of the most common reasons a mower will not start, especially after sitting in the shed for a while. Petrol can degrade and leave sticky residue inside the carburettor.",
      fix: "Drain the old fuel and refill with fresh unleaded petrol. If it still will not start, the carburettor may need cleaning or rebuilding.",
    },
    {
      title: "2. A Dirty or Blocked Carburettor",
      text: "The carburettor mixes air and fuel for combustion. If it is blocked, the engine may crank but not fire, start then die, or run rough.",
      fix: (
        <>
          A proper <Link to="/services">carburettor clean</Link> may require
          removal, disassembly, and clearing internal blockages.
        </>
      ),
    },
    {
      title: "3. A Faulty or Fouled Spark Plug",
      text: "The spark plug creates the spark that starts combustion. If it is worn, dirty, cracked, or covered in carbon build-up, the mower may not start.",
      fix: "Remove and inspect the spark plug. If the tip is black, worn, or damaged, replace it.",
    },
    {
      title: "4. A Clogged Air Filter",
      text: "A mower engine needs clean airflow to run properly. A blocked air filter can make the mower hard to start or cause it to run poorly.",
      fix: "Check the air filter. Replace paper filters if dirty. Foam filters can often be cleaned and re-oiled.",
    },
    {
      title: "5. Low Oil Level",
      text: "Some modern mowers have a low-oil safety shutoff that stops the engine from starting when the oil level is too low.",
      fix: "Check the oil level with the dipstick and top it up with the correct oil grade if needed.",
    },
    {
      title: "6. Faulty Pull Cord or Starter Mechanism",
      text: "If the pull cord feels loose, snaps back hard, or does not engage, the issue may be with the recoil starter rather than the engine.",
      fix: (
  <>
    Inspect the pull cord for fraying or damage. Starter mechanism
    repairs are usually best handled by a{" "}
    <Link to="/services">workshop</Link>.
  </>
),
    },
  ];

  const faqs = [
    {
      question: "Why does my mower start and then cut out straight away?",
      answer:
        "This is usually caused by a fuel or carburettor issue. A partially blocked carburettor may allow enough fuel to start the engine, but not enough to keep it running.",
    },
    {
      question: "Can I use any unleaded petrol in my lawn mower?",
      answer:
        "Most petrol mowers can use standard 91 or 95 RON unleaded petrol. It is best to avoid ethanol-blended fuels where possible because they can degrade faster in storage.",
    },
    {
      question: "How much does it cost to fix a mower that will not start in Brisbane?",
      answer:
        "It depends on the cause. A spark plug is usually inexpensive, while carburettor cleaning or rebuilding can cost more. Master Mowers provides a quote before doing repair work.",
    },
  ];

  return (
    <>
      <Seo
        title="Why Your Mower Won't Start — Fix It Fast in Brisbane | Master Mowers"
        description="Mower won't start in Brisbane? Learn the 6 most common causes and how to fix them fast. Free inspections available at Master Mowers, Meadowbrook."
      />
      <Navbar />
      <main className="blogContentPage">
      <section className="blogHeroSection">
        <div className="blogHeroImage">
          <img src={blogHero} alt="Lawn mower repair workshop" />
        </div>

        <div className="authorFloatingCard">
          <div className="authorInfo">
            <img src={authorImg} alt="Master Mowers team member" />
            <div>
              <strong>Master Mowers</strong>
              <span>Small Engine Repair</span>
            </div>
          </div>

          <div className="blogSocials">
            <a href="https://www.facebook.com/profile.php?id=61587786345974" aria-label="Facebook">
              f
            </a>
            <a href="https://www.tiktok.com/@mastermowers1" aria-label="TikTok">
              <img src={tiktoikIcon} alt="" className="blogSocialIcon" />
            </a>
          </div>
        </div>

        <div className="blogTitleCard">
          <div className="blogMeta">
            <span>Repair Tips</span>
            {/* <p>6 min read</p> */}
          </div>

          <h1>Why Your Mower Won&apos;t Start and How to Fix It Fast in Brisbane</h1>
        </div>
      </section>

      <article className="blogArticle">
        <section className="blogArticleBlock">
          <h2>Why Your Mower Will Not Start</h2>
          <p>
            It is a Sunday morning. The lawn is overdue. You pull the cord and
            nothing happens. You try again, and still nothing. For Brisbane
            homeowners, this is one of the most frustrating mower problems,
            especially when the grass keeps growing fast.
          </p>
          <p>
            The good news is that a mower that will not start is usually not a
            write-off. In many cases, the cause is one of a few common problems
            that can be diagnosed quickly.
          </p>
        </section>

        <section className="blogArticleBlock">
          <h2>6 Reasons Your Mower Won&apos;t Start</h2>

          <div className="reasonList">
            {reasons.map((item, index) => (
              <div className="reasonItem" key={index}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <p>
                  <strong>What to do:</strong> {item.fix}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="blogArticleBlock">
          <h2>When Should You Stop DIY-ing and Bring It In?</h2>
          <p>
            It is always worth checking the basics first, like fresh fuel, a new
            spark plug, and a clean air filter. But if you have worked through
            those checks and your mower still will not start, it is time to see
            a <Link to="/home">professional</Link>.
          </p>

          <ul>
            <li>The engine cranks but never fires.</li>
            <li>You can smell fuel strongly.</li>
            <li>There is visible damage to the pull cord mechanism.</li>
            <li>The mower starts and cuts out immediately.</li>
            <li>You hear unusual knocking or grinding.</li>
          </ul>
        </section>

        <section className="blogCtaBox">
          <h2>Free Mower Inspections at Master Mowers, Meadowbrook</h2>
          <p>
            At <Link to="/home">Master Mowers</Link>, we offer free mower inspections at our Meadowbrook
            workshop. If your mower will not start and you are not sure why,
            bring it in and we will diagnose the problem at no charge.
          </p>

          <div className="ctaDetails">
            <span>📍 Meadowbrook, Brisbane Southside</span>
            <span>📞 0456 496 787</span>
            <span>🌐 mastermowers.com.au</span>
          </div>

          <a href="/contact" className="blogCtaButton">
            Book Free Inspection
          </a>
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
