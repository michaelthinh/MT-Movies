import classes from "./MovieDetail.module.scss";

const showModal = false;

const MovieDetail = () => {
    return (
        <div className={classes.movieDetailModal}>
            <div
                className={`${classes.backdrop} ${
                    showModal ? classes.showBackdrop : classes.hideBackdrop
                }`}
            ></div>
            <div
                className={`${classes.modal} ${
                    showModal ? classes.showModal : classes.hideModal
                }`}
                style={{
                    backgroundImage: `url(https://i.ytimg.com/vi/ndl1W4ltcmg/maxresdefault.jpg)`,
                    backgroundSize: "cover",
                }}
            >
                <div className={classes.container}>
                    <div className={classes.movieInfo}>
                        <h1 className={classes.movieTitle}>The witcher</h1>
                        <p className={classes.movieStats}>
                            <span className={classes.movieRating}>
                                Rating: 82%
                            </span>
                            <span className={classes.moviePopularity}>
                                Popularity: 12567.123
                            </span>
                        </p>
                        <p className={classes.movieReleaseData}>
                            Release Date: 21/12/2022
                        </p>
                        <p className={classes.movieRuntime}>Runtime: 2h09s</p>
                        <p className={classes.movieOverview}>
                            Geralt of rivia aslkdjasldkjasdlkajd Lorem ipsum
                            dolor sit, amet consectetur adipisicing elit.
                            Officiis, nisi ratione? Beatae neque dolorem commodi
                            tempore quos iure explicabo itaque.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;
