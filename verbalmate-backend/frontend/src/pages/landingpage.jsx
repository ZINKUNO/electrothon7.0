import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <nav className="navbar">
        <Link to="/" className="logo">
          <span className="logo-icon">🎤</span>
          <span className="logo-text">VerbalMate AI</span>
        </Link>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#pricing">Pricing</a>
          <Link to="/app" className="cta-button nav-cta">Try Now</Link>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Transform Your Speech Into Insights</h1>
          <p className="hero-subtitle">
            Harness the power of AI to analyze your conversations, improve communication skills, and get actionable feedback in real-time.
          </p>
          <div className="hero-buttons">
            <Link to="/app" className="cta-button primary">Get Started Free</Link>
            <a href="#demo" className="cta-button secondary">Watch Demo</a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">Accuracy</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50K+</span>
              <span className="stat-label">Users</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src="/hero-image.png" alt="VerbalMate AI in action" />
        </div>
      </section>

      <section id="features" className="features">
        <h2 className="section-title">Why Choose VerbalMate AI?</h2>
        <p className="section-subtitle">Powerful features to enhance your communication skills</p>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎙️</div>
            <h3>Advanced Speech Recognition</h3>
            <p>Industry-leading accuracy with support for multiple languages and accents.</p>
            <ul className="feature-list">
              <li>Real-time transcription</li>
              <li>Multi-language support</li>
              <li>Accent recognition</li>
            </ul>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Detailed Analytics</h3>
            <p>Get comprehensive insights into your speaking patterns and areas for improvement.</p>
            <ul className="feature-list">
              <li>Speaking pace analysis</li>
              <li>Sentiment detection</li>
              <li>Keyword tracking</li>
            </ul>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">💡</div>
            <h3>Smart Feedback</h3>
            <p>Receive personalized suggestions to enhance your communication effectiveness.</p>
            <ul className="feature-list">
              <li>Custom recommendations</li>
              <li>Progress tracking</li>
              <li>Performance metrics</li>
            </ul>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Enterprise Security</h3>
            <p>Your data is protected with enterprise-grade security and encryption.</p>
            <ul className="feature-list">
              <li>End-to-end encryption</li>
              <li>GDPR compliant</li>
              <li>Secure cloud storage</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="how-it-works">
        <h2 className="section-title">How It Works</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Record or Upload</h3>
            <p>Record your speech directly or upload an audio file</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>AI Analysis</h3>
            <p>Our AI processes and analyzes your speech patterns</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Get Insights</h3>
            <p>Receive detailed feedback and actionable suggestions</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Improve Your Communication?</h2>
          <p>Join thousands of professionals who are enhancing their speaking skills with VerbalMate AI</p>
          <Link to="/app" className="cta-button primary">Start Free Trial</Link>
        </div>
      </section>

      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h3>VerbalMate AI</h3>
            <p>Transforming speech into actionable insights</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#about">About Us</a>
          </div>
          <div className="footer-section">
            <h3>Support</h3>
            <a href="#help">Help Center</a>
            <a href="#docs">Documentation</a>
            <a href="#contact">Contact Us</a>
          </div>
          <div className="footer-section">
            <h3>Legal</h3>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 VerbalMate AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage; 