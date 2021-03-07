import { Entities } from "../entities";

const hudSystem = (entities: Entities) => {
    const hud = entities.hud;

    if (hud) {
        hud.keyboardController = entities?.keyboardController;
    }

    return entities;
};

export default hudSystem;
