import { Resources } from "../../resources";
import { Entities } from "../entities";

let previous: Resources;

const incomeSystem = (entities: Entities) => {
    const { resources } = entities;

    const current: Resources = {
        escudos: resources.escudos,
        wood: resources.wood,
    };

    for (let id in entities) {
        const entity = entities[id];
        if (entity.income) {
            current.escudos += entity.income.escudos;
            current.wood += entity.income.wood;
        }
    }

    entities.resources = {
        ...current,
        previous,
    };

    previous = current;

    return entities;
};

export default incomeSystem;
