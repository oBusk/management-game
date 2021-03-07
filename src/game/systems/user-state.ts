import { GameEngineUpdateEventOptionType } from "react-game-engine";
import { Entities } from "../entities";
import { AvailableBlueprints } from "../entities/user-state";

export interface SelectBlueprintEvent {
    type: "selectBlueprint";
    value: AvailableBlueprints;
}

export const selectBlueprintEvent = (
    value: AvailableBlueprints,
): SelectBlueprintEvent => ({
    type: "selectBlueprint",
    value,
});

const isSelectBlueprintEvent = (e: any): e is SelectBlueprintEvent =>
    (e as SelectBlueprintEvent)?.type === "selectBlueprint";

const userStateSystem = (
    entities: Entities,
    { events }: GameEngineUpdateEventOptionType,
) => {
    const { userState } = entities;

    if (userState) {
        events.filter(isSelectBlueprintEvent).forEach(({ value }) => {
            userState.currentBlueprint = value;
        });
    }

    return entities;
};

export default userStateSystem;
