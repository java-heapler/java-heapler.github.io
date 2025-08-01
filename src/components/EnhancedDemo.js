import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaDatabase, FaCloud, FaBrain } from 'react-icons/fa';

const EnhancedDemo = () => {
  const skills = [
    { name: 'Backend Development', icon: FaCode, color: 'from-blue-500 to-blue-600' },
    { name: 'Database Design', icon: FaDatabase, color: 'from-green-500 to-green-600' },
    { name: 'Cloud Architecture', icon: FaCloud, color: 'from-purple-500 to-purple-600' },
    { name: 'Machine Learning', icon: FaBrain, color: 'from-pink-500 to-pink-600' },
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Scalable backend system with microservices architecture',
      tech: ['Node.js', 'PostgreSQL', 'Redis', 'Docker'],
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      title: 'AI Recommendation Engine',
      description: 'Machine learning system for personalized recommendations',
      tech: ['Python', 'TensorFlow', 'FastAPI', 'MongoDB'],
      gradient: 'from-green-500 to-blue-600',
    },
    {
      title: 'Real-time Analytics Dashboard',
      description: 'Real-time data visualization and analytics platform',
      tech: ['React', 'WebSocket', 'InfluxDB', 'Grafana'],
      gradient: 'from-purple-500 to-pink-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 transition-colors duration-500">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 dark:bg-blue-800/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 dark:bg-purple-800/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-indigo-200/30 dark:bg-indigo-800/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent mb-6">
              Enhanced Portfolio Demo
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Showcasing the integration of modern design elements, animations, and enhanced styling from the jheupler-site template.
            </p>
          </motion.div>

          {/* Skills Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-12">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border border-gray-200 dark:border-gray-700">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-300`}>
                      <skill.icon />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-center">
                      {skill.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Projects Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-12">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border border-gray-200 dark:border-gray-700 h-full">
                    <div className={`w-full h-32 rounded-lg bg-gradient-to-r ${project.gradient} mb-6 flex items-center justify-center text-white text-4xl font-bold`}>
                      {project.title.charAt(0)}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Interactive Demo Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-12">
              Interactive Elements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Glass Morphism Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass rounded-xl p-8 text-center"
              >
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                  Glass Morphism Effect
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  This card demonstrates the glass morphism effect with backdrop blur and transparency.
                </p>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105">
                  Interactive Button
                </button>
              </motion.div>

              {/* Gradient Text Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-8 text-center shadow-lg"
              >
                <h3 className="text-2xl font-bold gradient-text mb-4">
                  Gradient Text Effect
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  This heading uses a beautiful gradient text effect that works in both light and dark modes.
                </p>
                <div className="flex justify-center space-x-4">
                  <div className="w-4 h-4 bg-blue-400 rounded-full animate-ping"></div>
                  <div className="w-4 h-4 bg-purple-400 rounded-full animate-ping animation-delay-1000"></div>
                  <div className="w-4 h-4 bg-indigo-400 rounded-full animate-ping animation-delay-2000"></div>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Animation Showcase */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-12">
              Animation Showcase
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-float"></div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Float Animation</h3>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-pulse-ring"></div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Pulse Ring</h3>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-glow"></div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Glow Effect</h3>
              </motion.div>
            </div>
          </motion.section>

          {/* Contact Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8">
              Get In Touch
            </h2>
            <div className="flex justify-center space-x-6">
              <motion.a
                href="https://github.com/java-heapler"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                className="p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <FaGithub className="text-2xl" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/joseph-heupler/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                className="p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <FaLinkedin className="text-2xl" />
              </motion.a>
              <motion.a
                href="mailto:jheupler@berkeley.edu"
                whileHover={{ scale: 1.1, y: -5 }}
                className="p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <FaEnvelope className="text-2xl" />
              </motion.a>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default EnhancedDemo; 