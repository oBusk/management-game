import { Component } from "react";
import { GameEngine } from "react-game-engine";
import getEntities from "./entities";
import systems from "./systems";
import style from "./game.module.css";

class Game extends Component {
    render() {
        return (
            <div
                className={style.game}
                onContextMenu={(e) => e?.preventDefault?.()}
            >
                <GameEngine systems={systems} entities={getEntities()} />
            </div>
        );
    }
}

export default Game;
