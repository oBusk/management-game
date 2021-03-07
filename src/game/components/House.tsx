import styles from "./House.module.css";

export interface HouseProps {
    x?: number;
    y?: number;
}

const House = ({ x, y }: HouseProps) => (
    <div className={styles.house} style={{ left: x, top: y }}>
        🏠
    </div>
);

export default House;
