import MovieDetail from "../components/MovieDetail";
import SearchMovies from "../components/SearchMovies";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const Search = (props) => {
    const movieDetail = useSelector((state) => state.movies.movieDetail);
    const [isShowMovieDetail, setIsShowMovieDetail] = useState(false);
    useEffect(() => {
        setIsShowMovieDetail(movieDetail ? true : false);
    }, [movieDetail]);
    return (
        <>
            <SearchMovies />
            <MovieDetail showModal={isShowMovieDetail} movie={movieDetail} />
        </>
    );
};

export default Search;
