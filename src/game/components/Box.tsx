import { DefaultRenderedEntity } from "react-game-engine";
import styles from "./Box.module.css";
import { ResourcesEntity } from "./resources";

interface Props {
    width?: number;
    height?: number;
    x?: number;
    y?: number;
    income?: ResourcesEntity;
}

export type BoxEntity = DefaultRenderedEntity<Props>;

const Box = ({ width, height, x, y }: Props) => (
    <div className={styles.box} style={{ width, height, left: x, top: y }} />
);

const boxEntity = ({
    width = 80,
    height = width,
    x = 200,
    y = 200,
}: Props = {}): BoxEntity => ({
    width,
    height,
    x,
    y,
    income: {
        escudos: 0.1,
        wood: 0.01,
    },
    renderer: <Box />,
});

export default boxEntity;
