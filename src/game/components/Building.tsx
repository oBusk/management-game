import { Emoji } from "../../emoji";
import { BuildingTypes } from "../entities/buildings";
import styles from "./Building.module.css";

export interface BuildingProps {
    type?: BuildingTypes;
    x?: number;
    y?: number;
    hide?: boolean;
    preview?: { valid?: boolean };
}

const Building = ({ type, x, y, hide, preview }: BuildingProps) =>
    hide || !type ? (
        <></>
    ) : (
        <div
            className={
                styles.building +
                " " +
                (preview ? styles.preview : "") +
                " " +
                (!preview?.valid ? styles.previewInvalid : "")
            }
            style={{ left: x, top: y }}
        >
            {Emoji[`building-${type}` as const]}
        </div>
    );

export default Building;
