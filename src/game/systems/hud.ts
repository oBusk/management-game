import { Entities } from "../entities";
import { KeyboardControllerUpdate } from "./keyboard-controller";

const HUD = (entities: Entities, args: KeyboardControllerUpdate) => {
    const hud = entities.hud;

    if (hud) {
        hud.keyboardController = args.keyboardController;
    }

    return entities;
};

export default HUD;
