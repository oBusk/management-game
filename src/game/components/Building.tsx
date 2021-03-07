import styles from "./Building.module.css";

export interface BuildingProps {
    symbol?: string;
    type?: string;
    x?: number;
    y?: number;
}

const Building = ({ x, y, symbol }: BuildingProps) => (
    <div className={styles.building} style={{ left: x, top: y }}>
        {symbol}
    </div>
);

export default Building;
