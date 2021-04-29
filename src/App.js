import React, { useState } from "react";
import Header from "./components/Header.js";
import Home from "./components/Home";
import Game from "./components/Game";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [myChoice, setMyChoice] = useState("");
  const [score, setScore] = useState(0);

  return (
    <Router>
      <div className="container">
        <Header score={score} />
        <Switch>
          <Route path="/game">
            <Game myChoice={myChoice} score={score} setScore={setScore} />
          </Route>
          <Route path="/">
            <Home setMyChoice={setMyChoice} />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
