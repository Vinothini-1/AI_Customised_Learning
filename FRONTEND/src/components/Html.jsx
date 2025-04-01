import React from "react";
import "./HtmlLearning.css";

const HtmlLearning = () => {
  const topics = [
    { title: "Introduction to HTML", video: "https://www.youtube.com/embed/UB1O30fR-EE" },
    { title: "HTML Elements", video: "https://www.youtube.com/embed/kUMe1FH4CHE" },
    { title: "HTML Attributes", video: "https://www.youtube.com/embed/3JluqTojuME" },
    { title: "HTML Headings & Paragraphs", video: "https://www.youtube.com/embed/keCKG0nwZSg" },
    { title: "HTML Links & Navigation", video: "https://www.youtube.com/embed/qz0aGYrrlhU" },
    { title: "HTML Lists", video: "https://www.youtube.com/embed/l1EssrLxt7E" },
    { title: "HTML Tables", video: "https://www.youtube.com/embed/G7EIAgfkhmg" },
    { title: "HTML Forms & Input", video: "https://www.youtube.com/embed/zM80cxH9lzA" },
    { title: "HTML Buttons", video: "https://www.youtube.com/embed/HGTJBPNC-Gw" },
    { title: "HTML Images", video: "https://www.youtube.com/embed/9P8mASSREYM" },
    { title: "HTML Audio & Video", video: "https://www.youtube.com/embed/Ggh_y-33Eso" },
    { title: "HTML Semantic Elements", video: "https://www.youtube.com/embed/ZsWRRofr2aI" },
    { title: "HTML Meta Tags", video: "https://www.youtube.com/embed/V40qUamrC0M" },
    { title: "HTML Iframes", video: "https://www.youtube.com/embed/e6KPKp2UIsk" },
    { title: "HTML Forms Validation", video: "https://www.youtube.com/embed/xJaDLXTdbV0" },
    { title: "HTML Data Attributes", video: "https://www.youtube.com/embed/QoMPurG7Ygg" },
    { title: "HTML5 SVG & Canvas", video: "https://www.youtube.com/embed/6qZJrbJkpjU" },
    { title: "HTML Accessibility", video: "https://www.youtube.com/embed/YuR4UW4aUtM" },
    { title: "HTML Responsive Design", video: "https://www.youtube.com/embed/srvUrASNj0s" },
    { title: "HTML CSS Integration", video: "https://www.youtube.com/embed/Y8zMYaD1bz0" },
  ];

  return (
    <div className="container">
      <h1 className="title">HTML Learning Guide</h1>
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
        <p>End of HTML Learning Guide.</p>
      </footer>
    </div>
  );
};

export default HtmlLearning;
