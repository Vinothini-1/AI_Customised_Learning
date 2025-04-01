import React from "react";
import "./HtmlLearning.css";  // Using the same CSS for a glassy effect

const GraphicDesignLearning = () => {
  const topics = [
    { 
      title: "Introduction to Graphic Design", 
      video: "https://www.youtube.com/embed/erQz7zEzVAs",
      content: `Graphic design is the art of visual communication using typography, imagery, color, and layout. 
      This section introduces the fundamentals of graphic design, including principles, tools, and career opportunities.`
    },
    { 
      title: "Principles of Design", 
      video: "https://www.youtube.com/embed/UfGK8e1hbyc",
      content: `The principles of design include balance, contrast, emphasis, movement, pattern, repetition, and unity. 
      These fundamental concepts help create aesthetically pleasing and effective designs.`
    },
    { 
      title: "Color Theory in Design", 
      video: "https://www.youtube.com/embed/_2LLXnUdUIc",
      content: `Color theory is essential for creating visually appealing designs. 
      Learn about color harmonies, the psychology of colors, and how to apply them effectively in design projects.`
    },
    { 
      title: "Typography Basics", 
      video: "https://www.youtube.com/embed/Wp7YwZG4M0M",
      content: `Typography plays a crucial role in graphic design. 
      Learn about font types, spacing, alignment, and how to choose the right typography for different projects.`
    },
    { 
      title: "Adobe Photoshop Basics", 
      video: "https://www.youtube.com/embed/2CHtwX8RxkM",
      content: `Adobe Photoshop is a powerful tool for image editing and digital art. 
      Learn about layers, selection tools, retouching, and how to create professional designs.`
    },
    { 
      title: "Adobe Illustrator Basics", 
      video: "https://www.youtube.com/embed/IB2X7aK-j7I",
      content: `Illustrator is used for vector graphics and logo design. 
      Learn how to use pen tools, create shapes, and design stunning vector artwork.`
    },
    { 
      title: "Logo Design Principles", 
      video: "https://www.youtube.com/embed/ZQfnxFjZbM8",
      content: `Logos are essential for branding. Learn the key principles of logo design, including simplicity, scalability, and memorability.`
    },
    { 
      title: "User Interface (UI) Design Basics", 
      video: "https://www.youtube.com/embed/3Q8nIHDxfWk",
      content: `UI design focuses on the look and feel of digital interfaces. 
      Learn about wireframing, layouts, usability, and creating user-friendly designs.`
    },
    { 
      title: "User Experience (UX) Design Basics", 
      video: "https://www.youtube.com/embed/v-DURpEflWA",
      content: `UX design enhances user satisfaction by improving usability and accessibility. 
      Learn how to conduct user research, create personas, and develop wireframes.`
    },
    { 
      title: "Designing for Social Media", 
      video: "https://www.youtube.com/embed/YMY9VOUbs9o",
      content: `Social media platforms require engaging graphics. 
      Learn how to design compelling posts, banners, and advertisements for Facebook, Instagram, and Twitter.`
    },
    { 
      title: "Motion Graphics & Animation", 
      video: "https://www.youtube.com/embed/CvPxR0vN_EI",
      content: `Motion graphics bring static designs to life through animation. 
      Learn how to create engaging motion graphics using tools like Adobe After Effects.`
    },
    { 
      title: "Graphic Design Portfolio & Career", 
      video: "https://www.youtube.com/embed/MHh68q3zOWw",
      content: `A strong portfolio is crucial for a successful career in graphic design. 
      Learn how to showcase your best work, find clients, and build a professional brand.`
    }
  ];

  return (
    <div className="container">
      <h1 className="title">Graphic Design Learning Guide</h1>
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
        <p>End of Graphic Design Learning Guide.</p>
      </footer>
    </div>
  );
};

export default GraphicDesignLearning;
