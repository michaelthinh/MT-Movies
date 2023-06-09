import { Link } from "react-scroll";

import classes from "./Menu.module.scss";
import { randomRgbaColor } from "../../utils";

const MenuItem = (props) => {
    const { title, Icon, to } = props;
    return (
        <Link
            className={classes.menuItem}
            to={to}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="active"
        >
            <Icon
                className={classes.menuItem__icon}
                style={{ color: randomRgbaColor(1) }}
            />
            <span>{title}</span>
        </Link>
    );
};

export default MenuItem;
