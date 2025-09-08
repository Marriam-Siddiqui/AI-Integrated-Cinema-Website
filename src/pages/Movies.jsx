import { useState, useEffect } from 'react'
import axios from 'axios'
import './Movies.css'

const Movies = () => {
  const [movies, setMovies] = useState([])
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/movies/')
      .then(response => setMovies(response.data.movies))
      .catch(() => {
        setMovies([
          {title: "Inception", genre: "Sci-Fi", showtimes: ["3PM", "9PM"], rating: 4.8},
          {title: "Pulp Fiction", genre: "Crime", showtimes: ["5PM", "11PM"], rating: 4.7},
          {title: "The Dark Knight", genre: "Action", showtimes: ["2PM", "8PM"], rating: 4.9},
          {title: "Forrest Gump", genre: "Drama", showtimes: ["4PM", "10PM"], rating: 4.6},
          {title: "The Matrix", genre: "Sci-Fi", showtimes: ["6PM", "12AM"], rating: 4.7},
          {title: "Goodfellas", genre: "Crime", showtimes: ["7PM", "11PM"], rating: 4.8}
        ])
      })
  }, [])

  const filteredMovies = filter === 'all' 
    ? movies 
    : movies.filter(movie => movie.genre.toLowerCase() === filter.toLowerCase())

  return (
    <div className="movies-page">
      <div className="page-header">
        <h1>🎬 Now Showing</h1>
        <p>Discover amazing movies playing near you</p>
      </div>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        <button 
          className={filter === 'all' ? 'active' : ''} 
          onClick={() => setFilter('all')}
        >
          All Movies
        </button>
        <button 
          className={filter === 'sci-fi' ? 'active' : ''} 
          onClick={() => setFilter('sci-fi')}
        >
          Sci-Fi
        </button>
        <button 
          className={filter === 'crime' ? 'active' : ''} 
          onClick={() => setFilter('crime')}
        >
          Crime
        </button>
        <button 
          className={filter === 'action' ? 'active' : ''} 
          onClick={() => setFilter('action')}
        >
          Action
        </button>
        <button 
          className={filter === 'drama' ? 'active' : ''} 
          onClick={() => setFilter('drama')}
        >
          Drama
        </button>
      </div>

      {/* Movies Grid */}
      <div className="movies-grid">
        {filteredMovies.map((movie, index) => (
          <div key={index} className="movie-card">
            <div className="movie-header">
              <h3>{movie.title}</h3>
              <span className="rating">⭐ {movie.rating}</span>
            </div>
            <div className="movie-genre">{movie.genre}</div>
            <div className="showtimes">
              <strong>Showtimes:</strong>
              <div className="time-slots">
                {movie.showtimes.map((time, i) => (
                  <span key={i} className="time-slot">{time}</span>
                ))}
              </div>
            </div>
            <button className="book-btn">Book Tickets</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Movies