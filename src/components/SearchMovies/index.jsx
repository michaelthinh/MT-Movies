import { useEffect } from "react";
import { useViewPort } from "../../hooks";
import classes from "./SearchMovies.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
    getSearchMovies,
    getMovieDetail,
} from "../../store/movies/moviesActions";
import { getBackdropImage } from "../../utils";

const useQuery = () => new URLSearchParams(useLocation().search);

const SearchMovies = () => {
    const [windowWidth] = useViewPort();
    const dispatch = useDispatch();
    const searchMovies = useSelector((state) => state.movies.searchMovies);
    const keywords = useQuery().get("keywords");
    useEffect(() => {
        if (keywords) {
            dispatch(getSearchMovies(keywords));
        }
    }, [keywords, dispatch]);
    const handleGetMovieDetail = (movie) => {
        dispatch(getMovieDetail(movie));
    };
    return (
        <div className={classes.searchContainer}>
            {searchMovies && searchMovies.length > 0 ? (
                <div
                    className={classes.searchContent}
                    style={{
                        gridTemplateColumns: `repeat(${
                            windowWidth > 1200
                                ? 5
                                : windowWidth > 992
                                ? 4
                                : windowWidth > 768
                                ? 3
                                : windowWidth > 600
                                ? 2
                                : 1
                        },auto)`,
                    }}
                >
                    {searchMovies.map((movie, index) => {
                        if (
                            movie.backdrop_path !== null &&
                            movie.media_type !== "person"
                        ) {
                            return (
                                <div
                                    className={classes.movieItem}
                                    key={index}
                                    onClick={() => {
                                        handleGetMovieDetail(movie);
                                    }}
                                >
                                    <img
                                        src={getBackdropImage(
                                            movie.backdrop_path
                                        )}
                                        alt={movie.name || movie.title}
                                    />
                                    <span>{movie.name || movie.title}</span>
                                </div>
                            );
                        }
                    })}
                </div>
            ) : (
                <div className={classes.notFound}>
                    Your search for "keyword" did not have any matches
                </div>
            )}
        </div>
    );
};

export default SearchMovies;
