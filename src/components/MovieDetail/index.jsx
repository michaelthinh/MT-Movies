import { getMovieDetail } from "../../store/movies/moviesActions";
import classes from "./MovieDetail.module.scss";
import { useDispatch } from "react-redux";
import moment from "moment";

const MovieDetail = (props) => {
    const { movie, showModal } = props;
    const dispatch = useDispatch();
    const closeModalHandler = () => {
        dispatch(getMovieDetail(null));
    };
    return (
        <div className={classes.movieDetailModal}>
            <div
                onClick={closeModalHandler}
                className={`${classes.backdrop} ${
                    showModal ? classes.showBackdrop : classes.hideBackdrop
                }`}
            ></div>
            <div
                className={`${classes.modal} ${
                    showModal ? classes.showModal : classes.hideModal
                }`}
                style={
                    movie && {
                        backgroundImage: `url(https://image.tmdb.org/t/p/original/${
                            movie.backdrop_path || movie.poster_path
                        })`,
                        backgroundSize: "cover",
                    }
                }
            >
                <div className={classes.container}>
                    <div className={classes.movieInfo}>
                        <h1 className={classes.movieTitle}>
                            {movie && (movie.title || movie.name)}
                        </h1>
                        <p className={classes.movieStats}>
                            <span className={classes.movieRating}>
                                Rating: {movie && movie.vote_average} ⭐
                            </span>
                            <span className={classes.moviePopularity}>
                                Popularity: {movie && movie.popularity}
                            </span>
                        </p>
                        <p className={classes.movieVoteCount}>
                            Vote count: {movie && movie.vote_count}
                        </p>
                        <p className={classes.movieReleaseDate}>
                            Release date:{" "}
                            {movie &&
                                (moment(movie.release_date).format(
                                    "DD/MM/YYYY"
                                ) ||
                                    moment(movie.first_air_date).format(
                                        "DD/MM/YYYY"
                                    ))}
                        </p>

                        <p className={classes.movieOverview}>
                            {movie && movie.overview}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;
