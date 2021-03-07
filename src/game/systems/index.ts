import hudSystem from "./hud";
import keyboardControllerSystem from "./keyboard-controller";
import mouseControllerSystem from "./mouse-controller";
import spawnSystem from "./spawn";
// import movementSystem from "./movement";

// If we use the current solution that modifies the updateArgs object, the order is very important.
const systems = [
    keyboardControllerSystem, // Needs to be first to feed subsequent systems with keys
    mouseControllerSystem,
    hudSystem,
    spawnSystem,
    // movementSystem,
];

export default systems;
