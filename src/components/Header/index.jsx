import MTLogo from "../../assets/img/logo/mt-logo.png";
import { MdSearch } from "react-icons/md";

import classes from "./Header.module.scss";

const Header = (props) => {
    return (
        <div className={classes.header}>
            <div className={classes.headerContainer}>
                <div className={classes.logo}>
                    <img src={MTLogo} alt="MT-Logo" />
                    <span>MT MOVIES</span>
                </div>
                <div className={classes.searchBar}>
                    <MdSearch className={classes.searchIcon} />
                    <input
                        defaultValue=""
                        type="text"
                        placeholder="Input title, genres, actors, ..."
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
