import {useState, useEffect} from 'react';
import Movie from '../components/Movie';

function Home() {

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
          <Movie key={movie.id} genres={movie.genres} title={movie.title} year={movie.year} summary={movie.summary} medium_cover_image={movie.medium_cover_image} />
        ))}
    </div>
  );
}

export default Home;
