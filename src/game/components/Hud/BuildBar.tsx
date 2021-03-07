import { Dispatch } from "react-game-engine";
import { Emoji } from "../../../emoji";
import { capitalize, resourceAsString } from "../../../util";
import { buildings } from "../../entities/buildings";
import { AvailableBlueprints } from "../../entities/user-state";
import styles from "./BuildBar.module.css";

export interface BuildBarProps {
    dispatch?: Dispatch;
    currentBlueprint?: null | AvailableBlueprints;
}

const BuildBar = ({ dispatch, currentBlueprint }: BuildBarProps) => {
    const buildingOptions = Object.values(buildings).map((fn) => fn());

    return (
        <div className={styles.buildBar}>
            {currentBlueprint != null ? (
                <button
                    className={styles.buildButton}
                    onClick={() =>
                        dispatch?.({
                            type: "selectBlueprint",
                            value: null,
                        })
                    }
                >
                    <div className={styles.buildButtonIcon}>❌</div>
                    <div>Cancel</div>
                    <div>&nbsp;</div>
                </button>
            ) : (
                <></>
            )}
            {buildingOptions.map(({ type = "house", price = {} }) => {
                const priceString = `(${resourceAsString(price)})`;
                const emoji = Emoji[`building-${type}` as const];

                return (
                    <button
                        className={
                            styles.buildButton +
                            " " +
                            (currentBlueprint === type
                                ? styles.buildButtonActive
                                : "")
                        }
                        title={`Build ${type} ${priceString}`}
                        onClick={() =>
                            dispatch?.({
                                type: "selectBlueprint",
                                value: type,
                            })
                        }
                    >
                        <div className={styles.buildButtonIcon}>{emoji}</div>
                        <div>{capitalize(type)}</div>
                        <div>{priceString}</div>
                    </button>
                );
            })}
        </div>
    );
};

export default BuildBar;
