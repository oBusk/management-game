import factoryEntity from "./factory";
import houseEntity from "./house";

export const buildings = {
    factory: factoryEntity,
    house: houseEntity,
} as const;

export type BuildingTypes = keyof typeof buildings;
