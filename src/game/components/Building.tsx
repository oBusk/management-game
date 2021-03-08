import classNames from "classnames";
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

const Building = ({ type, x, y, hide, preview }: BuildingProps) => (
    <>
        {!hide && type && (
            <div
                className={classNames(styles.building, {
                    [styles.preview]: !!preview,
                    [styles.previewInvalid]: !preview?.valid,
                })}
                style={{ left: x, top: y }}
            >
                {Emoji[`building-${type}` as const]}
            </div>
        )}
    </>
);

export default Building;
