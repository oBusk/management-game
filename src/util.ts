import { Emoji } from "./emoji";
import { KeyboardControllerEntity } from "./game/entities/keyboard-controller";
import { MapEntity } from "./game/entities/map";
import { MouseControllerEntity } from "./game/entities/mouse-controller";
import { Resources } from "./resources";

export const objectToArray = <A>(obj: A): [keyof A, A[keyof A]][] => {
    return Object.entries(obj) as any;
};

export const canAfford = (resources: Resources, price: Resources): boolean =>
    (price.escudos ?? Number.MAX_SAFE_INTEGER) <= (resources.escudos ?? 0) &&
    (price.wood ?? Number.MAX_SAFE_INTEGER) <= (resources.wood ?? 0);

export const isWithinMap = (
    map: MapEntity,
    position: { x: number; y: number },
): boolean => {
    return (
        map?.width != null &&
        map?.height != null &&
        position.x < map.width &&
        position.y < map.height
    );
};

export const resourceAsString = (resources: Resources): string => {
    return objectToArray(resources)
        .map(([resourceName, value]) => `${Emoji[resourceName]} ${value}`)
        .join(", ");
};

export const capitalize = <S extends string>(str: S): Capitalize<S> => {
    return str
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.substr(1).toLowerCase())
        .join(" ") as Capitalize<S>;
};

export const justPressed = <
    C extends MouseControllerEntity | KeyboardControllerEntity,
    K extends keyof Omit<C, "previous">,
>(
    c: C,
    key: K,
): boolean => {
    const previous = c.previous;
    return c[key] && (previous as any)[key];
};
