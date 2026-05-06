import "../Assets/CSS/Components/resourcesSection.css";
import { Link } from "react-router-dom";
import blogImage from "../Assets/Images/repairingshop.webp";
import mower1 from "../Assets/Images/mower1.webp";
// Later, add these back when you need more cards:
import mower2 from "../Assets/Images/mower2.webp";
// import mower3 from "../Assets/Images/mower3.webp";

export default function ResourcesSection() {
  const resources = [
    {
      image: blogImage,
      tag: "Repair Tips",
      title: "Why Your Mower Won't Start - and How to Fix It Fast in Brisbane",
      link: "/blog/five-signs-your-lawn-mower-needs-a-service",
    },

    {
      image: mower2,
      tag: "Maintenance",
      title: "How Regular Servicing Keeps Your Mower Running Longer",
      link: "/blog",
    },
    // {
    //   image: mower3,
    //   tag: "Small Engines",
    //   time: "6 min read",
    //   title: "Why Small Engine Problems Shouldn’t Be Ignored",
    //   link: "/blog",
    // },
  ];

  return (
    <section className="resourcesSection">
      <div className="resourcesContainer">
        <div className="resourcesHeader">
          <h2>
            Resources For <br />
            Mower Owners
          </h2>
        </div>

        <div className="resourcesGrid">
          {resources.map((item, index) => (
            <article className="resourceCard" key={index}>
              <Link to={item.link} className="resourceCardLink">
                <div className="resourceImageWrap">
                  <img src={item.image} alt={item.title} />
                </div>

                <div className="resourceContent">
                  <div className="resourceMeta">
                    <span className={`resourceTag tagStyle${index + 1}`}>
                      {item.tag}
                    </span>
                    <span>{item.time}</span>
                  </div>

                  <h3>{item.title}</h3>

                  <div className="resourceLink">
                    Read More <span>-&gt;</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
