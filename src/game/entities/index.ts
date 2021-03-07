import blueprintPreviewEntity, {
    BlueprintPreviewEntity,
} from "./blueprint-preview";
import hudEntity, { HudEntity } from "./hud";
import keyboardControllerEntity, {
    KeyboardControllerEntity,
} from "./keyboard-controller";
import mapEntity, { MapEntity } from "./map";
import mouseControllerEntity, {
    MouseControllerEntity,
} from "./mouse-controller";
import resourcesEntity, { ResourcesEntity } from "./resources";
import userStateEntity, { UserStateEntity } from "./user-state";

export interface Entities {
    keyboardController: KeyboardControllerEntity;
    mouseController: MouseControllerEntity;
    resources: ResourcesEntity;
    map: MapEntity;
    hud: HudEntity;
    userState: UserStateEntity;
    blueprintPreview: BlueprintPreviewEntity;
    [id: string]: any;
}

function getEntities() {
    const entities: Entities = {
        keyboardController: keyboardControllerEntity,
        mouseController: mouseControllerEntity,
        resources: resourcesEntity,
        map: mapEntity,
        hud: hudEntity,
        userState: userStateEntity,
        blueprintPreview: blueprintPreviewEntity(),
    };

    return entities;
}

export default getEntities;
