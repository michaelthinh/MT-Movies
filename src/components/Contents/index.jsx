import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FaArrowAltCircleUp } from "react-icons/fa";
import MoviesRow from "./MoviesRow";
import {
    getOriginalMovies,
    getTrendingMovies,
    getTopRatedMovies,
    getActionMovies,
    getComedyMovies,
    getHorrorMovies,
    getRomanceMovies,
    getDocumentary,
} from "../../store/movies/moviesActions";

import { animateScroll as scroll } from "react-scroll";
import { useScrollY } from "../../hooks";

const Contents = () => {
    const [scrollY] = useScrollY();
    const dispatch = useDispatch();
    const originalMovies = useSelector((state) => state.movies.originalMovies);
    const trendingMovies = useSelector((state) => state.movies.trendingMovies);
    const topRatedMovies = useSelector((state) => state.movies.topRatedMovies);
    const actionMovies = useSelector((state) => state.movies.actionMovies);
    const comedyMovies = useSelector((state) => state.movies.comedyMovies);
    const horrorMovies = useSelector((state) => state.movies.horrorMovies);
    const romanceMovies = useSelector((state) => state.movies.romanceMovies);
    const documentary = useSelector((state) => state.movies.documentary);
    useEffect(() => {
        dispatch(getOriginalMovies());
        dispatch(getTrendingMovies());
        dispatch(getTopRatedMovies());
        dispatch(getActionMovies());
        dispatch(getComedyMovies());
        dispatch(getHorrorMovies());
        dispatch(getRomanceMovies());
        dispatch(getDocumentary());
    }, [dispatch]);
    const scrollToTopHandler = () => {
        console.log(scrollY);
        scroll.scrollToTop();
    };

    return (
        <div>
            <MoviesRow
                movies={originalMovies}
                title="Original Movies"
                isOriginalMovies={true}
                idSection="original"
            />
            <MoviesRow
                movies={trendingMovies}
                title="Trending Movies"
                idSection="trending"
            />
            <MoviesRow
                movies={topRatedMovies}
                title="Top Rated Movies"
                idSection="topRated"
            />
            <MoviesRow
                movies={actionMovies}
                title="Action Movies"
                idSection="action"
            />
            <MoviesRow
                movies={comedyMovies}
                title="Comedy Movies"
                idSection="comedy"
            />
            <MoviesRow
                movies={horrorMovies}
                title="Horror Movies"
                idSection="horror"
            />
            <MoviesRow
                movies={romanceMovies}
                title="Romance Movies"
                idSection="romance"
            />
            <MoviesRow
                movies={documentary}
                title="Documentary"
                idSection="documentary"
            />
            <div
                onClick={scrollToTopHandler}
                style={{
                    visibility: `${scrollY > 800 ? "visible" : "hidden"}`,
                }}
                className="text-white bg-black rounded-full border-none outline-none cursor-pointer fixed z-30 right-16 bottom-12 text-8xl transition-all hover:text-black hover:bg-white"
            >
                <FaArrowAltCircleUp />
            </div>
        </div>
    );
};

export default Contents;
