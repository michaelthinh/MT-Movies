import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { useEffect, useRef, useState } from "react";

import classes from "./Contents.module.scss";
import { SmoothHorizontalScrolling } from "../../utils";

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

const Contents = (props) => {
    const sliderRef = useRef();
    const movieRef = useRef();
    const [dragDown, setDragDown] = useState(0);
    const [dragMove, setDragMove] = useState(0);
    const [isDrag, setIsDrag] = useState(false);
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
            <h1 className={classes.moviesHeading}>Originals Movies</h1>
            <div
                className={classes.moviesSlider}
                style={{
                    gridTemplateColumns: `repeat(${movies.length},300px)`,
                }}
                ref={sliderRef}
                draggable="true"
                onDragStart={dragStartHandler}
                onDragEnd={dragEndHandler}
                onDragEnter={dragEnterHandler}
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
                <div className={classes.btnLeft} onClick={scrollLeftHandler}>
                    <FiChevronLeft />
                </div>
                <div className={classes.btnRight} onClick={scrollRightHandler}>
                    <FiChevronRight />
                </div>
            </div>
        </div>
    );
};

export default Contents;
