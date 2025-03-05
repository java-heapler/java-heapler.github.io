import React, { useEffect, useRef, useState, lazy, Suspense } from 'react';
import { logPageView, logEvent } from '../utils/analytics';
import '../styles/About.css';
import { ReadingProgress, ScrollToTop, InteractiveBackground, LoadingAnimation, SkillProgressBar } from './Features';

// Lazy load the skill icons
const SkillIcon = lazy(() => import('./SkillIcon'));

const About = () => {
  const [loading, setLoading] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Track page view when component mounts
    logPageView("/about");

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '50px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe elements that should fade in
    const elements = sectionRef.current.querySelectorAll('.fade-in-element');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const getDelayClass = (index) => `delay-${index * 2}`;

  const skillCategories = {
    'Core Technologies': {
      description: 'Advanced proficiency in modern development stack',
      skills: [
        { name: 'Python', icon: 'python.svg' },
        { name: 'Java', icon: 'java.svg' },
        { name: 'JavaScript', icon: 'javascript.svg' },
        { name: 'React', icon: 'react.svg' }
      ]
    },
    'Data & Machine Learning': {
      description: 'Expertise in AI/ML frameworks and data processing',
      skills: [
        { name: 'TensorFlow', icon: 'tensorflow.svg' },
        { name: 'PyTorch', icon: 'pytorch.svg' },
        { name: 'scikit-learn', icon: 'scikitlearn.svg' },
        { name: 'SQL', icon: 'sql.svg' }
      ]
    },
    'Infrastructure & DevOps': {
      description: 'Cloud-native development and deployment expertise',
      skills: [
        { name: 'AWS', icon: 'aws.svg' },
        { name: 'Docker', icon: 'docker.svg' },
        { name: 'Kubernetes', icon: 'kubernetes.svg' },
        { name: 'Git', icon: 'git.svg' }
      ]
    }
  };

  const achievements = [
    {
      metric: "40%",
      description: "Deployment speed improvement through CI/CD optimization"
    },
    {
      metric: "99.9%",
      description: "System uptime maintained for critical applications"
    },
    {
      metric: "50+",
      description: "Successfully completed projects"
    }
  ];

  // Analytics event tracking functions
  const trackResumeDownload = () => {
    logEvent('User', 'Downloaded Resume', 'Resume Download');
  };

  const trackSkillClick = (skillName) => {
    logEvent('Skill Interaction', 'Clicked Skill', skillName);
  };

  const handleKeyPress = (e, callback) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      callback();
    }
  };

  return (
    <section id="about" className="about-section" ref={sectionRef} aria-label="About Me Section">
      <div className="about-content">
        <LoadingAnimation isLoading={loading} />
        <ReadingProgress />
        <ScrollToTop />
        <InteractiveBackground />
        
        <h2 className="fade-in-element">About Me</h2>
        
        <div className="about-text" aria-label="Personal Introduction">
          <p className="fade-in-element">
            As a UC Berkeley graduate with a unique background in Data Science and Cognitive Science, 
            I bring a comprehensive approach to solving complex technical challenges. My expertise spans 
            full-stack development, machine learning, and augmented reality, allowing me to architect 
            end-to-end solutions that scale.
          </p>
          
          <div className="achievements-grid fade-in-element" aria-label="Key Achievements">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className={`achievement-card ${getDelayClass(index)}`}
                aria-label={`Achievement: ${achievement.metric} - ${achievement.description}`}
              >
                <h3>{achievement.metric}</h3>
                <p>{achievement.description}</p>
              </div>
            ))}
          </div>

          <p className="fade-in-element">
            In my recent role at NavAR, I specialized in building indoor navigation systems using 
            cutting-edge AR technologies, while implementing robust CI/CD pipelines that accelerated 
            deployments by 40%. My experience with AWS and containerization enables me to develop 
            and maintain scalable cloud infrastructure, with a particular focus on optimizing 
            system performance.
          </p>

          <p className="fade-in-element">
            On the data science front, I've developed and deployed various machine learning models, 
            from sentiment analysis to neural networks for digit classification. I combine strong 
            software engineering practices with data science expertise to create maintainable, 
            production-ready solutions that deliver real business value.
          </p>
        </div>

        <div 
          className="technical-expertise fade-in-element"
          aria-label="Technical Skills and Expertise"
        >
          <h3>Technical Expertise</h3>
          {Object.entries(skillCategories).map(([category, { description, skills }], categoryIndex) => (
            <div 
              key={category} 
              className={`expertise-category ${getDelayClass(categoryIndex)}`}
              aria-label={`${category} Category`}
            >
              <h4>{category}</h4>
              <p className="category-description">{description}</p>
              <ul className="skills-list" aria-label={`${category} Skills`}>
                {skills.map((skill, skillIndex) => (
                  <li 
                    key={skill.name} 
                    className={`skill-item ${getDelayClass(skillIndex)}`}
                    aria-label={`${skill.name} Skill`}
                  >
                    <div 
                      role="button"
                      tabIndex={0}
                      onClick={() => trackSkillClick(skill.name)}
                      onKeyPress={(e) => handleKeyPress(e, () => trackSkillClick(skill.name))}
                    >
                      <Suspense fallback={<div className="skill-icon-placeholder" aria-hidden="true" />}>
                        <SkillIcon icon={skill.icon} name={skill.name} />
                      </Suspense>
                      <span>{skill.name}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div 
          className="key-interests fade-in-element"
          aria-label="Key Areas of Interest"
        >
          <h3>Key Interests</h3>
          <ul>
            <li>Backend Development & System Architecture</li>
            <li>Cloud Infrastructure & DevOps</li>
            <li>Machine Learning & Data Engineering</li>
            <li>Full-Stack Development</li>
          </ul>
        </div>

        <div 
          className="resume-section fade-in-element"
          aria-label="Resume Download Section"
        >
          <h3>Resume</h3>
          <p>For a detailed overview of my experience and qualifications, please download my resume:</p>
          <a 
            href={`${process.env.PUBLIC_URL}/assets/resume/softwareEngineeringResume.pdf`}
            target="_blank" 
            rel="noopener noreferrer" 
            className="resume-button"
            onClick={trackResumeDownload}
            download
            aria-label="Download Resume PDF"
          >
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
