import React from "react";
import "./HtmlLearning.css"; // Reusing the same CSS for glassy effects

const JsLearning = () => {
  const topics = [
    { title: "Introduction to JavaScript", video: "https://www.youtube.com/embed/W6NZfCO5SIk" },
    { title: "JavaScript Variables", video: "https://www.youtube.com/embed/B7wHpNUUT4Y" },
    { title: "JavaScript Data Types", video: "https://www.youtube.com/embed/BaI8dHUthLA" },
    { title: "JavaScript Functions", video: "https://www.youtube.com/embed/hKB-YGF14SY" },
    { title: "JavaScript Objects", video: "https://www.youtube.com/embed/WZNG8UomjSI" },
    { title: "JavaScript Arrays", video: "https://www.youtube.com/embed/Urwzk6ILvPQ" },
    { title: "JavaScript Loops", video: "https://www.youtube.com/embed/qf2YjRzGllg" },
    { title: "JavaScript Events", video: "https://www.youtube.com/embed/JaMCxVWtW58" },
    { title: "JavaScript DOM Manipulation", video: "https://www.youtube.com/embed/y17RuWkWdn8" },
    { title: "JavaScript Promises", video: "https://www.youtube.com/embed/novBIqOnz8I" },
    { title: "JavaScript Async/Await", video: "https://www.youtube.com/embed/V_Kr9OSfDeU" },
    { title: "JavaScript ES6 Features", video: "https://www.youtube.com/embed/NCwa_xi0Uuc" },
    { title: "JavaScript Callbacks", video: "https://www.youtube.com/embed/8aGhZQkoFbQ" },
    { title: "JavaScript Closures", video: "https://www.youtube.com/embed/1JsJx1x35c0" },
    { title: "JavaScript Fetch API", video: "https://www.youtube.com/embed/Vj7NZ6FiQvo" },
    { title: "JavaScript LocalStorage", video: "https://www.youtube.com/embed/w9HibPQfQeI" },
    { title: "JavaScript Error Handling", video: "https://www.youtube.com/embed/Qv7XG-0Ki7U" },
    { title: "JavaScript Modules", video: "https://www.youtube.com/embed/cRHQNNcYf6s" },
    { title: "JavaScript Regular Expressions", video: "https://www.youtube.com/embed/rhzKDrUiJVk" },
    { title: "JavaScript Best Practices", video: "https://www.youtube.com/embed/t9mQuf5lwns" },
  ];

  return (
    <div className="container">
      <h1 className="title">JavaScript Learning Guide</h1>
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
        <p>End of JavaScript Learning Guide.</p>
      </footer>
    </div>
  );
};

export default JsLearning;
