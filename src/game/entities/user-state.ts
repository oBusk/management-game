export type AvailableBlueprints = null | "factory" | "house";

export interface UserStateEntity {
    currentBlueprint: AvailableBlueprints;
}

const userStateEntity: UserStateEntity = {
    currentBlueprint: null,
};

export default userStateEntity;
