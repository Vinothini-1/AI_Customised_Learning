import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/api/register",
        formData
      );
      alert(response.data.msg);
    } catch (error) {
      console.error("Error during registration:", error);
      alert(error.response?.data?.msg || "An error occurred");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "rgba(0, 0, 0, 0.1)",
        padding: "0 20px",
      }}
    >
      <div
        style={{
          background: "rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(10px)",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
          maxWidth: "450px",
          width: "100%",
          textAlign: "center",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          animation: "fadeIn 0.8s ease-in-out",
        }}
      >
        <h1
          style={{
            fontSize: "28px",
            fontWeight: "700",
            color: "white",
            marginBottom: "20px",
          }}
        >
          Create Your Account
        </h1>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            style={inputStyle}
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            style={inputStyle}
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            style={inputStyle}
            value={formData.mobile}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            style={inputStyle}
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.background = "#14a3d8")}
            onMouseOut={(e) => (e.target.style.background = "#17a2b8")}
          >
            Register
          </button>
        </form>
        <p
          style={{
            marginTop: "20px",
            fontSize: "14px",
            fontWeight: "500",
            color: "white",
          }}
        >
          Already have an account?{" "}
          <a
            href="/login"
            style={{
              color: "#17a2b8",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

const inputStyle = {
  margin: "10px 0",
  padding: "12px",
  width: "100%",
  border: "none",
  borderRadius: "8px",
  fontSize: "16px",
  fontWeight: "500",
  boxSizing: "border-box",
  outline: "none",
  background: "rgba(255, 255, 255, 0.2)",
  color: "white",
  transition: "border-color 0.3s ease, transform 0.3s ease",
  backdropFilter: "blur(5px)",
};

const buttonStyle = {
  marginTop: "20px",
  padding: "12px 0",
  background: "#17a2b8",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontSize: "17px",
  fontWeight: "600",
  cursor: "pointer",
  transition: "background 0.3s ease, transform 0.3s ease",
  width: "100%",
  outline: "none",
};

export default Register;
