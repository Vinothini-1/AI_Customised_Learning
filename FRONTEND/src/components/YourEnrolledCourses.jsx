import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const YourEnrolledCourses = ({ courses, onCourseSelect }) => {
  const containerStyle = {
    backdropFilter: "blur(15px)",
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: "15px",
    padding: "20px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease-in-out",
    marginBottom: "0px", // **Removed bottom gap**
  };

  const cardStyle = {
    borderRadius: "10px",
    height: "500px",
    width: "450px", // **Increased width**
    position: "relative",
    backdropFilter: "blur(15px)",
    background: "rgba(255, 255, 255, 0.3)",
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease-in-out",
    cursor: "pointer",
    marginBottom: "0px", // **No bottom margin**
  };

  const handleCourseClick = (course) => {
    onCourseSelect(course);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.25;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-warning" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key={fullStars} className="text-warning" />);
    }

    while (stars.length < 5) {
      stars.push(<FaStar key={stars.length} className="text-muted" />);
    }

    return stars;
  };

  return (
    <div className="container my-5" style={containerStyle}>
      <h3 className="text-left mb-4" style={{ fontSize: '2rem', fontFamily: 'Verdana, sans-serif', color: 'black' }}>
        Your Enrolled Courses
      </h3>
      <div className="row justify-content-center">
        {courses.EnrolledCourse.slice(0, 3).map((course, index) => (
          <div className="col-md-4 d-flex justify-content-center" key={index}>
            <div
              className="card text-center shadow-sm border-light"
              style={cardStyle}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              {course.label && (
                <span className="badge" style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: course.labelStyle?.backgroundColor }}>
                  {course.label}
                </span>
              )}
              <img
                src={course.imageUrl}
                alt={course.title}
                className="card-img-top"
                style={{
                  height: "200px",
                  objectFit: "cover",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                  cursor: "pointer",
                  transition: "transform 0.3s ease-in-out",
                }}
                onClick={() => handleCourseClick(course)}
                onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
              />
              <div className="card-body">
                <h5 className="card-title" onClick={() => handleCourseClick(course)} style={{ cursor: 'pointer', color: 'black' }}>
                  {course.title}
                </h5>
                <p className="card-text" style={{ color: 'black' }}>
                  <strong>Instructor:</strong> {course.instructor}
                </p>
                <div className="d-flex justify-content-center align-items-center">
                  {renderStars(course.rating)}
                  <span style={{ marginLeft: '8px', fontWeight: 'bold', color: 'black' }}>{course.rating}</span>
                </div>
                <p className="card-text mt-2" style={{ color: 'black' }}>
                  <small>{course.enrollments} Enrollments | {course.duration}</small>
                </p>
                <p className="card-text" style={{ color: 'black' }}>
                  <strong>{course.price}</strong>
                </p>
                <div className="mt-3">
                  <div className="progress" style={{ height: '15px', borderRadius: '10px', backgroundColor: '#ddd' }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: `${course.progress}%`,
                        backgroundColor: '#28a745',
                        borderRadius: '10px',
                        transition: 'width 0.5s ease-in-out',
                      }}
                      aria-valuenow={course.progress}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {course.progress}%
                    </div>
                  </div>
                </div>

             

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourEnrolledCourses;
