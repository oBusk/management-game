import { Resources } from "../../../resources";
import styles from "./ResourceBar.module.css";

export interface Props {
    resources?: Resources;
}

const ResourceBar = ({ resources }: Props) => (
    <div className={styles.resourceBar}>
        💶 {Math.floor(resources?.escudos ?? 0)}
        🌲 {Math.floor(resources?.wood ?? 0)}
    </div>
);

export default ResourceBar;
