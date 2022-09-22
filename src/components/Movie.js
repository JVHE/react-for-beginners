import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ title, year, summary, medium_cover_image, genres }) {
    return (
        <div>
            <h2>
                <Link to="/movie" >{title}</Link>
                </h2>
            <p>{summary}</p>
            <h3>{year}</h3>
            <img src={medium_cover_image} alt={title} />
            <ul>
                {genres.map(genre => (
                    <li key={genre}>{genre}</li>
                ))}
            </ul>
        </div>
    );
}
Movie.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;
