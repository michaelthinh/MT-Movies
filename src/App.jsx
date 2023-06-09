import { useSelector } from "react-redux";

import "./App.css";
import Contents from "./components/Contents";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Menu from "./components/Menu";
import MovieDetail from "./components/MovieDetail";

function App() {
    const movieDetail = useSelector((state) => state.movies.movieDetail);
    return (
        <>
            <Header />
            <Intro />
            <Contents />
            <Menu />
            <MovieDetail
                movie={movieDetail}
                showModal={movieDetail ? true : false}
            />
        </>
    );
}

export default App;
