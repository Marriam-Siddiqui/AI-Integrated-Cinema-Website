import './About.css'

const About = () => {
  return (
    <div className="about-page">
      <div className="page-header">
        <h1>About CinemaAI</h1>
        <p>Revolutionizing your movie experience with artificial intelligence</p>
      </div>

      <div className="about-content">
        {/* Mission Section */}
        <section className="about-section">
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>
              At CinemaAI, we're passionate about transforming how you discover and experience movies. 
              Our AI-powered platform combines cutting-edge technology with a deep love for cinema to 
              create personalized movie recommendations and intelligent assistance.
            </p>
            <p>
              Whether you're looking for your next favorite film or need instant information about 
              showtimes, our AI assistant is here to help 24/7.
            </p>
          </div>
          <div className="about-image">
            <div className="image-placeholder mission-image"></div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="about-section reverse">
          <div className="about-text">
            <h2>AI Technology</h2>
            <p>
              Our custom-built AI system uses machine learning algorithms trained on thousands of 
              movie datasets to understand your preferences and provide accurate recommendations.
            </p>
            <ul className="tech-features">
              <li>🎯 Personalized movie suggestions</li>
              <li>⚡ Instant showtime information</li>
              <li>🤖 Natural language processing</li>
              <li>📊 Smart analytics and insights</li>
            </ul>
          </div>
          <div className="about-image">
            <div className="image-placeholder tech-image"></div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar"></div>
              <h3>Alex Chen</h3>
              <p>AI Research Lead</p>
              <span className="member-bio">10+ years in machine learning</span>
            </div>
            <div className="team-member">
              <div className="member-avatar"></div>
              <h3>Sarah Johnson</h3>
              <p>Frontend Developer</p>
              <span className="member-bio">React & UI/UX specialist</span>
            </div>
            <div className="team-member">
              <div className="member-avatar"></div>
              <h3>Mike Rodriguez</h3>
              <p>Backend Engineer</p>
              <span className="member-bio">Django & database expert</span>
            </div>
            <div className="team-member">
              <div className="member-avatar"></div>
              <h3>Emily Davis</h3>
              <p>Product Designer</p>
              <span className="member-bio">Cinema enthusiast & designer</span>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <h2>Our Impact</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">10,000+</div>
              <div className="stat-label">Movies Analyzed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">95%</div>
              <div className="stat-label">Accuracy Rate</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">AI Assistance</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Uptime</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About