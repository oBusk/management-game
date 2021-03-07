import { Component } from "react";
import { GameEngine } from "react-game-engine";
import Entities from "./entities";
import systems from "./systems";

class Game extends Component {
    render() {
        return <GameEngine systems={systems} entities={Entities()} />;
    }
}

export default Game;
