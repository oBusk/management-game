import { Entity } from "react-game-engine";
import styles from "./Box.module.css";

interface Props {
    x?: number;
    y?: number;
}

const Box = ({ x, y }: Props) => (
    <div className={styles.box} style={{ left: x, top: y }} />
);

const box: Entity = {
    x: 200,
    y: 200,
    renderer: <Box />,
};

export default box;
