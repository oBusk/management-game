import hudEntity, { HudEntity } from "./hud";
import keyboardControllerEntity, {
    KeyboardControllerEntity,
} from "./keyboard-controller";
import mapEntity, { MapEntity } from "./map";
import mouseControllerEntity, {
    MouseControllerEntity,
} from "./mouse-controller";
import resourcesEntity, { ResourcesEntity } from "./resources";

export interface Entities {
    keyboardController: KeyboardControllerEntity;
    mouseController: MouseControllerEntity;
    resources: ResourcesEntity;
    map: MapEntity;
    hud: HudEntity;
    [id: string]: any;
}

function getEntities() {
    const entities: Entities = {
        keyboardController: keyboardControllerEntity,
        mouseController: mouseControllerEntity,
        resources: resourcesEntity,
        map: mapEntity,
        hud: hudEntity,
    };

    return entities;
}

export default getEntities;
