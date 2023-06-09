import axios from "axios";
import { moviesActions } from "./moviesSlice";

const API_KEY = "0f30711ee081fe4a5c66725f12bd0fcf";
const BASE_URL = "https://api.themoviedb.org/3";

export const getOriginalMovies = () => {
    return async (dispatch) => {
        dispatch(moviesActions.setLoading({ value: true }));
        const fetchData = async () => {
            const response = await axios.get(
                `${BASE_URL}/discover/movie?api_key=${API_KEY}`
            );

            const movies = await response.data.results;
            return movies;
        };
        try {
            const moviesData = await fetchData();
            dispatch(moviesActions.setLoading({ value: false }));
            dispatch(
                moviesActions.setOriginalMovies({
                    movies: moviesData,
                })
            );
        } catch (error) {
            console.log(error);
        }
    };
};

export const getTrendingMovies = () => {
    return async (dispatch) => {
        dispatch(moviesActions.setLoading({ value: true }));
        const fetchData = async () => {
            const response = await axios.get(
                `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
            );

            const movies = await response.data.results;
            return movies;
        };
        try {
            const moviesData = await fetchData();
            dispatch(moviesActions.setLoading({ value: false }));
            dispatch(
                moviesActions.setTrendingMovies({
                    movies: moviesData,
                })
            );
        } catch (error) {
            console.log(error);
        }
    };
};

export const getTopRatedMovies = () => {
    return async (dispatch) => {
        dispatch(moviesActions.setLoading({ value: true }));
        const fetchData = async () => {
            const response = await axios.get(
                `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`
            );

            const movies = await response.data.results;
            return movies;
        };
        try {
            const moviesData = await fetchData();
            dispatch(moviesActions.setLoading({ value: false }));
            dispatch(
                moviesActions.setTopRatedMovies({
                    movies: moviesData,
                })
            );
        } catch (error) {
            console.log(error);
        }
    };
};

export const getActionMovies = () => {
    return async (dispatch) => {
        dispatch(moviesActions.setLoading({ value: true }));
        const fetchData = async () => {
            const response = await axios.get(
                `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`
            );

            const movies = await response.data.results;
            return movies;
        };
        try {
            const moviesData = await fetchData();
            dispatch(moviesActions.setLoading({ value: false }));
            dispatch(
                moviesActions.setActionMovies({
                    movies: moviesData,
                })
            );
        } catch (error) {
            console.log(error);
        }
    };
};

export const getComedyMovies = () => {
    return async (dispatch) => {
        dispatch(moviesActions.setLoading({ value: true }));
        const fetchData = async () => {
            const response = await axios.get(
                `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`
            );

            const movies = await response.data.results;
            return movies;
        };
        try {
            const moviesData = await fetchData();
            dispatch(moviesActions.setLoading({ value: false }));
            dispatch(
                moviesActions.setComedyMovies({
                    movies: moviesData,
                })
            );
        } catch (error) {
            console.log(error);
        }
    };
};

export const getHorrorMovies = () => {
    return async (dispatch) => {
        dispatch(moviesActions.setLoading({ value: true }));
        const fetchData = async () => {
            const response = await axios.get(
                `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`
            );

            const movies = await response.data.results;
            return movies;
        };
        try {
            const moviesData = await fetchData();
            dispatch(moviesActions.setLoading({ value: false }));
            dispatch(
                moviesActions.setHorrorMovies({
                    movies: moviesData,
                })
            );
        } catch (error) {
            console.log(error);
        }
    };
};

export const getRomanceMovies = () => {
    return async (dispatch) => {
        dispatch(moviesActions.setLoading({ value: true }));
        const fetchData = async () => {
            const response = await axios.get(
                `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`
            );

            const movies = await response.data.results;
            return movies;
        };
        try {
            const moviesData = await fetchData();
            dispatch(moviesActions.setLoading({ value: false }));
            dispatch(
                moviesActions.setRomanceMovies({
                    movies: moviesData,
                })
            );
        } catch (error) {
            console.log(error);
        }
    };
};

export const getDocumentary = () => {
    return async (dispatch) => {
        dispatch(moviesActions.setLoading({ value: true }));
        const fetchData = async () => {
            const response = await axios.get(
                `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`
            );

            const movies = await response.data.results;
            return movies;
        };
        try {
            const moviesData = await fetchData();
            dispatch(moviesActions.setLoading({ value: false }));
            dispatch(
                moviesActions.setDocumentary({
                    movies: moviesData,
                })
            );
        } catch (error) {
            console.log(error);
        }
    };
};

export const getMovieDetail = (movie) => {
    return (dispatch) => {
        dispatch(moviesActions.setMovieDetail({ movie: movie }));
    };
};
