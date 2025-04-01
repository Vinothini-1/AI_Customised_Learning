import React from "react";
import "./HtmlLearning.css";

const CssLearning = () => {
  const topics = [
    { title: "Introduction to CSS", video: "https://www.youtube.com/embed/yfoY53QXEnI" },
    { title: "CSS Selectors", video: "https://www.youtube.com/embed/nl49FvA_5eM" },
    { title: "CSS Box Model", video: "https://www.youtube.com/embed/rIO5326FgPE" },
    { title: "CSS Flexbox", video: "https://www.youtube.com/embed/fYq5PXgSsbE" },
    { title: "CSS Grid", video: "https://www.youtube.com/embed/0xMQfnTU6oo" },
    { title: "CSS Positioning", video: "https://www.youtube.com/embed/jx5jmI0UlXU" },
    { title: "CSS Animations", video: "https://www.youtube.com/embed/YszONjKpgg4" },
    { title: "CSS Transitions", video: "https://www.youtube.com/embed/KkzVFB3Ba_o" },
    { title: "CSS Variables", video: "https://www.youtube.com/embed/nZ1bq0Jb9XE" },
    { title: "CSS Media Queries", video: "https://www.youtube.com/embed/ZYV6dYtz4HA" },
    { title: "CSS Transformations", video: "https://www.youtube.com/embed/OXGznpKZ_sA" },
    { title: "CSS Pseudo Elements", video: "https://www.youtube.com/embed/TrhLnID1Krg" },
    { title: "CSS Pseudo Classes", video: "https://www.youtube.com/embed/NKXGL3Xs6qk" },
    { title: "CSS Shadows & Filters", video: "https://www.youtube.com/embed/D5_IpEv1BbI" },
    { title: "CSS Gradients", video: "https://www.youtube.com/embed/tHOnK3r9MAQ" },
    { title: "CSS Z-Index", video: "https://www.youtube.com/embed/xYr6Hc6kzSg" },
    { title: "CSS Grid vs Flexbox", video: "https://www.youtube.com/embed/3elGSZSWTbM" },
    { title: "CSS Best Practices", video: "https://www.youtube.com/embed/TZDU6iRtpkk" },
    { title: "CSS Responsive Design", video: "https://www.youtube.com/embed/srvUrASNj0s" },
    { title: "CSS and JavaScript Integration", video: "https://www.youtube.com/embed/Y8zMYaD1bz0" },
  ];

  return (
    <div className="container">
      <h1 className="title">CSS Learning Guide</h1>
      {topics.map((topic, index) => (
        <section key={index} className="topic-section">
          <h2>{index + 1}. {topic.title}</h2>
          <p>This section covers {topic.title}, explaining its usage, syntax, and real-world applications.</p>
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src={topic.video}
              title={topic.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="details-text">
            {Array(10).fill(`Detailed explanation for ${topic.title}. Learn about its importance, syntax, examples, and how it is used in real-world applications. `).join("\n")}
          </p>
        </section>
      ))}
      <footer className="footer">
        <p>End of CSS Learning Guide.</p>
      </footer>
    </div>
  );
};

export default CssLearning;
