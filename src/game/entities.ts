import { BoxEntity } from "./components/Box";
import hudEntity, { HudEntity } from "./components/Hud";
import keyboardControllerEntity, {
    KeyboardControllerEntity,
} from "./components/keyboard-controller";
import mapEntity, { MapEntity } from "./components/Map";

export interface Entities {
    keyboardController: KeyboardControllerEntity;
    map: MapEntity;
    box?: BoxEntity;
    hud: HudEntity;
}

function getEntities() {
    const entities: Entities = {
        keyboardController: keyboardControllerEntity,
        map: mapEntity,
        // box: boxEntity,
        hud: hudEntity,
    };

    return entities;
}

export default getEntities;
