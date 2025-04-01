import React from "react";
import "./HtmlLearning.css"; // Ensure you have appropriate CSS for styling

const DigitalMarketing = () => {
  const topics = [
    {
      title: "Introduction to Digital Marketing",
      video: "https://www.youtube.com/embed/WUniTVTi_Jk",
      content: `Digital marketing encompasses all marketing efforts that use an electronic device or the internet. Businesses leverage digital channels such as search engines, social media, email, and websites to connect with current and prospective customers. This section introduces the basics of digital marketing, its importance, and how it differs from traditional marketing.`,
    },
    {
      title: "Digital Marketing Tutorial For Beginners",
      video: "https://www.youtube.com/embed/BZLUEKnMfIY",
      content: `This tutorial provides a comprehensive overview of digital marketing strategies and tools. It covers topics like SEO, content marketing, social media marketing, and more, offering a solid foundation for beginners looking to delve into the digital marketing landscape.`,
    },
    {
      title: "Digital Marketing Playlist [2024 Updated]",
      video: "https://www.youtube.com/embed/playlist?list=PLEiEAq2VkUULa5aOQmO_al2VVmhC-eqeI",
      content: `This updated playlist offers a series of tutorials covering various aspects of digital marketing, including the latest trends and strategies. It's a valuable resource for staying current in the ever-evolving field of digital marketing.`,
    },
    {
      title: "Digital Marketing Course in 7 Hours",
      video: "https://www.youtube.com/embed/playlist?list=PL9ooVrP1hQOH9Ttkk5M8qDTy4tpD8AIEI",
      content: `This extensive course provides in-depth knowledge of digital marketing over a span of 7 hours. It covers essential topics such as SEO, PPC, social media marketing, and more, making it a valuable resource for both beginners and experienced marketers.`,
    },
    {
      title: "How I Would Learn Digital Marketing (If I Could Start Over)",
      video: "https://www.youtube.com/embed/e8wJBq6vOAI",
      content: `In this video, the speaker shares insights on the most effective ways to learn digital marketing, reflecting on personal experiences and outlining strategies that could accelerate the learning process for newcomers.`,
    },
    {
      title: "Free Digital Marketing Course for Beginners",
      video: "https://www.youtube.com/embed/iMyv1Lw0-SQ",
      content: `This free course offers beginners an introduction to digital marketing concepts, including SEO, social media marketing, and email marketing. It's designed to provide a foundational understanding without any cost.`,
    },
  ];

  return (
    <div className="container">
      <h1 className="title">Digital Marketing Learning Guide</h1>
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
        <p>End of Digital Marketing Learning Guide.</p>
      </footer>
    </div>
  );
};

export default DigitalMarketing;
