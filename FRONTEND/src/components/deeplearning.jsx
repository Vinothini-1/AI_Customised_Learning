import React from "react";
import "./HtmlLearning.css"; // Using the same CSS for a glassy effect

const DeepLearningGuide = () => {
  const topics = [
    { 
      title: "Introduction to Deep Learning", 
      video: "https://www.youtube.com/embed/aircAruvnKk",
      content: `Deep learning is a subset of machine learning that uses neural networks to model complex patterns in data. 
      It is widely used in image recognition, NLP, and autonomous systems.`
    },
    { 
      title: "Understanding Neural Networks", 
      video: "https://www.youtube.com/embed/Ilg3gGewQ5U",
      content: `Neural networks are the foundation of deep learning. Learn about perceptrons, activation functions, 
      layers, and how networks process information.`
    },
    { 
      title: "Backpropagation and Optimization", 
      video: "https://www.youtube.com/embed/VMj-3S1tku0",
      content: `Backpropagation is the algorithm used to train neural networks. Learn how gradient descent and 
      optimization techniques like Adam and RMSProp help improve performance.`
    },
    { 
      title: "Deep Learning with TensorFlow and Keras", 
      video: "https://www.youtube.com/embed/tPYj3fFJGjk",
      content: `TensorFlow and Keras provide an easy-to-use framework for building deep learning models. 
      Learn how to define, train, and evaluate neural networks using these libraries.`
    },
    { 
      title: "Convolutional Neural Networks (CNNs)", 
      video: "https://www.youtube.com/embed/iaSUYvmCekI",
      content: `CNNs are specialized for image recognition tasks. Learn about convolutional layers, pooling, 
      and how CNNs are used in computer vision.`
    },
    { 
      title: "Recurrent Neural Networks (RNNs) and LSTMs", 
      video: "https://www.youtube.com/embed/qjrad0V0uJE",
      content: `RNNs are designed for sequential data like text and time-series analysis. 
      Learn how LSTMs help in solving the vanishing gradient problem.`
    },
    { 
      title: "Natural Language Processing with Deep Learning", 
      video: "https://www.youtube.com/embed/fvqUCQH1HGQ",
      content: `NLP involves teaching machines to understand human language. 
      Learn how deep learning models are used for tasks like sentiment analysis and chatbots.`
    },
    { 
      title: "Transfer Learning and Pretrained Models", 
      video: "https://www.youtube.com/embed/yofjFQddwHE",
      content: `Transfer learning allows models to leverage pre-trained knowledge for new tasks. 
      Learn about models like VGG, ResNet, and BERT.`
    },
    { 
      title: "Generative Adversarial Networks (GANs)", 
      video: "https://www.youtube.com/embed/8L11aMN5KY8",
      content: `GANs are used to generate realistic images and data. Learn how adversarial networks work and 
      their applications in image synthesis and AI art.`
    },
    { 
      title: "Deep Reinforcement Learning", 
      video: "https://www.youtube.com/embed/t9Z2H6px7cM",
      content: `Deep reinforcement learning combines deep learning with reinforcement learning techniques. 
      Learn how it powers AI systems like AlphaGo and autonomous robots.`
    },
  ];

  return (
    <div className="container">
      <h1 className="title">Deep Learning Learning Guide</h1>
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
        <p>End of Deep Learning Learning Guide.</p>
      </footer>
    </div>
  );
};

export default DeepLearningGuide;