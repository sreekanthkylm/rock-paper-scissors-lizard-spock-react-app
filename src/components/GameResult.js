import React from "react";
import { Link } from "react-router-dom";

const GameResult = ({ result, onPlayAgainClick }) => {
    return (
        <div className="game__play">
            <span className="text">You {result}</span>
            <Link to="/" className="play-again" onClick={() => onPlayAgainClick()}>
                Play Again
            </Link>
        </div>
    );
};

export default GameResult;
