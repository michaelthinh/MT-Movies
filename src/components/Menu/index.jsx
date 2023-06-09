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
            <MenuItem title="Home" Icon={FaHome} />
            <MenuItem title="Trending" Icon={FaHotjar} />
            <MenuItem title="Top Rated" Icon={FaStar} />
            <MenuItem title="Action Movies" Icon={GiNinjaHeroicStance} />
            <MenuItem title="Comedy Movies" Icon={MdTheaterComedy} />
            <MenuItem title="Horror Movies" Icon={GiGhost} />
            <MenuItem title="Romance Movies" Icon={GiRomanToga} />
            <MenuItem title="Documentaries" Icon={GiBandageRoll} />
        </div>
    );
};

export default Menu;
