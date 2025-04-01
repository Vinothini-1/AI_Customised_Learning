import React from "react";
import "./HtmlLearning.css"; // Using the same CSS for glassy effect

const ReactLearning = () => {
  const topics = [
    { title: "Introduction to React", video: "https://www.youtube.com/embed/N3AkSS5hXMA" },
    { title: "JSX & Components", video: "https://www.youtube.com/embed/Ke90Tje7VS0" },
    { title: "Props & State", video: "https://www.youtube.com/embed/0sasRxl35_8" },
    { title: "React Hooks", video: "https://www.youtube.com/embed/dpw9EHDh2bM" },
    { title: "React Router", video: "https://www.youtube.com/embed/Ul3y1LXxzdU" },
    { title: "React Forms", video: "https://www.youtube.com/embed/IkMND33x0qQ" },
    { title: "React Context API", video: "https://www.youtube.com/embed/35lXWvCuM8o" },
    { title: "React Redux", video: "https://www.youtube.com/embed/zrs7u6bdbUw" },
    { title: "React Lifecycle Methods", video: "https://www.youtube.com/embed/0MljIzq_b4g" },
    { title: "React Performance Optimization", video: "https://www.youtube.com/embed/TY8X7Zc1zUg" },
    { title: "React with APIs", video: "https://www.youtube.com/embed/5qoqff4TbJ4" },
    { title: "React Error Boundaries", video: "https://www.youtube.com/embed/aFkj3Ci0Q1k" },
    { title: "React Suspense & Lazy Loading", video: "https://www.youtube.com/embed/Czg5QnGY1tE" },
    { title: "React Testing", video: "https://www.youtube.com/embed/3e1GHCA3GP0" },
    { title: "React Animations", video: "https://www.youtube.com/embed/GpO76SkpaWQ" },
    { title: "Next.js Introduction", video: "https://www.youtube.com/embed/Sklc_fQBmcs" },
    { title: "React Deployment", video: "https://www.youtube.com/embed/gzmip4QdXwA" },
    { title: "React with TypeScript", video: "https://www.youtube.com/embed/Z5iWr6Srsj8" },
    { title: "React Best Practices", video: "https://www.youtube.com/embed/EKQp9zKGUqg" },
    { title: "Advanced React Patterns", video: "https://www.youtube.com/embed/koWqdEACyLI" },
  ];

  return (
    <div className="container">
      <h1 className="title">React Learning Guide</h1>
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
        <p>End of React Learning Guide.</p>
      </footer>
    </div>
  );
};

export default ReactLearning;
