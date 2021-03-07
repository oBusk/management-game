import { DefaultRenderedEntity } from "react-game-engine";
import { BuildingState } from "../../buildings";
import Building from "../../components/Building";

export type BuildingEntity = DefaultRenderedEntity<BuildingState>;

const houseEntity = ({
    x = 200,
    y = 200,
}: BuildingState = {}): BuildingEntity => ({
    type: "house",
    symbol: "🏠",
    x,
    y,
    renderer: <Building />,
});

export default houseEntity;
