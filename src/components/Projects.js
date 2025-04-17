// src/components/Projects.js
import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { motion } from 'framer-motion';
import { FaGithub, FaSearch } from 'react-icons/fa';
import '../styles/Projects.css';

const categories = [
  'All',
  'Machine Learning',
  'Web Development',
  'Games',
  'Data Analysis',
  'Systems'
];

const projectData = [
  {
    title: 'Modern React Portfolio Website',
    description: 'Engineered a responsive single-page application using React and modern JavaScript. Implemented custom animations, dynamic content filtering, and responsive design principles. Features include component-based architecture, state management, and seamless user experience with CSS transitions and Intersection Observer API.',
    link: 'https://github.com/java-heapler/portfolio',
    categories: ['Web Development', 'React']
  },
  { title: 'Ants Vs. SomeBees', description: 'Developed a tower defense game using Python, focusing on OOP and functional programming paradigms.', link: 'https://github.com/java-heapler/ants-vs-somebees', categories: ['Games', 'Python'] },
  { title: 'Cats', description: 'Created a typing game using Python, implemented algorithms to calculate typing speed and accuracy.', link: 'https://github.com/java-heapler/cats', categories: ['Games', 'Python'] },
  { title: 'Hog', description: 'Built a dice game using Python, incorporating strategic decision-making and probabilistic analysis.', link: 'https://github.com/java-heapler/hog', categories: ['Games', 'Python'] },
  { title: 'Scheme', description: 'Implemented an interpreter for the Scheme language using Python, focusing on parsing and evaluation.', link: 'https://github.com/java-heapler/scheme', categories: ['Systems', 'Python'] },
  { title: 'Ataxx', description: 'Created a board game with a graphical user interface using Java and Java Swing.', link: 'https://github.com/java-heapler/ataxx', categories: ['Games', 'Java'] },
  { title: 'Enigma', description: 'Simulated the Enigma machine using Java, focusing on cryptographic algorithms.', link: 'https://github.com/java-heapler/enigma', categories: ['Machine Learning', 'Java'] },
  { title: 'Gitlet', description: 'Developed a version control system similar to Git using Java, implemented core version control features.', link: 'https://github.com/java-heapler/gitlet', categories: ['Systems', 'Java'] },
  { title: 'Philphix', description: 'Developed a text processing tool using C, focusing on efficient text parsing and replacement algorithms.', link: 'https://github.com/java-heapler/philphix', categories: ['Systems', 'C'] },
  { title: 'Pacman', description: 'Developed an AI for Pacman using Python, implemented search algorithms and reinforcement learning techniques.', link: 'https://github.com/java-heapler/pacman', categories: ['Machine Learning', 'Python'] },
  { title: 'Social Buzz Analyzer', description: 'Performed sentiment analysis using NLP techniques in Python with NLTK and spaCy, visualized trends in Jupyter Notebook.', link: 'https://github.com/java-heapler/social-buzz-analyzer', categories: ['Data Analysis', 'Python'] },
  { title: 'Smart Sales Predictor', description: 'Built a forecasting model using ARIMA and Prophet in Python, improved accuracy by 20%, preprocessed data with pandas.', link: 'https://github.com/java-heapler/smart-sales-predictor', categories: ['Data Analysis', 'Python'] },
  { title: 'Customer Insight Clustering', description: 'Implemented K-Means clustering in Python, analyzed data with pandas, visualized clusters using matplotlib and seaborn.', link: 'https://github.com/java-heapler/customer-insight-clustering', categories: ['Data Analysis', 'Python'] },
  { title: 'Proactive Maintenance Predictor', description: 'Developed time-series predictive maintenance model in Python, achieved 95% accuracy.', link: 'https://github.com/java-heapler/proactive-maintenance-predictor', categories: ['Data Analysis', 'Python'] },
  { title: 'Sales Regression Analysis', description: 'Conducted linear regression and hypothesis testing on sales data using R.', link: 'https://github.com/java-heapler/sales-regression-analysis', categories: ['Data Analysis', 'R'] },
  { title: 'Predictive Modeling for MNIST and College Data', description: 'Developed and evaluated models including Logistic Regression, LDA, QDA, Linear Regression, Ridge, and Lasso using Python and scikit-learn on MNIST and college admission datasets.', link: 'https://github.com/java-heapler/predictive-modeling-mnist-college', categories: ['Machine Learning', 'Python'] },
  { title: 'Advanced Machine Learning Techniques for Data Analysis', description: 'Applied PCA, k-means clustering, SVMs, and Kernel PCA using Python, R, and scikit-learn on datasets like MNIST for dimensionality reduction, clustering, and classification.', link: 'https://github.com/java-heapler/advanced-ml-techniques', categories: ['Machine Learning', 'Python'] },
  { title: 'Ensemble Methods and SVM for Advanced Data Analysis', description: 'Implemented Bagging, Boosting, SVMs, and Random Forests using Python, scikit-learn, and pandas on MNIST dataset for classification and variance reduction.', link: 'https://github.com/java-heapler/ensemble-methods-svm', categories: ['Machine Learning', 'Python'] },
  { title: 'Neural Network Digit Classification', description: 'Developed neural networks for digit classification using Python and NumPy, implementing perceptron, backpropagation, and RNNs for tasks including regression and language identification.', link: 'https://github.com/java-heapler/nn-digit-classification', categories: ['Machine Learning', 'Python'] },
  { title: 'Neural Networks and Learning Theory Applications', description: 'Explored advanced techniques like FNNs, CNNs, Autoencoders, and GANs using Python, PyTorch, and scikit-learn. Analyzed datasets like CIFAR-10 and Fashion MNIST, implementing dropout and various optimizers for enhanced performance.', link: 'https://github.com/java-heapler/nn-learning-theory', categories: ['Machine Learning', 'Python'] }
];

function Projects() {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredProjects = projectData.filter(project => {
    const matchesFilter = filter === 'All' || project.categories.includes(filter);
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const renderProjectCard = (project, index) => (
    <motion.div
      key={project.id}
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.categories.map((tag, idx) => (
            <span key={idx} className="tag">{tag}</span>
          ))}
        </div>
      </div>
      <div className="project-footer">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          <FaGithub /> View Code
        </a>
      </div>
    </motion.div>
  );

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (isMobile && currentIndex < filteredProjects.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    },
    onSwipedRight: () => {
      if (isMobile && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
    trackTouch: true,
    delta: 50,
    swipeDuration: 250,
    touchEventOptions: { passive: true }
  });

  return (
    <section id="projects" className="section projects" aria-labelledby="projects-heading">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 id="projects-heading">Projects</h2>
        
        <div className="projects-controls">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${filter === category ? 'active' : ''}`}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-container">
          {isMobile ? (
            <div className="projects-mobile-view" {...handlers}>
              <div 
                className="project-slide"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                  transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  width: '100%',
                  display: 'flex'
                }}
              >
                {filteredProjects.map((project, index) => (
                  <div 
                    key={index} 
                    className="project-slide-item"
                    style={{
                      width: '100%'
                    }}
                  >
                    {renderProjectCard(project, index)}
                  </div>
                ))}
              </div>
              <div className="swipe-instruction">
                Swipe left or right to navigate projects
              </div>
              <div className="project-indicators">
                {filteredProjects.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="projects-grid">
              {filteredProjects.map((project, index) => renderProjectCard(project, index))}
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
