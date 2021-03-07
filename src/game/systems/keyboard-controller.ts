import {
    GameEngineUpdateEventOptionType,
    Input,
    InputNames,
} from "react-game-engine";
import { KeyboardControllerEntity } from "../entities/keyboard-controller";
import { Entities } from "../entities";

const readKey = (input: Input, keys: string[], name: InputNames) =>
    input.find((x) => x.name === name && keys.indexOf(x.payload.key) !== -1);

const createKeyReader = (keys: string[]) => {
    let down = false;

    return (input: Input) => {
        if (readKey(input, keys, "onKeyDown")) down = true;

        if (readKey(input, keys, "onKeyUp")) down = false;

        return down;
    };
};

const w = createKeyReader(["w", "W", "ArrowUp"]);
const a = createKeyReader(["a", "A", "ArrowLeft"]);
const s = createKeyReader(["s", "S", "ArrowDown"]);
const d = createKeyReader(["d", "D", "ArrowRight"]);
const space = createKeyReader([" "]);
const control = createKeyReader(["Control"]);
const escape = createKeyReader(["Escape"]);

let previous: Omit<KeyboardControllerEntity, "previous">;

const keyboardControllerSystem = (
    entities: Entities,
    args: GameEngineUpdateEventOptionType,
) => {
    const { input } = args;

    const current = {
        w: w(input),
        a: a(input),
        s: s(input),
        d: d(input),
        space: space(input),
        control: control(input),
        escape: escape(input),
    };

    entities.keyboardController = {
        ...current,
        previous,
    };

    previous = current;

    return entities;
};

export default keyboardControllerSystem;
