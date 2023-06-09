import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { useEffect, useRef, useState } from "react";

import classes from "./MoviesRow.module.scss";
import { SmoothHorizontalScrolling } from "../../utils";
import { useViewPort } from "../../hooks";

const MoviesRow = (props) => {
    const { movies, title, isOriginalMovies } = props;
    const sliderRef = useRef();
    const movieRef = useRef();
    const [dragDown, setDragDown] = useState(0);
    const [dragMove, setDragMove] = useState(0);
    const [isDrag, setIsDrag] = useState(false);
    const [windowWidth] = useViewPort();
    const scrollRightHandler = () => {
        const maxScrollLeft =
            sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
        if (sliderRef.current.scrollLeft < maxScrollLeft) {
            SmoothHorizontalScrolling(
                sliderRef.current,
                250,
                movieRef.current.clientWidth,
                sliderRef.current.scrollLeft
            );
        }
    };
    const scrollLeftHandler = () => {
        console.log(sliderRef.current.scrollLeft);
        if (sliderRef.current.scrollLeft > 0) {
            SmoothHorizontalScrolling(
                sliderRef.current,
                250,
                -movieRef.current.clientWidth,
                sliderRef.current.scrollLeft
            );
        }
    };
    useEffect(() => {
        if (isDrag) {
            if (dragMove < dragDown) {
                scrollRightHandler();
            }
            if (dragMove > dragDown) {
                scrollLeftHandler();
            }
        }
    }, [dragDown, dragMove, isDrag]);
    const dragStartHandler = (e) => {
        setIsDrag(true);
        setDragDown(e.screenX);
        var img = new Image();
        img.src =
            "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=";
        e.dataTransfer.setDragImage(img, 0, 0);
    };
    const dragEndHandler = (e) => {
        setIsDrag(false);
    };
    const dragEnterHandler = (e) => {
        setDragMove(e.screenX);
    };
    return (
        <div className={classes.moviesContainer} draggable="false">
            <h1 className={classes.moviesHeading}>{title}</h1>
            <div
                className={classes.moviesSlider}
                ref={sliderRef}
                draggable="true"
                onDragStart={dragStartHandler}
                onDragEnd={dragEndHandler}
                onDragEnter={dragEnterHandler}
                style={
                    movies && movies.length > 0
                        ? {
                              gridTemplateColumns: `repeat(${movies.length}, ${
                                  windowWidth > 1200
                                      ? "360px"
                                      : windowWidth > 992
                                      ? "300px"
                                      : windowWidth > 768
                                      ? "250px"
                                      : "200px"
                              })`,
                          }
                        : {}
                }
            >
                {movies.map((movie, index) => (
                    <div
                        key={index}
                        className={classes.movieItem}
                        ref={movieRef}
                        draggable="false"
                    >
                        <img src={movie} alt="Movie poster" draggable="false" />
                        <div className={classes.movieName}>Movie Name</div>
                    </div>
                ))}
            </div>
            <div>
                <div
                    className={`${classes.btnLeft} ${
                        isOriginalMovies && classes.isOriginalMovies
                    }`}
                    onClick={scrollLeftHandler}
                >
                    <FiChevronLeft />
                </div>
                <div
                    className={`${classes.btnRight} ${
                        isOriginalMovies && classes.isOriginalMovies
                    }`}
                    onClick={scrollRightHandler}
                >
                    <FiChevronRight />
                </div>
            </div>
        </div>
    );
};

export default MoviesRow;
