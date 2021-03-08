import classNames from "classnames";
import { Dispatch } from "react-game-engine";
import { Emoji } from "../../../emoji";
import { capitalize, resourceAsString } from "../../../util";
import { buildings } from "../../entities/buildings";
import { AvailableBlueprints } from "../../entities/user-state";
import styles from "./BuildBar.module.css";
import Hotkey from "./shared/Hotkey";

export interface BuildBarProps {
    dispatch?: Dispatch;
    currentBlueprint?: null | AvailableBlueprints;
}

const BuildBar = ({ dispatch, currentBlueprint }: BuildBarProps) => {
    const buildingOptions = Object.values(buildings).map((fn) => fn());

    return (
        <div className={styles.buildBar}>
            {currentBlueprint != null && (
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
                    <div>
                        Cancel <Hotkey>Esc</Hotkey>
                    </div>
                    <div>&nbsp;</div>
                </button>
            )}
            {buildingOptions.map(({ type = "house", price = {}, hotkey }) => {
                const priceString = `(${resourceAsString(price)})`;
                const emoji = Emoji[`building-${type}` as const];

                return (
                    <button
                        className={classNames(styles.buildButton, {
                            [styles.buildButtonActive]:
                                currentBlueprint === type,
                        })}
                        title={`Build ${type} ${priceString}`}
                        onClick={() =>
                            dispatch?.({
                                type: "selectBlueprint",
                                value: type,
                            })
                        }
                    >
                        <div className={styles.buildButtonIcon}>{emoji}</div>
                        <div>
                            {capitalize(type)}
                            {hotkey && (
                                <span>
                                    &nbsp;<Hotkey>{hotkey}</Hotkey>
                                </span>
                            )}
                        </div>
                        <div>{priceString}</div>
                    </button>
                );
            })}
        </div>
    );
};

export default BuildBar;
