import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import reactForBeginnersImg from "../assets/react_for_beginners.jpg";
import MachineLearning from "../assets/Machine_Learning.jpg";
import PythonDataScience from "../assets/PythonDataScience1.jpeg";
import JavascriptAdvanced from "../assets/javascript_advanced.jpeg";

const PopularCourses = () => {
  const courses = [
    {
      title: "React for Beginners",
      instructor: "Jane Doe",
      description: "Learn the basics of React and build interactive web apps.",
      rating: 4.5,
      enrollments: "1200",
      duration: "6 hours",
      price: "$49",
      imageUrl: reactForBeginnersImg,
      label: "Best Seller",
      labelStyle: { backgroundColor: "green" },
      buttonUrl: "/React",
    },
    {
      title: "Python Data Science",
      instructor: "John Smith",
      description: "Master data analysis with Python and its libraries.",
      rating: 4.8,
      enrollments: "1500",
      duration: "8 hours",
      price: "$59",
      imageUrl: PythonDataScience,
      label: "New Release",
      labelStyle: { backgroundColor: "red" },
      buttonUrl: "/python",
    },
    {
      title: "Advanced JavaScript",
      instructor: "Alice Johnson",
      description: "Dive deeper into JavaScript and learn advanced concepts.",
      rating: 4.7,
      enrollments: "900",
      duration: "7 hours",
      price: "$39",
      imageUrl: JavascriptAdvanced,
      buttonUrl: "/js",
    },
    {
      title: "Machine Learning A-Z",
      instructor: "Bob Lee",
      description: "Learn machine learning from scratch with practical examples.",
      rating: 4.5,
      enrollments: "1800",
      duration: "10 hours",
      price: "$99",
      imageUrl: MachineLearning,
      buttonUrl: "/machine",
    },
  ];

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.25;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} style={{ color: "#ffc107" }} />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key={fullStars} style={{ color: "#ffc107" }} />);
    }

    while (stars.length < 5) {
      stars.push(<FaStar key={stars.length} style={{ color: "#d3d3d3" }} />);
    }

    return stars;
  };

  return (
    <div style={{ maxWidth: "1400px", margin: "80px auto", textAlign: "center" }}>
      <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "50px", color: "black" }}>
        Explore Our Popular Courses
      </h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
        {courses.map((course, index) => (
          <div
            key={index}
            style={{
              background: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(10px)",
              borderRadius: "15px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              width: "300px",
              transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              position: "relative",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.2)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
            }}
          >
            {/* Badge Label */}
            {course.label && (
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  padding: "5px 10px",
                  color: "white",
                  fontWeight: "bold",
                  borderRadius: "5px",
                  ...course.labelStyle,
                }}
              >
                {course.label}
              </div>
            )}

            {/* Course Image */}
            <img
              src={course.imageUrl}
              alt={course.title}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderTopLeftRadius: "15px",
                borderTopRightRadius: "15px",
              }}
            />

            {/* Course Details */}
            <div style={{ padding: "20px", color: "black" }}>
              <h5 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{course.title}</h5>
              <h6 style={{ fontSize: "1rem", color: "#555" }}>{course.instructor}</h6>
              <p style={{ fontSize: "0.9rem" }}>{course.description}</p>
              <p style={{ fontSize: "1rem" }}>
                <strong>Rating:</strong> {renderStars(course.rating)} ({course.rating})
              </p>
              <p style={{ fontSize: "1rem" }}>
                <strong>Enrollments:</strong> {course.enrollments}
              </p>
              <p style={{ fontSize: "1rem" }}>
                <strong>Duration:</strong> {course.duration}
              </p>

              {/* Button with Dynamic URL */}
              <Link
                to={course.buttonUrl}
                style={{
                  display: "inline-block",
                  padding: "10px 15px",
                  borderRadius: "20px",
                  textDecoration: "none",
                  background: "linear-gradient(to right, rgb(37, 54, 212), rgb(25, 27, 28))",
                  color: "white",
                  fontWeight: "bold",
                  transition: "background 0.3s ease-in-out, transform 0.2s ease-in-out",
                }}
                onMouseOver={(e) => {
                  e.target.style.background = "linear-gradient(45deg, #007bff, #00c3ff)";
                  e.target.style.transform = "scale(1.05)";
                }}
                onMouseOut={(e) => {
                  e.target.style.background = "linear-gradient(45deg, #00c3ff, #007bff)";
                  e.target.style.transform = "scale(1)";
                }}
              >
                Start Learning
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;
