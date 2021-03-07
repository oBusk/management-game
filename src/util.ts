import { MapEntity } from "./game/entities/map";
import { Resources } from "./resources";

export const canAfford = (resources: Resources, price: Resources): boolean => {
    return (
        (price.escudos ?? Number.MAX_SAFE_INTEGER) <=
            (resources.escudos ?? 0) &&
        (price.wood ?? Number.MAX_SAFE_INTEGER) <= (price.wood ?? 0)
    );
};

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
