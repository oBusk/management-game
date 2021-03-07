export interface KeyboardControllerEntity {
    w: boolean;
    a: boolean;
    s: boolean;
    d: boolean;
    f: boolean;
    h: boolean;
    space: boolean;
    control: boolean;
    escape: boolean;
    previous?: Omit<KeyboardControllerEntity, "previous">;
}

const keyboardControllerEntity: KeyboardControllerEntity = {
    w: false,
    a: false,
    s: false,
    d: false,
    f: false,
    h: false,
    space: false,
    escape: false,
    control: false,
};

export default keyboardControllerEntity;
