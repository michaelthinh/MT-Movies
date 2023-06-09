import { useSelector } from "react-redux";

import Contents from "../components/Contents";
import Intro from "../components/Intro";
import Menu from "../components/Menu";
import MovieDetail from "../components/MovieDetail";
import { useEffect, useState } from "react";

const Home = () => {
    const movieDetail = useSelector((state) => state.movies.movieDetail);
    const [isShowMovieDetail, setIsShowMovieDetail] = useState(false);
    useEffect(() => {
        setIsShowMovieDetail(movieDetail ? true : false);
    }, [movieDetail]);
    return (
        <>
            <Intro />
            <Contents />
            <Menu />
            <MovieDetail movie={movieDetail} showModal={isShowMovieDetail} />
        </>
    );
};

export default Home;
