export interface KeyboardControllerEntity {
    w: boolean;
    a: boolean;
    s: boolean;
    d: boolean;
    space: boolean;
    control: boolean;
    previous?: Omit<KeyboardControllerEntity, "previous">;
}

const keyboardControllerEntity: KeyboardControllerEntity = {
    w: false,
    a: false,
    s: false,
    d: false,
    space: false,
    control: false,
};

export default keyboardControllerEntity;
