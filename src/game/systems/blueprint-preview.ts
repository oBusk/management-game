import { canAfford, isWithinMap } from "../../util";
import { Entities } from "../entities";
import { buildings } from "../entities/buildings";

const blueprintPreviewSystem = (entities: Entities) => {
    const {
        mouseController,
        map,
        resources,
        userState: { currentBlueprint },
        blueprintPreview,
    } = entities;

    if (blueprintPreview && currentBlueprint != null) {
        blueprintPreview.preview = {};
        const { position } = mouseController;

        blueprintPreview.hide = false;
        Object.assign(blueprintPreview, position);

        blueprintPreview.type = currentBlueprint;

        const { price = {} } = buildings[currentBlueprint]();

        blueprintPreview.preview.valid =
            canAfford(resources, price) && isWithinMap(map, position);
    } else {
        blueprintPreview.hide = true;
    }

    return entities;
};

export default blueprintPreviewSystem;
