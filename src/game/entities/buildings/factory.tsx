import { DefaultRenderedEntity } from "react-game-engine";
import { BuildingState } from "../../buildings";
import Building from "../../components/Building";

export type FactoryEntity = DefaultRenderedEntity<BuildingState>;

const factoryEntity = ({
    x = 200,
    y = 200,
}: BuildingState = {}): FactoryEntity => ({
    type: "factory",
    x,
    y,
    price: {
        escudos: 100,
        wood: 10,
    },
    income: {
        escudos: 0.1,
        wood: 0.01,
    },
    renderer: <Building />,
});

export default factoryEntity;
