import React from "react";
import Pentagon from "../images/bg-pentagon.svg";
import HomeIcons from "./HomeIcons";

const Home = ({ setMyChoice }) => {
    const setChoice = (e) => {
        setMyChoice(e.target.dataset.id);
    };

    return (
        <div className="home">
            <img src={Pentagon} className="pentagon" alt="pentagon-holder" />
            <div className="items">
                <HomeIcons item={'scissors'} onItemClick={setChoice} />
                <HomeIcons item={'spock'} onItemClick={setChoice} />
                <HomeIcons item={'paper'} onItemClick={setChoice} />
                <HomeIcons item={'lizard'} onItemClick={setChoice} />
                <HomeIcons item={'rock'} onItemClick={setChoice} />
            </div>
        </div>
    );
};

export default Home;
