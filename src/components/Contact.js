import React, { useState } from 'react';
import { trackError } from '../utils/errorTracking';
import { logEvent } from '../utils/analytics';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const validateForm = () => {
    const errors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }
    
    // Email validation
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    // Message validation
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setError(null);

    try {
      // Using Formspree for form submission
      const response = await fetch('https://formspree.io/f/xbjnkdvw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      // Track successful submission
      logEvent('Contact', 'Form Submitted', 'Contact Form');
      setIsSubmitted(true);
    } catch (err) {
      trackError(err, 'ContactForm');
      setError('There was a problem submitting your form. Please try again or email me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: null
      });
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    
    // Validate individual field on blur
    const errors = { ...formErrors };
    
    if (name === 'name') {
      if (!formData.name.trim()) {
        errors.name = 'Name is required';
      } else if (formData.name.trim().length < 2) {
        errors.name = 'Name must be at least 2 characters';
      } else {
        delete errors.name;
      }
    }
    
    if (name === 'email') {
      if (!formData.email.trim()) {
        errors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.email = 'Please enter a valid email address';
      } else {
        delete errors.email;
      }
    }
    
    if (name === 'message') {
      if (!formData.message.trim()) {
        errors.message = 'Message is required';
      } else if (formData.message.trim().length < 10) {
        errors.message = 'Message must be at least 10 characters';
      } else {
        delete errors.message;
      }
    }
    
    setFormErrors(errors);
  };

  return (
    <section className="contact-section" id="contact">
      <h2>Contact Me</h2>
      {isSubmitted ? (
        <div className="success-message">
          <p>Thank you for your message! I'll get back to you soon.</p>
          <button 
            onClick={() => {
              setIsSubmitted(false);
              setFormData({ name: '', email: '', message: '' });
              setFormErrors({});
            }}
            className="send-another-btn"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className={`form-group ${formErrors.name ? 'has-error' : ''}`}>
            <label htmlFor="name">Your name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              disabled={isSubmitting}
              aria-invalid={!!formErrors.name}
              aria-describedby={formErrors.name ? "name-error" : undefined}
            />
            {formErrors.name && (
              <div className="field-error" id="name-error">{formErrors.name}</div>
            )}
          </div>
          <div className={`form-group ${formErrors.email ? 'has-error' : ''}`}>
            <label htmlFor="email">Your email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              disabled={isSubmitting}
              aria-invalid={!!formErrors.email}
              aria-describedby={formErrors.email ? "email-error" : undefined}
            />
            {formErrors.email && (
              <div className="field-error" id="email-error">{formErrors.email}</div>
            )}
          </div>
          <div className={`form-group ${formErrors.message ? 'has-error' : ''}`}>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              disabled={isSubmitting}
              aria-invalid={!!formErrors.message}
              aria-describedby={formErrors.message ? "message-error" : undefined}
            />
            {formErrors.message && (
              <div className="field-error" id="message-error">{formErrors.message}</div>
            )}
          </div>
          {error && <div className="error-message" role="alert">{error}</div>}
          <button 
            type="submit" 
            disabled={isSubmitting}
            className={isSubmitting ? 'submitting' : ''}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
      <div className="direct-contact">
        <p>Or reach me directly at: <a href="mailto:jheupler@berkeley.edu">jheupler@berkeley.edu</a></p>
      </div>
    </section>
  );
}

export default Contact;
