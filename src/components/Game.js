import React, { useEffect, useState } from "react";
import GameResult from "./GameResult";
import { useHistory } from "react-router-dom";

const Game = ({ score, myChoice, setScore }) => {
    const history = useHistory();
    const [house, setHouse] = useState("");
    const [playerWin, setPlayerWin] = useState("");
    const [counter, setCounter] = useState(1);

    const newHousePick = () => {
        if (myChoice) {
            const choices = ["rock", "paper", "scissors", "lizard", "spock"];
            setHouse(choices[Math.floor(Math.random() * 5)]);
        }
        else {
            history.push("/");
        }
    };

    useEffect(() => {
        newHousePick();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const Result = () => {
        if ((myChoice === "rock" && house === "scissors") || (myChoice === "rock" && house === "lizard")
            || (myChoice === "scissors" && house === "paper") || (myChoice === "scissors" && house === "lizard")
            || (myChoice === "paper" && house === "rock") || (myChoice === "paper" && house === "spock")
            || (myChoice === "lizard" && house === "spock") || (myChoice === "lizard" && house === "rock")
            || (myChoice === "spock" && house === "rock") || (myChoice === "spock" && house === "scissors")) {
            setPlayerWin("win");
            setScore(score + 1);
        } else if ((myChoice === "rock" && house === "paper") || (myChoice === "rock" && house === "spock")
            || (myChoice === "scissors" && house === "rock") || (myChoice === "scissors" && house === "spock")
            || (myChoice === "paper" && house === "scissors") || (myChoice === "paper" && house === "lizard")
            || (myChoice === "lizard" && house === "paper") || (myChoice === "lizard" && house === "scissors")
            || (myChoice === "spock" && house === "paper") || (myChoice === "spock" && house === "lizard")) {
            setPlayerWin("lose");
            setScore(score - 1);
        } else {
            setPlayerWin("draw");
        }
    };

    useEffect(() => {
        const timer =
            counter > 0
                ? setInterval(() => {
                    setCounter(counter - 1);
                }, 1000)
                : Result();

        return () => {
            clearInterval(timer);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [counter, house]);

    return (
        <div className="game">
            <div className="game__player game__you">
                <span className="text">You Picked</span>
                <div className={`icon icon--${myChoice} ${playerWin === "win" ? `icon icon--${myChoice}--winner` : ""}`}></div>
            </div>
            {playerWin === "win" && (<GameResult result={'Win'} onPlayAgainClick={() => setHouse()} />)}
            {playerWin === "lose" && (<GameResult result={'Lose'} onPlayAgainClick={() => setHouse()} />)}
            {playerWin === "draw" && (<GameResult result={'Draw'} onPlayAgainClick={() => setHouse()} />)}
            <div className="game__player game__house">
                <span className="text">The House Picked</span>
                {counter === 0 ? (
                    <div className={`icon icon--${house} ${playerWin === "lose" ? `icon icon--${house}--winner` : ""}`}></div>
                ) : (
                    <div className="counter"></div>
                )}
            </div>
        </div>
    );
};

export default Game;

