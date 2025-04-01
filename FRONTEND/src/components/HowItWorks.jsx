import {
  PiPersonArmsSpreadFill,
  PiClipboardTextFill,
  PiRocketFill,
  PiLightbulbFill,
} from "react-icons/pi";

function HowItWorks() {
  const containerStyle = {
    maxWidth: "1455px",
    marginTop: "85px",
    marginBottom: "85px",
    textAlign: "center",
  };

  const titleStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "black",
    textShadow: "0px 0px 10px rgba(30, 29, 29, 0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  };

  const cardStyle = {
    background: "rgba(27, 25, 25, 0.1)",
    backdropFilter: "blur(10px)",
    borderRadius: "15px",
    padding: "20px",
    boxShadow: "0 4px 10px rgba(255, 255, 255, 0.2)",
    transition: "all 0.4s ease-in-out",
    transform: "translateY(0)",
    color: "black",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    cursor: "pointer",
  };

  const cardHoverStyle = {
    transform: "translateY(-10px)",
    boxShadow: "0 6px 15px rgba(255, 255, 255, 0.3)",
  };

  const iconStyle = {
    fontSize: "3rem",
    color: "#00c3ff",
    transition: "transform 0.3s ease-in-out",
  };

  const stepTitleStyle = {
    fontSize: "1.85rem",
    fontWeight: "bold",
  };

  const stepTextStyle = {
    fontSize: "1.1rem",
  };

  return (
    <>
      <div className="container mt-5" style={containerStyle}>
        <h2 style={titleStyle}>
          <PiLightbulbFill style={{ fontSize: "2.5rem", color: "#00c3ff" }} />
          How It Works
        </h2>
        <div className="row">
          {/* Step 1 */}
          <div className="col-md-4">
            <div
              className="card text-center"
              style={cardStyle}
              onMouseOver={(e) =>
                Object.assign(e.currentTarget.style, cardHoverStyle)
              }
              onMouseOut={(e) =>
                Object.assign(e.currentTarget.style, cardStyle)
              }
            >
              <div className="card-body">
                <div
                  className="icon mb-3"
                  style={iconStyle}
                  onMouseOver={(e) =>
                    (e.target.style.transform = "scale(1.2)")
                  }
                  onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                >
                  <PiPersonArmsSpreadFill />
                </div>
                <h3 className="card-title" style={stepTitleStyle}>
                  Step 1: Assess Your Skills
                </h3>
                <p className="card-text" style={stepTextStyle}>
                  Begin your journey by taking our quick skills assessment.
                </p>
              </div>
            </div>
          </div>
          {/* Step 2 */}
          <div className="col-md-4">
            <div
              className="card text-center"
              style={cardStyle}
              onMouseOver={(e) =>
                Object.assign(e.currentTarget.style, cardHoverStyle)
              }
              onMouseOut={(e) =>
                Object.assign(e.currentTarget.style, cardStyle)
              }
            >
              <div className="card-body">
                <div
                  className="icon mb-3"
                  style={iconStyle}
                  onMouseOver={(e) =>
                    (e.target.style.transform = "scale(1.2)")
                  }
                  onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                >
                  <PiClipboardTextFill />
                </div>
                <h3 className="card-title" style={stepTitleStyle}>
                  Step 2: Receive Recommendations
                </h3>
                <p className="card-text" style={stepTextStyle}>
                  Get personalized course recommendations based on your current
                  skills.
                </p>
              </div>
            </div>
          </div>
          {/* Step 3 */}
          <div className="col-md-4">
            <div
              className="card text-center"
              style={cardStyle}
              onMouseOver={(e) =>
                Object.assign(e.currentTarget.style, cardHoverStyle)
              }
              onMouseOut={(e) =>
                Object.assign(e.currentTarget.style, cardStyle)
              }
            >
              <div className="card-body">
                <div
                  className="icon mb-3"
                  style={iconStyle}
                  onMouseOver={(e) =>
                    (e.target.style.transform = "scale(1.2)")
                  }
                  onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                >
                  <PiRocketFill />
                </div>
                <h3 className="card-title" style={stepTitleStyle}>
                  Step 3: Start Learning
                </h3>
                <p className="card-text" style={stepTextStyle}>
                  Enroll in the recommended courses and kickstart your learning
                  journey!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HowItWorks;
