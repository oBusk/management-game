import { DefaultRenderedEntity } from "react-game-engine";
import Factory, { FactoryProps } from "../../components/buildings/Factory";

export type FactoryEntity = DefaultRenderedEntity<FactoryProps>;

const factoryEntity = ({
    x = 200,
    y = 200,
}: FactoryProps = {}): FactoryEntity => ({
    x,
    y,
    income: {
        escudos: 0.1,
        wood: 0.01,
    },
    renderer: <Factory />,
});

export default factoryEntity;
