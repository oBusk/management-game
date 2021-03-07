import { GameEngineUpdateEventOptionType } from "react-game-engine";
import { justPressed } from "../../util";
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
    const { userState, keyboardController } = entities;

    if (userState) {
        const event = events.find(isSelectBlueprintEvent);

        if (event) {
            userState.currentBlueprint = event.value;
        }

        if (justPressed(keyboardController, "f")) {
            userState.currentBlueprint = "factory";
        }

        if (justPressed(keyboardController, "h")) {
            userState.currentBlueprint = "house";
        }

        if (justPressed(keyboardController, "escape")) {
            userState.currentBlueprint = null;
        }
    }

    return entities;
};

export default userStateSystem;
