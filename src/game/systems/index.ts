import HUD from "./hud";
import KeyboardController from "./keyboard-controller";
import Movement from "./movement";

// If we use the current solution that modifies the updateArgs object, the order is very important.
const systems = [
    KeyboardController(), // Needs to be first to feed subsequent systems with keys
    HUD,
    Movement,
];

export default systems;
