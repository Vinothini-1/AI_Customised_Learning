import React from "react";
import "./HtmlLearning.css"; // Using the same stylish CSS

const NodeLearning = () => {
  const topics = [
    { title: "Introduction to Node.js", video: "https://www.youtube.com/embed/TlB_eWDSMt4" },
    { title: "Node.js Modules", video: "https://www.youtube.com/embed/xHLd36QoS4k" },
    { title: "Node.js File System", video: "https://www.youtube.com/embed/uVwtVBpw7RQ" },
    { title: "Node.js HTTP Module", video: "https://www.youtube.com/embed/VShtPwEkDD0" },
    { title: "Express.js Basics", video: "https://www.youtube.com/embed/L72fhGm1tfE" },
    { title: "Routing in Express.js", video: "https://www.youtube.com/embed/3dSKY1K3v8U" },
    { title: "Middleware in Express.js", video: "https://www.youtube.com/embed/23x1T5i5z4A" },
    { title: "Node.js & MongoDB", video: "https://www.youtube.com/embed/9ofjl1P3h9M" },
    { title: "REST API with Node.js", video: "https://www.youtube.com/embed/pKd0Rpw7O48" },
    { title: "Authentication in Node.js", video: "https://www.youtube.com/embed/2PPSXonhIck" },
    { title: "WebSockets with Node.js", video: "https://www.youtube.com/embed/ZKEqqIO7n-k" },
    { title: "Node.js Streams", video: "https://www.youtube.com/embed/qsaWvR4lSlw" },
    { title: "Node.js Error Handling", video: "https://www.youtube.com/embed/F1rZTx7BoYw" },
    { title: "Node.js Debugging", video: "https://www.youtube.com/embed/1wXYbAqpiF4" },
    { title: "Deploying Node.js Apps", video: "https://www.youtube.com/embed/FoJqLj1_2jU" },
    { title: "Performance Optimization", video: "https://www.youtube.com/embed/HiLa_84yo5M" },
    { title: "Node.js Event Loop", video: "https://www.youtube.com/embed/8aGhZQkoFbQ" },
    { title: "Node.js Security Best Practices", video: "https://www.youtube.com/embed/uEDL5pFOhx0" },
    { title: "Node.js CLI Apps", video: "https://www.youtube.com/embed/-iSCpPGeIcE" },
    { title: "GraphQL with Node.js", video: "https://www.youtube.com/embed/1NrHkjlWVhM" },
  ];

  return (
    <div className="container">
      <h1 className="title">Node.js Learning Guide</h1>
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
        <p>End of Node.js Learning Guide.</p>
      </footer>
    </div>
  );
};

export default NodeLearning;
