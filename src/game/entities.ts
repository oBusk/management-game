import { BoxEntity } from "./components/Box";
import hudEntity, { HudEntity } from "./components/Hud";
import keyboardControllerEntity, {
    KeyboardControllerEntity,
} from "./components/keyboard-controller";
import mapEntity, { MapEntity } from "./components/Map";
import mouseControllerEntity, {
    MouseControllerEntity,
} from "./components/mouse-controller";

export interface Entities {
    keyboardController: KeyboardControllerEntity;
    mouseController: MouseControllerEntity;
    map: MapEntity;
    box?: BoxEntity;
    hud: HudEntity;
}

function getEntities() {
    const entities: Entities = {
        keyboardController: keyboardControllerEntity,
        mouseController: mouseControllerEntity,
        map: mapEntity,
        // box: boxEntity,
        hud: hudEntity,
    };

    return entities;
}

export default getEntities;
