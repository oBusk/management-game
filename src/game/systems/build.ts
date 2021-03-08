import { GameEngineUpdateEventOptionType } from "react-game-engine";
import { Resources } from "../../resources";
import { canAfford, isWithinMap } from "../../util";
import { Entities } from "../entities";
import { buildings } from "../entities/buildings";
import { readButton } from "./mouse-controller";

const id = (seed = 0) => (prefix = "") => `${prefix}${++seed}`;

const buildingId = ((id) => () => id("building"))(id(0));

const pay = (resources: Resources, price: Resources) => {
    resources.escudos = (resources.escudos ?? 0) - (price.escudos ?? 0);
    resources.wood = (resources.wood ?? 0) - (price.wood ?? 0);
};

const buildSystem = (
    entities: Entities,
    { input }: GameEngineUpdateEventOptionType,
) => {
    const {
        mouseController,
        map,
        resources,
        userState: { currentBlueprint },
    } = entities;

    if (readButton(input, [0], "onClick") && currentBlueprint != null) {
        // Should read position from onClick instead
        const clickedPosition = mouseController.position;

        if (!isWithinMap(map, clickedPosition)) {
            return entities;
        }

        const entity = buildings[currentBlueprint](clickedPosition);

        if (entity?.price && canAfford(resources, entity.price)) {
            pay(resources, entity.price);

            entities[buildingId()] = entity;
        }
    }

    return entities;
};

export default buildSystem;
