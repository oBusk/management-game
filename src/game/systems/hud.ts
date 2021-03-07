import { Entities } from "../entities";

const hudSystem = (entities: Entities) => {
    const hud = entities.hud;

    if (hud) {
        hud.keyboardController = entities?.keyboardController;
        hud.mouseController = entities?.mouseController;
    }

    return entities;
};

export default hudSystem;
