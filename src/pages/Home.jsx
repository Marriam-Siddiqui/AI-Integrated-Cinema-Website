import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to <span className="gradient-text">CinemaAI</span></h1>
          <p>Your intelligent movie experience powered by AI</p>
          <div className="hero-buttons">
            <Link to="/movies" className="btn btn-primary">Explore Movies</Link>
            <Link to="/chat-ai" className="btn btn-secondary">Talk to AI</Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="floating-card">
            <div className="movie-poster"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose CinemaAI?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <h3>AI Powered</h3>
            <p>Smart recommendations and instant answers</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎬</div>
            <h3>Latest Movies</h3>
            <p>Always updated with newest releases</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Fast & Smooth</h3>
            <p>Lightning fast browsing experience</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to Explore?</h2>
        <p>Discover amazing movies and chat with our AI assistant</p>
        <Link to="/movies" className="btn btn-large">Get Started</Link>
      </section>
    </div>
  )
}

export default Home