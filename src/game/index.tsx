import { Component } from "react";
import { GameEngine } from "react-game-engine";
import Entities from "./entities";
import systems from "./systems";
import style from "./game.module.css";

class Game extends Component {
    render() {
        return (
            <GameEngine
                className={style.game}
                systems={systems}
                entities={Entities()}
            />
        );
    }
}

export default Game;
