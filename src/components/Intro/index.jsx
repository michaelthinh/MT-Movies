import ReactPlayer from "react-player";
import { VscMute, VscUnmute } from "react-icons/vsc";

import classes from "./Intro.module.scss";
import { useState } from "react";

const Intro = (props) => {
    const [isMuted, setIsMuted] = useState(true);
    const muteHandler = () => {
        setIsMuted((prev) => !prev);
    };
    return (
        <div className={classes.intro}>
            <ReactPlayer
                playing
                loop
                width="100%"
                height="100%"
                className={classes.introVideo}
                volume={1}
                muted={isMuted}
                controls={false}
                url="https://www.youtube.com/watch?v=iZs68cUOnDc"
            />
            <div className={classes.introInfo}>
                <h1 className={classes.introHeading}>MT MOVIES</h1>
                <p className={classes.introDescription}>
                    MT Movies inspires you through title details, trailers,
                    upcoming movies and high-resolution covers makes the
                    experience almost realistic.
                </p>
            </div>
            {isMuted ? (
                <VscMute
                    onClick={muteHandler}
                    className={classes.introControl}
                />
            ) : (
                <VscUnmute
                    onClick={muteHandler}
                    className={classes.introControl}
                />
            )}
            <div className={classes.introBottom}></div>
        </div>
    );
};

export default Intro;
