import { Entities } from "../entities";

const MOVEMENT_SPEED = 10;

const movementSystem = (entities: Entities) => {
    const { box, keyboardController } = entities;

    if (box && keyboardController) {
        const { w, a, s, d, space, control } = keyboardController;

        if (w || a || s || d) {
            box.y = (box.y ?? 200) + (s ? 1 : w ? -1 : 0) * MOVEMENT_SPEED;
            box.x = (box.x ?? 200) + (d ? 1 : a ? -1 : 0) * MOVEMENT_SPEED;
        }

        if (space || control) {
            // reset i guess?
            box.y = box.x = 200;
        }
    }

    return entities;
};

export default movementSystem;
