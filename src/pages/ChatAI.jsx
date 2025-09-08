import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import './ChatAI.css'

const ChatAI = () => {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async () => {
    if (!input.trim() || loading) return

    const userMessage = input.trim()
    setInput('')
    setMessages(prev => [...prev, { text: userMessage, sender: 'user' }])
    setLoading(true)
    setIsTyping(true)

    // Simulate typing delay for better UX
    await new Promise(resolve => setTimeout(resolve, 1000))

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/chat/', {
        message: userMessage
      })
      
      setMessages(prev => [...prev, { 
        text: response.data.response, 
        sender: 'bot' 
      }])
    } catch (error) {
      console.error('Chat error:', error)
      setMessages(prev => [...prev, { 
        text: "I'm having trouble connecting to the server. Please make sure the backend is running on port 8000.", 
        sender: 'bot' 
      }])
    } finally {
      setLoading(false)
      setIsTyping(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const suggestedQuestions = [
    "What sci-fi movies are playing?",
    "When is the next showing of Inception?",
    "What crime movies do you have?",
    "Tell me about your showtimes",
    "What's the latest movie?"
  ]

  return (
    <div className="chat-ai-page">
      <div className="page-header">
        <h1>AI Movie Assistant</h1>
        <p>Ask me anything about movies, showtimes, and recommendations!</p>
      </div>

      <div className="chat-container">
        {/* Chat Header */}
        <div className="chat-header">
          <div className="bot-avatar">
            <div className="avatar-icon">🤖</div>
          </div>
          <div className="bot-info">
            <h3>CinemaAI Assistant</h3>
            <p>{isTyping ? 'Typing...' : 'Online'}</p>
          </div>
          <div className="chat-actions">
            <button className="action-btn">⚡</button>
            <button className="action-btn">⋮</button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="chat-messages">
          {messages.length === 0 && (
            <div className="welcome-message">
              <div className="welcome-content">
                <h3>Hello! I'm your AI movie assistant 🎬</h3>
                <p>I can help you with:</p>
                <ul>
                  <li>Movie showtimes and schedules</li>
                  <li>Genre recommendations</li>
                  <li>Movie information and details</li>
                  <li>Booking assistance</li>
                </ul>
                <p>What would you like to know?</p>
              </div>
            </div>
          )}

          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              <div className="message-content">
                {message.text}
              </div>
              <div className="message-time">
                {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="message bot typing">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Questions */}
        {messages.length === 0 && (
          <div className="suggested-questions">
            <h4>Try asking:</h4>
            <div className="question-chips">
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  className="question-chip"
                  onClick={() => setInput(question)}
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Chat Input */}
        <div className="chat-input-container">
          <div className="input-wrapper">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message here..."
              disabled={loading}
              className="chat-input"
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className="send-button"
            >
              {loading ? '⏳' : '📤'}
            </button>
          </div>
          <div className="input-footer">
            <span>Press Enter to send</span>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="chat-stats">
        <div className="stat">
          <span className="stat-number">{messages.filter(m => m.sender === 'user').length}</span>
          <span className="stat-label">Messages Sent</span>
        </div>
        <div className="stat">
          <span className="stat-number">24/7</span>
          <span className="stat-label">Availability</span>
        </div>
        <div className="stat">
          <span className="stat-number">100%</span>
          <span className="stat-label">AI Powered</span>
        </div>
      </div>
    </div>
  )
}

export default ChatAI