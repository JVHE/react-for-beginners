import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year");
    const json = await response.json();
    setMovies(json.data.movies);

    setLoading(false);
    console.log(json.data.movies);
  }
  useEffect(() => {
    getMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Movies</h1>
        {movies.map(movie => (
          <div>
            <h2>{movie.title}</h2>
            <p>{movie.summary}</p>
            <h3>{movie.year}</h3>
            <img src={movie.medium_cover_image} alt={movie.title} />
            <ul>
              {movie.genres.map(genre => (
                <li>{genre}</li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
}

export default App;
