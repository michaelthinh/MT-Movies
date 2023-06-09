import { FaHome, FaHotjar, FaStar } from "react-icons/fa";

import classes from "./Menu.module.scss";
import { randomRgbaColor } from "../../utils";

const MenuItem = (props) => {
    const { title, Icon } = props;
    return (
        <div className={classes.menuItem}>
            <Icon
                className={classes.menuItem__icon}
                style={{ color: randomRgbaColor(1) }}
            />
            <span>{title}</span>
        </div>
    );
};

export default MenuItem;
