import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);

    const { id } = useParams();
    console.log(id);
    const getMovie = async () => {
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
        const json = await response.json();
        setMovie(json.data.movie);
        console.log(json);
        setLoading(false);
    }
    useEffect(() => getMovie, []);

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h1>Detail</h1>

            <div>
                <h2>
                    {movie.title}
                </h2>

                <p>{movie.summary}</p>
                <h3>{movie.year}</h3>
                <img src={movie.medium_cover_image} alt={movie.title} />
                <ul>
                    {movie.genres.map(genre => (
                        <li key={genre}>{genre}</li>
                    ))}
                </ul>
                <h3>Rating: {movie.rating}</h3>
                <h3>Runtime: {movie.runtime}</h3>
                <h3>Language: {movie.language}</h3>
                <h3>Download: {movie.download_count}</h3>
                <h3>Like: {movie.like_count}</h3>
                <h3>Dislike: {movie.dislike_count}</h3>
                <h3>Youtube: {movie.yt_trailer_code}</h3>
                <h3>Background: {movie.background_image}</h3>
                <h3>Background Original: {movie.background_image_original}</h3>
                <h3>Small Cover: {movie.small_cover_image}</h3>
                <h3>Medium Cover: {movie.medium_cover_image}</h3>
                <h3>Large Cover: {movie.large_cover_image}</h3>
            </div>
        </div>
    );
}

export default Detail;
