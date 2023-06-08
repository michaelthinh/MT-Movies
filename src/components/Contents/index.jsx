import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import classes from "./Contents.module.scss";

const movies = [
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
    "https://assets-prd.ignimgs.com/2021/09/21/en-us-arcane-character-jinx-vertical-4x5-rgb-1632264982243.jpg",
    "https://assets-prd.ignimgs.com/2021/09/21/en-us-arcane-character-jinx-vertical-4x5-rgb-1632264982243.jpg",
    "https://assets-prd.ignimgs.com/2021/09/21/en-us-arcane-character-jinx-vertical-4x5-rgb-1632264982243.jpg",
    "https://assets-prd.ignimgs.com/2021/09/21/en-us-arcane-character-jinx-vertical-4x5-rgb-1632264982243.jpg",
];

const Contents = (props) => {
    return (
        <div className={classes.moviesContainer}>
            <h1 className={classes.moviesHeading}>Originals Movies</h1>
            <div
                className={classes.moviesSlider}
                style={{
                    gridTemplateColumns: `repeat(${movies.length},300px)`,
                }}
            >
                {movies.map((movie, index) => (
                    <div key={index} className={classes.movieItem}>
                        <img src={movie} alt="" />
                        <div className={classes.movieName}>Movie Name</div>
                    </div>
                ))}
            </div>
            <div>
                <div className={classes.btnLeft}>
                    <FiChevronLeft />
                </div>
                <div className={classes.btnRight}>
                    <FiChevronRight />
                </div>
            </div>
        </div>
    );
};

export default Contents;
