import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

function Footer() {
  const footerStyle = {
    background: "rgba(255, 255, 255, 0.2)", // Semi-transparent background
    backdropFilter: "blur(10px)",
    borderRadius: "15px",
    padding: "20px",
    textAlign: "center",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease-in-out",
    color: "black",
  };

  const textStyle = {
    color: "black",
    fontWeight: "bold",
    fontSize: "14px",
  };

  const iconStyle = {
    fontSize: "24px",
    color: "black",
    transition: "transform 0.3s ease-in-out, color 0.3s ease-in-out",
  };

  const iconHoverStyle = {
    transform: "scale(1.2)",
    color: "#007bff",
  };

  return (
    <footer
      className="d-flex flex-wrap justify-content-between align-items-center border-top"
      style={{ ...footerStyle, marginTop: "65px", marginBottom: "30px" }}
    >
      <div className="col-md-4 d-flex align-items-center">
        <span className="mb-3 mb-md-0" style={textStyle}>
          © 2025 Personalised Learning | All Rights Reserved
        </span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        {[
          { icon: <FaLinkedin />, link: "https://www.linkedin.com" },
          { icon: <FaTwitter />, link: "https://twitter.com" },
          { icon: <FaInstagram />, link: "https://www.instagram.com" },
          { icon: <FaFacebook />, link: "https://www.facebook.com" },
        ].map((social, index) => (
          <li key={index} className="ms-3">
            <a
              className="text-body-secondary"
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...iconStyle }}
              onMouseOver={(e) => {
                e.target.style.transform = iconHoverStyle.transform;
                e.target.style.color = iconHoverStyle.color;
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.color = "black";
              }}
            >
              {social.icon}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
