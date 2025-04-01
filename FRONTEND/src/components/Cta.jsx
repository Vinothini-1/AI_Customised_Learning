function Cta() {
  const ctaStyle = {
    background: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(15px)",
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
    maxWidth: "1200px",
    margin: "0 auto",
    textAlign: "center",
    transition: "all 0.3s ease-in-out",
  };

  const headingStyle = {
    fontSize: "2.2rem",
    fontWeight: "700",
    color: "black", // Black text
    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
  };

  const paragraphStyle = {
    fontSize: "1.4rem",
    margin: "15px 0",
    color: "black", // Black text
  };

  const buttonStyle = {
    display: "inline-block",
    padding: "12px 25px",
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "white",
    textDecoration: "none",
    background: "linear-gradient(45deg,rgb(0, 0, 0),rgb(127, 113, 113))",
    borderRadius: "30px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    transition: "all 0.3s ease-in-out",
    border: "none",
    cursor: "pointer",
  };

  return (
    <div
      className="cta-section"
      style={ctaStyle}
      onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
      onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
    >
      <h3 style={headingStyle}>Ready to Boost Your Skills?</h3>
      <p style={paragraphStyle}>Join our community of learners today!</p>
      <a
        href="/my-profile"
        style={buttonStyle}
        onMouseOver={(e) => (e.target.style.background = "linear-gradient(45deg, #007bff, #00c3ff)")}
        onMouseOut={(e) => (e.target.style.background = "linear-gradient(45deg, #00c3ff, #007bff)")}
      >
        Get Started Now
      </a>
    </div>
  );
}

export default Cta;
