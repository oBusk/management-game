import { Entities } from "../entities";
import { KeyboardControllerUpdate } from "./keyboard-controller";

const MOVEMENT_SPEED = 10;

const Movement = (
    entities: Entities,
    { keyboardController }: KeyboardControllerUpdate,
) => {
    const { box } = entities;

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

export default Movement;
