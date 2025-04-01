import { useNavigate } from "react-router-dom";
import SkillForgeImage from "../assets/hero-image_2.avif";

function HeroHome() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/courses");
  };

  const heroContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "5rem 2rem",
    borderRadius: "15px",
    background: "rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(10px)",
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
    transition: "all 0.3s ease-in-out",
  };

  const textContainerStyle = {
    flex: "1",
    textAlign: "left",
    color: "black",
  };

  const headingStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    lineHeight: "1.2",
background: 'linear-gradient(to right,rgb(37, 54, 212),rgb(25, 27, 28))',    WebkitBackgroundClip: "text",
   
    transition: "all 0.3s ease-in-out",
  };

  const paragraphStyle = {
    fontSize: "1.2rem",
    color: "black",
    maxWidth: "500px",
  };

  const buttonStyle = {
    padding: "12px 24px",
    fontSize: "1rem",
    fontWeight: "bold",
    borderRadius: "25px",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
  };

  const primaryButtonStyle = {
    ...buttonStyle,
background: 'linear-gradient(to right,rgb(37, 54, 212),rgb(25, 27, 28))',    color: "white",
  };

  const secondaryButtonStyle = {
    ...buttonStyle,
    background: "rgba(255, 255, 255, 0.2)",
    color: "black",
    border: "1px solid white",
  };

  const imageStyle = {
    width: "100%",
    maxWidth: "700px",
    height: "auto",
    borderRadius: "15px",
    transition: "transform 0.3s ease-in-out",
  };

  return (
    <div className="hero-container" style={heroContainerStyle}>
      <div className="text-container" style={textContainerStyle}>
        <h1 style={headingStyle}>
          Unlock Your Next Skill with Personalized Learning Pathway
        </h1>
        <p style={paragraphStyle}>
          Discover a personalized path to mastering the skills you need. Whether you’re starting fresh or leveling up, we have the perfect course for you.
        </p>
        <div className="button-group">
          <button
            style={primaryButtonStyle}
            onMouseOver={(e) => (e.target.style.background = "linear-gradient(45deg, #007bff, #00c3ff)")}
            onMouseOut={(e) => (e.target.style.background = "linear-gradient(45deg, #00c3ff, #007bff)")}
            onClick={handleNavigate}
          >
            Start Learning Now
          </button>
          &nbsp;&nbsp;
          <button
            style={secondaryButtonStyle}
            onMouseOver={(e) => (e.target.style.background = "rgba(255, 255, 255, 0.4)")}
            onMouseOut={(e) => (e.target.style.background = "rgba(255, 255, 255, 0.2)")}
            onClick={handleNavigate}
          >
            Explore Courses
          </button>
        </div>
      </div>
      <div className="image-container">
        <img
          src={SkillForgeImage}
          alt="SkillForge Hero"
          style={imageStyle}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        />
      </div>
    </div>
  );
}

export default HeroHome;
