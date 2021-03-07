import styles from "./Map.module.css";

export interface MapProps {
    width?: number;
    height?: number;
}

const Map = ({ width, height }: MapProps) => (
    <div className={styles.map} style={{ width, height }} />
);

export default Map;
