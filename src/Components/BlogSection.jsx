import "../Assets/CSS/Components/BlogSection.css";
import blogImage from "../Assets/Images/repairingshop.webp";

export default function BlogSection() {
  const sidePosts = [
    {
      tag: "Repair Tips",
      // time: "4 min read",
      title: "Why Your Mower Won't Start — and How to Fix It Fast in Brisbane",
    },
    {
      tag: "Repair Guide",
      // time: "5 min read",
      title: "Ride-On Mower Repair in Brisbane: What to Expect and How Much It Costs",
    },
  ];

  return (
    <section className="blogSection">
      <div className="blogContainer">
        <div className="blogHeader">
          <h2>
            Latest Mower Repair <br />
            Tips and Advice
          </h2>
        </div>

        <div className="blogGrid">
          <article className="featuredBlog">
            <img src={blogImage} alt="Mower repair tips" />

            <div className="featuredOverlay">
              <div className="blogMeta">
                <span className="tagLight">Mower Repairs</span>
                <span>6 min read</span>
              </div>

              <h3>
                Why Regular Lawn Mower Servicing Keeps Your Equipment Running
                Longer.
              </h3>

              <a href="/blog" className="readMore">
                Read More <span>→</span>
              </a>
            </div>
          </article>

          <div className="sideBlogs">
            {sidePosts.map((post, index) => (
              <article className="sideBlogCard" key={index}>
                <div className="sideMeta">
                  <span className="tagDark">{post.tag}</span>
                  <span>{post.time}</span>
                </div>

                <h3>{post.title}</h3>

                <a href="/blog" className="arrowBtn" aria-label="Read blog post">
                  →
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
