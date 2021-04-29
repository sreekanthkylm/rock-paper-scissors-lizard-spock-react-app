import React from "react";
import logo from "../images/logo-bonus.svg";

const Header = ({ score }) => {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="score-box">
                <span>SCORE</span>
                <div className="score-box__score">{score}</div>
            </div>
        </div>
    );
};

export default Header;
