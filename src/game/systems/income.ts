import { Entities } from "../entities";

const incomeSystem = (entities: Entities) => {
    const { resources } = entities;

    for (let id in entities) {
        const entity = entities[id];
        if (entity.income) {
            resources.escudos += entity.income.escudos;
            resources.wood += entity.income.wood;
        }
    }

    return entities;
};

export default incomeSystem;
