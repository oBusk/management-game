export interface KeyboardControllerEntity {
    w: boolean;
    a: boolean;
    s: boolean;
    d: boolean;
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
    space: false,
    escape: false,
    control: false,
};

export default keyboardControllerEntity;
