import { useViewPort } from "../../hooks";
import classes from "./SearchMovies.module.scss";

const moviesList = [
    "https://m.media-amazon.com/images/M/MV5BMWYxNGJhNmQtZmI4OS00NjQ1LThmNzAtY2JkYmQ5NjliNDgwXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMWYxNGJhNmQtZmI4OS00NjQ1LThmNzAtY2JkYmQ5NjliNDgwXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMWYxNGJhNmQtZmI4OS00NjQ1LThmNzAtY2JkYmQ5NjliNDgwXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMWYxNGJhNmQtZmI4OS00NjQ1LThmNzAtY2JkYmQ5NjliNDgwXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMWYxNGJhNmQtZmI4OS00NjQ1LThmNzAtY2JkYmQ5NjliNDgwXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMWYxNGJhNmQtZmI4OS00NjQ1LThmNzAtY2JkYmQ5NjliNDgwXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMWYxNGJhNmQtZmI4OS00NjQ1LThmNzAtY2JkYmQ5NjliNDgwXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMWYxNGJhNmQtZmI4OS00NjQ1LThmNzAtY2JkYmQ5NjliNDgwXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMWYxNGJhNmQtZmI4OS00NjQ1LThmNzAtY2JkYmQ5NjliNDgwXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMWYxNGJhNmQtZmI4OS00NjQ1LThmNzAtY2JkYmQ5NjliNDgwXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg",
];

const SearchMovies = () => {
    const [windowWidth] = useViewPort();
    return (
        <div className={classes.searchContainer}>
            {moviesList && moviesList.length > 0 ? (
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
                    {moviesList.map((movie, index) => (
                        <div className={classes.movieItem} key={index}>
                            <img src={movie} alt="" />
                            <span>Movie name</span>
                        </div>
                    ))}
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
