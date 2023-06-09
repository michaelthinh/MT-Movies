import MoviesRow from "./MoviesRow";

const movies = [
    "https://assets-prd.ignimgs.com/2021/09/21/en-us-arcane-character-jinx-vertical-4x5-rgb-1632264982243.jpg",
    "https://m.media-amazon.com/images/M/MV5BZGRlNTY3NGYtM2YzZS00N2YyLTg0ZDYtNmY2ZDg2NDM3N2JlXkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_FMjpg_UX1000_.jpg",
    "https://assets-prd.ignimgs.com/2021/09/21/en-us-arcane-character-jinx-vertical-4x5-rgb-1632264982243.jpg",
    "https://m.media-amazon.com/images/M/MV5BZGRlNTY3NGYtM2YzZS00N2YyLTg0ZDYtNmY2ZDg2NDM3N2JlXkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_FMjpg_UX1000_.jpg",
    "https://assets-prd.ignimgs.com/2021/09/21/en-us-arcane-character-jinx-vertical-4x5-rgb-1632264982243.jpg",
    "https://assets-prd.ignimgs.com/2021/09/21/en-us-arcane-character-jinx-vertical-4x5-rgb-1632264982243.jpg",
    "https://assets-prd.ignimgs.com/2021/09/21/en-us-arcane-character-jinx-vertical-4x5-rgb-1632264982243.jpg",
    "https://assets-prd.ignimgs.com/2021/09/21/en-us-arcane-character-jinx-vertical-4x5-rgb-1632264982243.jpg",
    "https://assets-prd.ignimgs.com/2021/09/21/en-us-arcane-character-jinx-vertical-4x5-rgb-1632264982243.jpg",
    "https://assets-prd.ignimgs.com/2021/09/21/en-us-arcane-character-jinx-vertical-4x5-rgb-1632264982243.jpg",
    "https://assets-prd.ignimgs.com/2021/09/21/en-us-arcane-character-jinx-vertical-4x5-rgb-1632264982243.jpg",
    "https://assets-prd.ignimgs.com/2021/09/21/en-us-arcane-character-jinx-vertical-4x5-rgb-1632264982243.jpg",
    "https://assets-prd.ignimgs.com/2021/09/21/en-us-arcane-character-jinx-vertical-4x5-rgb-1632264982243.jpg",
    "https://assets-prd.ignimgs.com/2021/09/21/en-us-arcane-character-jinx-vertical-4x5-rgb-1632264982243.jpg",
];

const Contents = () => {
    return (
        <div>
            <MoviesRow
                movies={movies}
                title="Original Movies"
                isOriginalMovies={true}
            />
            <MoviesRow movies={movies} title="Trending Movies" />
            <MoviesRow movies={movies} title="Top Rated Movies" />
            <MoviesRow movies={movies} title="Action Movies" />
            <MoviesRow movies={movies} title="Comedy Movies" />
            <MoviesRow movies={movies} title="Horror Movies" />
            <MoviesRow movies={movies} title="Romance Movies" />
            <MoviesRow movies={movies} title="Documentary" />
        </div>
    );
};

export default Contents;
