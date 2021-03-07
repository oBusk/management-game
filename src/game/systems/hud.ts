import { GameEngineUpdateEventOptionType } from "react-game-engine";
import { Entities } from "../entities";

const hudSystem = (
    entities: Entities,
    { dispatch }: GameEngineUpdateEventOptionType,
) => {
    const hud = entities.hud;

    if (hud) {
        hud.keyboardController = entities?.keyboardController;
        hud.mouseController = entities?.mouseController;
        hud.resources = entities?.resources;
        hud.userState = entities?.userState;
        hud.dispatch = dispatch;
    }

    // console.log(events);

    return entities;
};

export default hudSystem;
