export interface MouseControllerEntity {
    left: boolean;
    middle: boolean;
    right: boolean;
    position: { x: number; y: number };
    wheel: number;
    previous?: Omit<MouseControllerEntity, "previous">;
}

const mouseControllerEntity: MouseControllerEntity = {
    left: false,
    middle: false,
    right: false,
    position: { x: 0, y: 0 },
    wheel: 0,
};

export default mouseControllerEntity;
