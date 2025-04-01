import React from "react";
import "./HtmlLearning.css"; // Using the same CSS for a glassy effect

const PythonDataScience2 = () => {
  const topics = [
    { 
      title: "Introduction to Python for Data Science", 
      video: "https://www.youtube.com/embed/r-uOLxNrNk8",
      content: `Python is a powerful programming language widely used in data science. 
      It provides libraries like NumPy, Pandas, and Matplotlib for data manipulation and visualization. 
      This section introduces the importance of Python in data science, its ease of use, and industry applications.`
    },
    { 
      title: "Python Basics: Variables, Data Types, and Operators", 
      video: "https://www.youtube.com/embed/WvhQhj4n6b8",
      content: `Learn about Python’s fundamental building blocks, including variables, data types (int, float, string, list, tuple, dict), 
      and operators (arithmetic, logical, and comparison). Understanding these basics is crucial for writing efficient Python programs.`
    },
    { 
      title: "Control Flow & Loops", 
      video: "https://www.youtube.com/embed/WnVYpFWbRiA",
      content: `Control flow in Python includes if-else statements for decision-making and loops (for, while) for iteration. 
      This section covers how to use loops to automate repetitive tasks and conditionals to control the execution of code.`
    },
    { 
      title: "Functions in Python", 
      video: "https://www.youtube.com/embed/9Os0o3wzS_I",
      content: `Functions help modularize code by allowing reusable blocks. Learn how to define functions using the def keyword, 
      pass parameters, return values, and use lambda functions for short operations.`
    },
    { 
      title: "Python Lists, Tuples, and Dictionaries", 
      video: "https://www.youtube.com/embed/NI26dqhs2Rk",
      content: `Lists, tuples, and dictionaries are core data structures in Python. Lists are mutable, tuples are immutable, 
      and dictionaries store key-value pairs. Learn how to manipulate these structures for data analysis.`
    },
    { 
      title: "NumPy for Numerical Computing", 
      video: "https://www.youtube.com/embed/GB9ByFAIAH4",
      content: `NumPy is a fundamental library for numerical computing in Python. It provides support for multi-dimensional arrays 
      and mathematical functions. Learn how to create and manipulate arrays using NumPy efficiently.`
    },
    { 
      title: "Pandas for Data Manipulation", 
      video: "https://www.youtube.com/embed/vmEHCJofslg",
      content: `Pandas is a powerful library for data manipulation and analysis. It provides DataFrames for handling structured data, 
      making it easy to filter, clean, and transform datasets efficiently.`
    },
    { 
      title: "Data Cleaning with Pandas", 
      video: "https://www.youtube.com/embed/_EYsR-lpJcI",
      content: `Data cleaning is crucial in data science. Learn how to handle missing data, duplicate values, and inconsistent formats 
      using Pandas. This step ensures high-quality data for analysis.`
    },
    { 
      title: "Data Visualization with Matplotlib", 
      video: "https://www.youtube.com/embed/a9UrKTVEeZA",
      content: `Matplotlib is a popular library for creating static, animated, and interactive visualizations. 
      Learn how to create line charts, bar graphs, and scatter plots for effective data representation.`
    },
    { 
      title: "Data Visualization with Seaborn", 
      video: "https://www.youtube.com/embed/xVpFObuU7wk",
      content: `Seaborn is built on top of Matplotlib and provides a high-level interface for statistical graphics. 
      Learn how to create histograms, heatmaps, and regression plots to better understand data relationships.`
    },
    { 
      title: "Exploratory Data Analysis (EDA)", 
      video: "https://www.youtube.com/embed/5mZ4ZzJ8pNg",
      content: `EDA involves summarizing the main characteristics of a dataset using statistics and visualization. 
      Learn techniques like descriptive statistics, correlations, and feature relationships.`
    },
    { 
      title: "Handling Missing Data", 
      video: "https://www.youtube.com/embed/XNMEaLx88Yk",
      content: `Missing data can skew analysis. Learn how to handle missing values using Pandas, including methods like 
      filling missing values, removing null entries, and using imputation techniques.`
    },
    { 
      title: "Feature Engineering", 
      video: "https://www.youtube.com/embed/0MFKHcOhNwc",
      content: `Feature engineering is the process of creating new input features from existing data. 
      Learn techniques like one-hot encoding, scaling, and dimensionality reduction to improve model performance.`
    },
    { 
      title: "Linear Regression", 
      video: "https://www.youtube.com/embed/KJwE_gqzHZw",
      content: `Linear regression is a fundamental machine learning algorithm used for predicting continuous values. 
      Learn about regression equations, loss functions, and implementation in Python using scikit-learn.`
    },
    { 
      title: "Logistic Regression", 
      video: "https://www.youtube.com/embed/yIYKR4sgzI8",
      content: `Logistic regression is used for binary classification problems. Learn how it works, the sigmoid function, 
      and how to apply it to real-world problems like spam detection and fraud analysis.`
    },
    { 
      title: "Decision Trees and Random Forests", 
      video: "https://www.youtube.com/embed/DTnz8wA6wpw",
      content: `Decision trees and random forests are powerful algorithms for classification and regression. 
      Learn how they split data, handle overfitting, and improve accuracy using ensembles.`
    },
    { 
      title: "Support Vector Machines (SVM)", 
      video: "https://www.youtube.com/embed/efR1C6CvhmE",
      content: `SVM is a powerful classification algorithm that works by finding the best hyperplane to separate data points. 
      Learn about kernels, margin maximization, and real-world applications.`
    },
    { 
      title: "K-Nearest Neighbors (KNN)", 
      video: "https://www.youtube.com/embed/HVXime0nQeI",
      content: `KNN is a simple but powerful algorithm for classification and regression. 
      Learn how it works based on proximity, distance metrics, and choosing the right k-value.`
    },
    { 
      title: "Clustering: K-Means Algorithm", 
      video: "https://www.youtube.com/embed/4b5d3muPQmA",
      content: `K-Means clustering is an unsupervised learning algorithm used for grouping data. 
      Learn how to select the number of clusters, interpret results, and use it for market segmentation.`
    },
    { 
      title: "Deep Learning with TensorFlow & Keras", 
      video: "https://www.youtube.com/embed/Ilg3gGewQ5U",
      content: `Deep learning is a subset of machine learning using neural networks. 
      Learn how to build deep learning models with TensorFlow and Keras for tasks like image recognition and NLP.`
    },
  ];

  return (
    <div className="container">
      <h1 className="title">Python Data Science Learning Guide</h1>
      {topics.map((topic, index) => (
        <section key={index} className="topic-section">
          <h2>{index + 1}. {topic.title}</h2>
          <p>{topic.content}</p>
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src={topic.video}
              title={topic.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      ))}
      <footer className="footer">
        <p>End of Python Data Science Learning Guide.</p>
      </footer>
    </div>
  );
};

export default PythonDataScience2;
