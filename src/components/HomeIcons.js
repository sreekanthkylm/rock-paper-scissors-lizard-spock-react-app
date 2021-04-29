import React from "react";
import { Link } from "react-router-dom";

const HomeIcons = ({ item, onItemClick }) => {
    return (
        <Link to="/game">
            <div
                data-id={`${item}`}
                onClick={onItemClick}
                className={`icon icon--${item}`}
            ></div>
        </Link>
    );
};

export default HomeIcons;
