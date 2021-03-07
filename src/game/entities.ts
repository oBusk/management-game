import { BoxEntity } from "./components/Box";
import hudEntity, { HudEntity } from "./components/Hud";
import keyboardControllerEntity, {
    KeyboardControllerEntity,
} from "./components/keyboard-controller";
import mapEntity, { MapEntity } from "./components/Map";
import mouseControllerEntity, {
    MouseControllerEntity,
} from "./components/mouse-controller";
import resourcesEntity, { ResourcesEntity } from "./components/resources";

export interface Entities {
    keyboardController: KeyboardControllerEntity;
    mouseController: MouseControllerEntity;
    resources: ResourcesEntity;
    map: MapEntity;
    box?: BoxEntity;
    hud: HudEntity;
    [id: string]: any;
}

function getEntities() {
    const entities: Entities = {
        keyboardController: keyboardControllerEntity,
        mouseController: mouseControllerEntity,
        resources: resourcesEntity,
        map: mapEntity,
        // box: boxEntity(),
        hud: hudEntity,
    };

    return entities;
}

export default getEntities;
