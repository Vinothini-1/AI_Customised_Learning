import React from "react";
import "./HtmlLearning.css";

const MachineLearning = () => {
  const topics = [
    {
      title: "Introduction to Machine Learning",
      video: "https://www.youtube.com/embed/GwIo3gDZCVQ",
      content: `Machine Learning (ML) is a subset of AI that enables systems to learn from data and improve over time.
      This section covers the fundamentals, real-world applications, and types of machine learning (supervised, unsupervised, reinforcement).`
    },
    {
      title: "Supervised vs Unsupervised Learning",
      video: "https://www.youtube.com/embed/AGcUhuDlyN0",
      content: `Supervised learning uses labeled data to train models, whereas unsupervised learning finds hidden patterns in unlabeled data.
      Learn the differences, use cases, and popular algorithms in each category.`
    },
    {
      title: "Linear Regression in Machine Learning",
      video: "https://www.youtube.com/embed/nk2CQITm_eo",
      content: `Linear regression is a statistical method used for predictive modeling. Learn how to implement it using Python and scikit-learn.`
    },
    {
      title: "Logistic Regression for Classification",
      video: "https://www.youtube.com/embed/yIYKR4sgzI8",
      content: `Logistic regression is used for binary classification problems. Learn about sigmoid functions, decision boundaries, and real-world applications.`
    },
    {
      title: "Decision Trees and Random Forests",
      video: "https://www.youtube.com/embed/7VeUPuFGJHk",
      content: `Decision trees help in decision-making based on features, while random forests improve accuracy by combining multiple trees. Learn their working principles.`
    },
    {
      title: "Support Vector Machines (SVM)",
      video: "https://www.youtube.com/embed/efR1C6CvhmE",
      content: `SVM is a powerful classification algorithm that finds the best hyperplane to separate data points. Learn about kernel tricks and real-world use cases.`
    },
    {
      title: "K-Nearest Neighbors (KNN) Algorithm",
      video: "https://www.youtube.com/embed/HVXime0nQeI",
      content: `KNN is a simple algorithm that classifies new data points based on the closest existing data points. Learn how to determine the right 'k' value.`
    },
    {
      title: "K-Means Clustering Algorithm",
      video: "https://www.youtube.com/embed/4b5d3muPQmA",
      content: `K-Means is an unsupervised learning algorithm used for clustering similar data points. Learn how to apply it to segmentation problems.`
    },
    {
      title: "Neural Networks and Deep Learning",
      video: "https://www.youtube.com/embed/aircAruvnKk",
      content: `Neural networks are the foundation of deep learning. Learn about perceptrons, hidden layers, and how they mimic the human brain.`
    },
    {
      title: "Building Deep Learning Models with TensorFlow & Keras",
      video: "https://www.youtube.com/embed/Ilg3gGewQ5U",
      content: `TensorFlow and Keras provide an easy way to build deep learning models. Learn how to create, train, and evaluate neural networks.`
    }
  ];

  return (
    <div className="container">
      <h1 className="title">Machine Learning Guide</h1>
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
        <p>End of Machine Learning Guide.</p>
      </footer>
    </div>
  );
};

export default MachineLearning;
