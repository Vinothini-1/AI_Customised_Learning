import React, { useState, useEffect } from 'react';
import CourseCategorizer from './CourseCategorizer';

const categorizeCourse = (courseContent) => {
  const domains = {
    WebDev: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'Frontend', 'Backend'],
    React: ['React', 'JSX', 'Components', 'Props', 'Hooks'],
    MachineLearning: ['Machine Learning', 'Data', 'Neural Networks', 'AI', 'Regression', 'Classification'],
    C: ['C', 'C++', 'Pointers', 'Memory Management', 'Data Structures'],
    Java: ['Java', 'OOP', 'Spring', 'JDBC', 'JavaFX'],
    Python: ['Python', 'Django', 'Flask', 'Pandas', 'NumPy', 'Machine Learning'],
    SQL: ['SQL', 'Database', 'Queries', 'MySQL', 'PostgreSQL', 'Data Manipulation'],
    DigitalMarketing: ['Digital Marketing', 'SEO', 'Social Media Marketing'],
    GraphicDesign: ['Graphic Design', 'Adobe', 'Design Principles', 'Color Theory']
  };

  const contentLower = courseContent.toLowerCase();

  for (const [category, keywords] of Object.entries(domains)) {
    if (keywords.some(keyword => contentLower.includes(keyword.toLowerCase()))) {
      return category;
    }
  }

  return 'Other';
};

const DomainCategorizer = ({ courses, expectedSkill, recommendationLevel }) => {
  const [courseCategories, setCourseCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    setError('');

    try {
      const allCourses = [
        ...courses.others,
        ...courses.machineLearning,
        ...courses.development,
      ];

      console.log('All Courses:', allCourses);

      const categorizedCourses = allCourses.map(course => {
        const courseContent = course.contents.join('. ');
        const category = categorizeCourse(courseContent);
        return { ...course, category };
      });

      const filteredCourses = categorizedCourses.filter(course => 
        Array.isArray(expectedSkill) 
          ? expectedSkill.includes(course.category) 
          : course.category === expectedSkill
      );

      setCourseCategories(filteredCourses);
      console.log('Categorized and Filtered Courses:', filteredCourses);
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to categorize the courses');
    }

    setLoading(false);
  }, [courses, expectedSkill]);

  return (
    <div style={containerStyle}>
      {loading && <p style={loadingText}>Loading...</p>}
      {error && <p style={errorText}>{error}</p>}

      {/* Pass the filtered courses to CourseCategorizer */}
      <CourseCategorizer 
        courses={courseCategories} 
        level={recommendationLevel} 
      />
    </div>
  );
};

export default DomainCategorizer;

// 🖌 Internal Styles (Glassy, Animated, Attractive)
const containerStyle = {
  backdropFilter: "blur(15px)",
  background: "rgba(255, 255, 255, 0.2)",
  borderRadius: "15px",
  padding: "20px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s ease-in-out",
  marginBottom: "0px",
  textAlign: "center",
};

const loadingText = {
  color: "black",
  fontSize: "18px",
  fontWeight: "bold",
};

const errorText = {
  color: "red",
  fontSize: "16px",
  fontWeight: "bold",
};
