import { DefaultRenderedEntity } from "react-game-engine";
import styles from "./Box.module.css";

interface Props {
    x?: number;
    y?: number;
}

export type BoxEntity = DefaultRenderedEntity<Props>;

const Box = ({ x, y }: Props) => (
    <div className={styles.box} style={{ left: x, top: y }} />
);

const boxEntity: BoxEntity = {
    x: 200,
    y: 200,
    renderer: <Box />,
};

export default boxEntity;
