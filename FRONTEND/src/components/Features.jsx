import { MdMargin, MdPersonalVideo } from "react-icons/md";
import { GiCheckMark } from "react-icons/gi";
import { FaBookOpen } from "react-icons/fa";

function Features() {
  const containerStyle = {
    margin: "45px auto 85px auto",
    width: "95%",
    maxWidth: "2200px",
    padding: "40px",
    borderRadius: "20px",
    backdropFilter: "blur(10px)",
    background: "rgba(255, 255, 255, 0.15)",
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
    transition: "all 0.3s ease-in-out",
  };

  const headingStyle = {
    fontSize: "2.5em",
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    borderBottom: "2px solid rgba(20, 19, 19, 0.4)",
    paddingBottom: "10px",
    margin:"10px"
  };

  const cardStyle = {
    display: "flex",
    alignItems: "start",
    background: "rgba(139, 133, 235, 0.2)",
    padding: "20px",
    borderRadius: "15px",
    
   
    backdropFilter: "blur(10px)",
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    cursor: "pointer",
    color: "white",
  };

  const cardHoverStyle = {
    transform: "scale(1.05)",
    boxShadow: "0px 5px 20px rgba(255, 255, 255, 0.3)",
    
  };

  const iconStyle = {
    width: "2.5em",
    height: "2.5em",
    color: "#00c3ff",
    transition: "color 0.3s ease-in-out, transform 0.3s ease-in-out",
  };

  const buttonStyle = {
background: 'linear-gradient(to right,rgb(37, 54, 212),rgb(25, 27, 28))',    border: "none",
    padding: "10px 20px",
    borderRadius: "20px",
    fontWeight: "bold",
    color: "white",
    transition: "all 0.3s ease-in-out",
    cursor: "pointer",
    display: "inline-block",
    textDecoration: "none",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Key Features</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        {[{
          icon: <MdPersonalVideo style={iconStyle} />,
          title: "Personalized Learning Paths",
          text: "Get tailored course recommendations based on your skills and goals.",
          link: "/courses",
          buttonText: "Explore Courses"
        },
        {
          icon: <GiCheckMark style={iconStyle} />,
          title: "Skill Assessments and Quizzes",
          text: "Take interactive quizzes to find the best courses for you.",
          link: "/skill-assessment",
          buttonText: "Start Assessment"
        },
        {
          icon: <FaBookOpen style={iconStyle} />,
          title: "Comprehensive Course Catalog",
          text: "Browse a vast selection of courses for all skill levels.",
          link: "/courses",
          buttonText: "View All Courses"
        }].map((feature, index) => (
          <div
            key={index}
            className="col"
            style={{ ...cardStyle }}
            onMouseOver={(e) => Object.assign(e.currentTarget.style, cardHoverStyle)}
            onMouseOut={(e) => Object.assign(e.currentTarget.style, cardStyle)}
          >
            <div className="me-3">{feature.icon}</div>
            <div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
              <a
                href={feature.link}
                style={buttonStyle}
                onMouseOver={(e) => (e.target.style.background = "linear-gradient(45deg, #007bff, #00c3ff)")}
                onMouseOut={(e) => (e.target.style.background = "linear-gradient(45deg, #00c3ff, #007bff)")}
              >
                {feature.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
