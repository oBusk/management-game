import { DefaultRenderedEntity } from "react-game-engine";
import { BuildingState } from "../buildings";
import Building from "../components/Building";

export type BlueprintPreviewEntity = DefaultRenderedEntity<BuildingState>;

const blueprintPreviewEntity = ({
    x = 200,
    y = 200,
}: BuildingState = {}): BlueprintPreviewEntity => ({
    type: "factory",
    x,
    y,
    hide: true,
    preview: { valid: true },
    renderer: <Building />,
});

export default blueprintPreviewEntity;
