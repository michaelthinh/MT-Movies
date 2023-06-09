import { BiCameraMovie } from "react-icons/bi";
import { FaHome, FaHotjar, FaStar } from "react-icons/fa";
import { MdTheaterComedy } from "react-icons/md";
import {
    GiNinjaHeroicStance,
    GiRomanToga,
    GiGhost,
    GiBandageRoll,
} from "react-icons/gi";

import classes from "./Menu.module.scss";
import MenuItem from "./MenuItem";

const Menu = () => {
    return (
        <div className={classes.menu}>
            <MenuItem title="Original" Icon={BiCameraMovie} to="original" />
            <MenuItem title="Trending" Icon={FaHotjar} to="trending" />
            <MenuItem title="Top Rated" Icon={FaStar} to="topRated" />
            <MenuItem
                title="Action Movies"
                Icon={GiNinjaHeroicStance}
                to="action"
            />
            <MenuItem
                title="Comedy Movies"
                Icon={MdTheaterComedy}
                to="comedy"
            />
            <MenuItem title="Horror Movies" Icon={GiGhost} to="horror" />
            <MenuItem title="Romance Movies" Icon={GiRomanToga} to="romance" />
            <MenuItem
                title="Documentaries"
                Icon={GiBandageRoll}
                to="documentary"
            />
        </div>
    );
};

export default Menu;
