import { Entities } from "../entities";
import factoryEntity from "../entities/factory";
import houseEntity from "../entities/house";
import { ResourcesEntity } from "../entities/resources";

const id = (seed = 0) => (prefix = "") => `${prefix}${++seed}`;

const factoryId = ((id) => () => id("factory"))(id(0));
const houseId = ((id) => () => id("house"))(id(0));

const factoryPrice = {
    escudos: 300,
    wood: 10,
} as const;

const housePrice = {
    escudos: 20,
    wood: 10,
};

const hasResources = (
    resources: ResourcesEntity,
    price: ResourcesEntity,
): boolean => {
    return resources.escudos >= price.escudos && resources.wood >= price.wood;
};

const pay = (resources: ResourcesEntity, price: ResourcesEntity) => {
    resources.escudos -= price.escudos ?? 0;
    resources.wood -= price.wood ?? 0;
};

const buildSystem = (entities: Entities) => {
    const {
        mouseController,
        map,
        resources,
        userState: { currentBlueprint },
    } = entities;

    if (
        mouseController.left &&
        !mouseController.previous?.left &&
        currentBlueprint != null
    ) {
        const clickedPosition = mouseController.position;

        const clickedOnMap =
            map?.width != null &&
            map?.height &&
            clickedPosition.x < map.width &&
            clickedPosition.y < map.height;

        if (!clickedOnMap) {
            return entities;
        }

        const price =
            currentBlueprint === "factory" ? factoryPrice : housePrice;

        if (!hasResources(resources, price)) {
            return entities;
        }

        pay(resources, price);

        const id = currentBlueprint === "factory" ? factoryId() : houseId();

        entities[id] =
            currentBlueprint === "factory"
                ? factoryEntity(clickedPosition)
                : houseEntity(clickedPosition);
    }

    return entities;
};

export default buildSystem;
