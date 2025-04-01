import React from "react";
import { Link } from "react-router-dom";
import SkillForgeImage from "../assets/SkillForge_5.jpg";

function Header() {
  const headerStyle = {
    background: "rgba(0, 0, 0, 0.6)",
    backdropFilter: "blur(10px)",
    padding: "1rem 2rem",
    borderRadius: "15px",
    boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.1)",
    transition: "all 0.3s ease-in-out",
  };

  const navLinkStyle = {
    fontSize: "1rem",
    fontWeight: "bold",
    position: "relative",
    color: "white",
    textDecoration: "none",
    transition: "color 0.3s ease-in-out",
  };

  const navLinkHover = {
    color: "#00c3ff",
  };

  const buttonStyle = {
    borderRadius: "20px",
    padding: "10px 20px",
    fontWeight: "bold",
    border: "none",
    transition: "all 0.3s ease-in-out",
    cursor: "pointer",
  };

  const searchInputStyle = {
    background: "rgba(255, 255, 255, 0.2)",
    border: "none",
    padding: "10px 15px",
    borderRadius: "20px",
    outline: "none",
    transition: "all 0.3s ease-in-out",
    color: "white",
  };

  return (
    <header style={headerStyle}>
      <div className="width">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <img
              src={SkillForgeImage}
              alt="SkillForge Logo"
              width="140"
              height="50"
              className="me-2"
              style={{ borderRadius: "10px", transition: "transform 0.3s ease-in-out" }}
              onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
              onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
            />
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            {["home", "courses", "my-profile", "skill-assessment", "contact"].map((route, index) => (
              <li key={index}>
                <Link
                  to={`/${route}`}
                  className="nav-link px-3"
                  style={navLinkStyle}
                  onMouseOver={(e) => (e.target.style.color = navLinkHover.color)}
                  onMouseOut={(e) => (e.target.style.color = "white")}
                >
                  {route.replace("-", " ").toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input
              type="search"
              placeholder="Search..."
              aria-label="Search"
              style={searchInputStyle}
              onFocus={(e) => (e.target.style.background = "rgba(255, 255, 255, 0.4)")}
              onBlur={(e) => (e.target.style.background = "rgba(255, 255, 255, 0.2)")}
            />
          </form>

          <div className="text-end">
            <Link to="/login">
              <button
                type="button"
                className="btn btn-outline-light me-2"
                style={{ ...buttonStyle, background: "transparent", color: "white", border: "1px solid white" }}
                onMouseOver={(e) => (e.target.style.background = "rgba(255, 255, 255, 0.3)")}
                onMouseOut={(e) => (e.target.style.background = "transparent")}
              >
                Logout
              </button>
            </Link>

            <Link to="/my-profile">
              <button
                type="button"
                className="btn btn-info"
                style={{ ...buttonStyle, background: "linear-gradient(45deg, #00c3ff, #007bff)", color: "white" }}
                onMouseOver={(e) => (e.target.style.background = "linear-gradient(45deg, #007bff, #00c3ff)")}
                onMouseOut={(e) => (e.target.style.background = "linear-gradient(45deg, #00c3ff, #007bff)")}
              >
                Profile
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
