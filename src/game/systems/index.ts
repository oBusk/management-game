import HUD from "./hud";
import KeyboardController from "./keyboard-controller";
import Movement from "./movement";

const systems = [HUD, KeyboardController(), Movement];

export default systems;
