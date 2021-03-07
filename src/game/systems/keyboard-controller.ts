import {
    Entities,
    GameEngineUpdateEventOptionType,
    Input,
    InputNames,
} from "react-game-engine";

export interface KeyboardControllerState {
    w: boolean;
    a: boolean;
    s: boolean;
    d: boolean;
    space: boolean;
    control: boolean;
    previous: Omit<KeyboardControllerState, "previous">;
}

export interface KeyboardControllerUpdate
    extends GameEngineUpdateEventOptionType {
    keyboardController?: KeyboardControllerState;
}

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

let previous: Omit<KeyboardControllerState, "previous">;

const KeyboardController = (
    Wrapped = (x: Entities, _: KeyboardControllerUpdate) => x,
) => (entities: Entities, args: KeyboardControllerUpdate) => {
    if (!args.keyboardController) {
        const input = args.input;

        const current = {
            w: w(input),
            a: a(input),
            s: s(input),
            d: d(input),
            space: space(input),
            control: control(input),
        };

        args.keyboardController = {
            ...current,
            previous,
        };

        previous = current;
    }

    return Wrapped(entities, args);
};

export default KeyboardController;
