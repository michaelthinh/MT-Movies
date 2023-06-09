import "./App.css";
import Contents from "./components/Contents";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Menu from "./components/Menu";
import MovieDetail from "./components/MovieDetail";

function App() {
    return (
        <>
            <Header />
            <Intro />
            <Contents />
            <Menu />
            <MovieDetail />
        </>
    );
}

export default App;
