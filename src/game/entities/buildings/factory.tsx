import { DefaultRenderedEntity } from "react-game-engine";
import { BuildingState } from "../../buildings";
import Building from "../../components/Building";

export type FactoryEntity = DefaultRenderedEntity<BuildingState>;

const factoryEntity = ({
    x = 200,
    y = 200,
}: BuildingState = {}): FactoryEntity => ({
    type: "factory",
    symbol: "🏭",
    x,
    y,
    income: {
        escudos: 0.1,
        wood: 0.01,
    },
    renderer: <Building />,
});

export default factoryEntity;
