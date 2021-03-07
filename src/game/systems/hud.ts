import { Entities } from "react-game-engine";
import { HudEntity } from "../components/Hud";
import { KeyboardControllerUpdate } from "./keyboard-controller";

const HUD = (entities: Entities, args: KeyboardControllerUpdate) => {
    const hud: HudEntity = entities.hud;

    if (hud) {
        hud.keyboardController = args.keyboardController;
    }

    return entities;
};

export default HUD;
