import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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

const Contents = () => {
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
    return (
        <div>
            <MoviesRow
                movies={originalMovies}
                title="Original Movies"
                isOriginalMovies={true}
            />
            <MoviesRow movies={trendingMovies} title="Trending Movies" />
            <MoviesRow movies={topRatedMovies} title="Top Rated Movies" />
            <MoviesRow movies={actionMovies} title="Action Movies" />
            <MoviesRow movies={comedyMovies} title="Comedy Movies" />
            <MoviesRow movies={horrorMovies} title="Horror Movies" />
            <MoviesRow movies={romanceMovies} title="Romance Movies" />
            <MoviesRow movies={documentary} title="Documentary" />
        </div>
    );
};

export default Contents;
