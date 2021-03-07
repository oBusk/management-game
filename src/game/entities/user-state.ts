import { BuildingTypes } from "./buildings";

export type AvailableBlueprints = null | BuildingTypes;

export interface UserStateEntity {
    currentBlueprint: AvailableBlueprints;
}

const userStateEntity: UserStateEntity = {
    currentBlueprint: null,
};

export default userStateEntity;
