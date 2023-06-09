import MTLogo from "../../assets/img/logo/mt-logo.png";

import { MdSearch } from "react-icons/md";
import { useScrollY } from "../../hooks";

import classes from "./Header.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const [scrollY] = useScrollY();
    const [keywords, setKeywords] = useState("");
    const navigate = useNavigate();
    const inputChangeHandler = (e) => {
        let key = e.target.value;
        setKeywords(key);
        key.length > 0
            ? navigate(`/search?keywords=${key.trim()}`)
            : navigate("/");
    };
    const goHomeHandler = () => {
        navigate("/");
        setKeywords("");
    };
    return (
        <div
            className={classes.header}
            style={
                scrollY < 700
                    ? { backgroundColor: "transparent" }
                    : { backgroundColor: "var(--color-background)" }
            }
        >
            <div className={classes.headerContainer}>
                <div to="/" className={classes.logo} onClick={goHomeHandler}>
                    <img src={MTLogo} alt="MT-Logo" />
                    <span>MT MOVIES</span>
                </div>
                <div className={classes.searchBar}>
                    <MdSearch className={classes.searchIcon} />
                    <input
                        type="text"
                        placeholder="Input any titles, genres, actors, ..."
                        onChange={inputChangeHandler}
                        value={keywords}
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
