import { GameEngineSystem } from "react-game-engine";
import { Entities } from "../entities";
import blueprintPreviewSystem from "./blueprint-preview";
import buildSystem from "./build";
import hudSystem from "./hud";
import incomeSystem from "./income";
import keyboardControllerSystem from "./keyboard-controller";
import mouseControllerSystem from "./mouse-controller";
import userStateSystem from "./user-state";
// import movementSystem from "./movement";

// If we use the current solution that modifies the updateArgs object, the order is very important.
const systems: GameEngineSystem<Entities>[] = [
    keyboardControllerSystem, // Needs to be first to feed subsequent systems with keys
    mouseControllerSystem,
    hudSystem,
    blueprintPreviewSystem,
    buildSystem,
    incomeSystem,
    userStateSystem,
    // movementSystem,
];

export default systems;
