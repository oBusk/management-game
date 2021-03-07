import { DefaultRenderedEntity } from "react-game-engine";
import styles from "./Map.module.css";

interface Props {
    width?: number;
    height?: number;
}

export type MapEntity = DefaultRenderedEntity<Props>;

const Map = ({ width, height }: Props) => (
    <div className={styles.map} style={{ width, height }} />
);

const mapEntity: MapEntity = {
    width: 800,
    height: 800,
    renderer: <Map />,
};

export default mapEntity;
