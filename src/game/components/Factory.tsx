import { ResourcesEntity } from "../entities/resources";
import styles from "./Factory.module.css";

export interface FactoryProps {
    x?: number;
    y?: number;
    income?: ResourcesEntity;
}

const Factory = ({ x, y }: FactoryProps) => (
    <div className={styles.factory} style={{ left: x, top: y }}>
        🏭
    </div>
);

export default Factory;
