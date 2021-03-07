import { Resources } from "../../resources";
import { Entities } from "../entities";
import factoryEntity from "../entities/factory";
import houseEntity from "../entities/house";

const id = (seed = 0) => (prefix = "") => `${prefix}${++seed}`;

const factoryId = ((id) => () => id("factory"))(id(0));
const houseId = ((id) => () => id("house"))(id(0));

const factoryPrice: Resources = {
    escudos: 300,
    wood: 10,
} as const;

const housePrice: Resources = {
    escudos: 20,
    wood: 10,
} as const;

const hasResources = (resources: Resources, price: Resources): boolean => {
    return (
        (price.escudos ?? Number.MAX_SAFE_INTEGER) <=
            (resources.escudos ?? 0) &&
        (price.wood ?? Number.MAX_SAFE_INTEGER) <= (price.wood ?? 0)
    );
};

const pay = (resources: Resources, price: Resources) => {
    resources.escudos = (resources.escudos ?? 0) - (price.escudos ?? 0);
    resources.wood = (resources.wood ?? 0) - (price.wood ?? 0);
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
