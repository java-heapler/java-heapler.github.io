import React from 'react';
import { motion } from 'framer-motion';

const TailwindDemo = () => {
  return (
    <section className="py-16 bg-bg-light">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Hybrid Tailwind + Custom CSS Demo
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            This component demonstrates how to use Tailwind utility classes alongside your existing custom CSS.
            You can mix and match both approaches for maximum flexibility.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Pure Tailwind */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-bg-lighter rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="text-secondary text-3xl mb-4">🎨</div>
            <h3 className="text-text-primary text-xl font-semibold mb-3">Pure Tailwind</h3>
            <p className="text-text-secondary">
              This card uses only Tailwind utility classes for styling. Clean and consistent.
            </p>
          </motion.div>

          {/* Card 2: Hybrid Approach */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-bg-lighter rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="text-secondary text-3xl mb-4">🔀</div>
            <h3 className="text-text-primary text-xl font-semibold mb-3">Hybrid Approach</h3>
            <p className="text-text-secondary">
              This card combines Tailwind utilities with your existing CSS classes.
            </p>
            <button className="mt-4 bg-secondary text-primary px-4 py-2 rounded hover:bg-opacity-90 transition-colors">
              Hybrid Button
            </button>
          </motion.div>

          {/* Card 3: Custom CSS with Tailwind */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-bg-lighter rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="text-secondary text-3xl mb-4">⚡</div>
            <h3 className="text-text-primary text-xl font-semibold mb-3">Custom + Tailwind</h3>
            <p className="text-text-secondary">
              Uses your existing CSS classes enhanced with Tailwind utilities.
            </p>
            <div className="mt-4 flex space-x-2">
              <span className="inline-block bg-secondary text-primary px-2 py-1 rounded text-sm">
                Custom
              </span>
              <span className="inline-block bg-text-secondary text-primary px-2 py-1 rounded text-sm">
                Tailwind
              </span>
            </div>
          </motion.div>
        </div>

        {/* Responsive Demo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 bg-bg-lighter rounded-lg p-8"
        >
          <h3 className="text-text-primary text-2xl font-semibold mb-6 text-center">
            Responsive Design with Tailwind
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {['Mobile', 'Tablet', 'Desktop', 'Large'].map((device, index) => (
              <div
                key={device}
                className="bg-primary text-text-primary p-4 rounded text-center"
              >
                <div className="text-secondary text-lg font-medium">{device}</div>
                <div className="text-text-secondary text-sm mt-1">
                  {index === 0 && 'Default (Mobile)'}
                  {index === 1 && 'sm: 640px+'}
                  {index === 2 && 'lg: 1024px+'}
                  {index === 3 && 'xl: 1280px+'}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TailwindDemo; 