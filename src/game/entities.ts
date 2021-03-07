import { Entities as ReactGameEngineEntities } from "react-game-engine";
import boxEntity, { BoxEntity } from "./components/Box";
import hudEntity, { HudEntity } from "./components/Hud";

export interface Entities {
    box: BoxEntity;
    hud: HudEntity;
}

function getEntities() {
    const entities: ReactGameEngineEntities = {
        box: boxEntity,
        hud: hudEntity,
    };

    return entities;
}

export default getEntities;
