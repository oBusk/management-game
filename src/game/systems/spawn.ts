import factoryEntity from "../components/Factory";
import { Entities } from "../entities";

const id = (seed = 0) => (prefix = "") => `${prefix}${++seed}`;

const factoryId = ((id) => () => id("factory"))(id(0));

const spawnSystem = (entities: Entities) => {
    const { mouseController, map } = entities;

    if (mouseController.left && !mouseController.previous?.left) {
        const clickedPosition = mouseController.position;

        if (
            map?.width != null &&
            map?.height &&
            clickedPosition.x < map.width &&
            clickedPosition.y < map.height
        )
            entities[factoryId()] = factoryEntity({
                ...clickedPosition,
            });
    }

    return entities;
};

export default spawnSystem;
