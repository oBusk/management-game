import factoryEntity from "../components/Factory";
import { Entities } from "../entities";

const id = (seed = 0) => (prefix = "") => `${prefix}${++seed}`;

const factoryId = ((id) => () => id("factory"))(id(0));

const factoryPrice = {
    escudos: 300,
    wood: 10,
} as const;

const buildSystem = (entities: Entities) => {
    const { mouseController, map, resources } = entities;

    if (mouseController.left && !mouseController.previous?.left) {
        const clickedPosition = mouseController.position;

        const clickedOnMap =
            map?.width != null &&
            map?.height &&
            clickedPosition.x < map.width &&
            clickedPosition.y < map.height;

        const hasResources =
            resources.escudos >= factoryPrice.escudos &&
            resources.wood >= factoryPrice.wood;

        if (clickedOnMap && hasResources) {
            resources.escudos -= factoryPrice.escudos;
            resources.wood -= factoryPrice.wood;
            entities[factoryId()] = factoryEntity({
                ...clickedPosition,
            });
        }
    }

    return entities;
};

export default buildSystem;
