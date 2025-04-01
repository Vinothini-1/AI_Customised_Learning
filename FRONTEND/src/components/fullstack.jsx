import React from "react";
import "./HtmlLearning.css";

const FullStackDevelopment = () => {
  const topics = [
    { 
      title: "Introduction to Full Stack Development", 
      video: "https://www.youtube.com/embed/nu_pCVPKzTk",
      content: `Full stack development involves working with both frontend and backend technologies. 
      It includes handling databases, servers, and UI/UX. Learn the roles and responsibilities of a full stack developer.`
    },
    { 
      title: "HTML, CSS & JavaScript Basics", 
      video: "https://www.youtube.com/embed/mU6anWqZJcc",
      content: `These are the building blocks of web development. 
      HTML structures the content, CSS styles it, and JavaScript adds interactivity. Mastering these is essential for frontend development.`
    },
    { 
      title: "Frontend Development with React.js", 
      video: "https://www.youtube.com/embed/N3AkSS5hXMA",
      content: `React is a popular JavaScript library for building modern web applications. Learn about components, props, state management, hooks, and how to create a single-page application.`
    },
    { 
      title: "Backend Development with Node.js & Express.js", 
      video: "https://www.youtube.com/embed/Oe421EPjeBE",
      content: `Node.js allows JavaScript to be used for backend development. Express.js is a minimalist framework for building web servers and APIs. Learn routing, middleware, and database integration.`
    },
    { 
      title: "Database Management with MongoDB", 
      video: "https://www.youtube.com/embed/ExcRbA7fy_A",
      content: `MongoDB is a NoSQL database used in full stack applications. Learn how to create, read, update, and delete (CRUD) operations and structure collections efficiently.`
    },
    { 
      title: "RESTful APIs and Authentication", 
      video: "https://www.youtube.com/embed/-MTSQjw5DrM",
      content: `APIs enable communication between frontend and backend. Learn how to design RESTful APIs and secure them with authentication techniques like JWT and OAuth.`
    },
    { 
      title: "State Management in React with Redux", 
      video: "https://www.youtube.com/embed/9boMnm5X9ak",
      content: `Managing state in large applications is crucial. Learn how to use Redux for state management and handle complex user interactions efficiently.`
    },
    { 
      title: "Deploying Full Stack Applications", 
      video: "https://www.youtube.com/embed/eVGEea9U1d8",
      content: `Learn how to deploy full stack applications using platforms like Vercel, Netlify, Heroku, and cloud services like AWS for hosting and scaling applications.`
    }
  ];

  return (
    <div className="container">
      <h1 className="title">Full Stack Development Learning Guide</h1>
      {topics.map((topic, index) => (
        <section key={index} className="topic-section">
          <h2>{index + 1}. {topic.title}</h2>
          <p>{topic.content}</p>
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
        </section>
      ))}
      <footer className="footer">
        <p>End of Full Stack Development Learning Guide.</p>
      </footer>
    </div>
  );
};

export default FullStackDevelopment;