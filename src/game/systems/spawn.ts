import factoryEntity from "../components/Factory";
import { Entities } from "../entities";

const id = (seed = 0) => (prefix = "") => `${prefix}${++seed}`;

const factoryId = ((id) => () => id("factory"))(id(0));

const spawnSystem = (entities: Entities) => {
    const { mouseController, map } = entities;

    if (mouseController.left && !mouseController.previous?.left) {
        const clickedPosition = mouseController.position;

        // const size = 80;
        // const topLeftCorner = {
        //     x: clickedPosition.x - size / 2,
        //     y: clickedPosition.y - size / 2,
        // };

        // if (
        //     topLeftCorner.x > 0 &&
        //     topLeftCorner.y > 0 &&
        //     map?.width != null &&
        //     map?.height != null &&
        //     topLeftCorner.x + size < map.width &&
        //     topLeftCorner.y + size < map.height
        // )
        entities[factoryId()] = factoryEntity({
            ...clickedPosition,
        });
    }

    return entities;
};

export default spawnSystem;
