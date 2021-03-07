import boxEntity, { BoxEntity } from "./components/Box";
import hudEntity, { HudEntity } from "./components/Hud";
import keyboardControllerEntity, {
    KeyboardControllerEntity,
} from "./components/keyboard-controller";

export interface Entities {
    keyboardController: KeyboardControllerEntity;
    box: BoxEntity;
    hud: HudEntity;
}

function getEntities() {
    const entities: Entities = {
        keyboardController: keyboardControllerEntity,
        box: boxEntity,
        hud: hudEntity,
    };

    return entities;
}

export default getEntities;
