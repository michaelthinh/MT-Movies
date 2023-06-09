import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        originalMovies: null,
        trendingMovies: null,
        topRatedMovies: null,
        actionMovies: null,
        comedyMovies: null,
        horrorMovies: null,
        romanceMovies: null,
        documentary: null,
        movieDetail: null,
        loading: true,
        searchMovies: null,
    },
    reducers: {
        setLoading(state, action) {
            state.loading = action.payload.value;
        },
        setOriginalMovies(state, action) {
            state.originalMovies = action.payload.movies;
        },
        setTrendingMovies(state, action) {
            state.trendingMovies = action.payload.movies;
        },
        setTopRatedMovies(state, action) {
            state.topRatedMovies = action.payload.movies;
        },
        setActionMovies(state, action) {
            state.actionMovies = action.payload.movies;
        },
        setComedyMovies(state, action) {
            state.comedyMovies = action.payload.movies;
        },
        setHorrorMovies(state, action) {
            state.horrorMovies = action.payload.movies;
        },
        setRomanceMovies(state, action) {
            state.romanceMovies = action.payload.movies;
        },
        setDocumentary(state, action) {
            state.documentary = action.payload.movies;
        },
        setMovieDetail(state, action) {
            state.movieDetail = action.payload.movie;
        },
        setSearchMovies(state, action) {
            state.searchMovies = action.payload.movies;
        },
    },
});

export const moviesActions = moviesSlice.actions;

export default moviesSlice;
