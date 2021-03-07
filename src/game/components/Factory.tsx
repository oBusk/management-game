import { DefaultRenderedEntity } from "react-game-engine";
import styles from "./Factory.module.css";
import { ResourcesEntity } from "./resources";

interface Props {
    x?: number;
    y?: number;
    income?: ResourcesEntity;
}

export type FactoryEntity = DefaultRenderedEntity<Props>;

const Factory = ({ x, y }: Props) => (
    <div className={styles.factory} style={{ left: x, top: y }}>
        🏭
    </div>
);

const factoryEntity = ({ x = 200, y = 200 }: Props = {}): FactoryEntity => ({
    x,
    y,
    income: {
        escudos: 0.1,
        wood: 0.01,
    },
    renderer: <Factory />,
});

export default factoryEntity;
