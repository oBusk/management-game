import { Dispatch } from "react-game-engine";
import { AvailableBlueprints } from "../../entities/user-state";
import styles from "./BuildBar.module.css";

export interface BuildBarProps {
    dispatch?: Dispatch;
    currentBlueprint?: null | AvailableBlueprints;
}

const BuildBar = ({ dispatch, currentBlueprint }: BuildBarProps) => (
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
        <button
            className={
                styles.buildButton +
                " " +
                (currentBlueprint === "factory" ? styles.buildButtonActive : "")
            }
            title="Build factory (💶100, 🌲10)"
            onClick={() =>
                dispatch?.({
                    type: "selectBlueprint",
                    value: "factory",
                })
            }
        >
            <div className={styles.buildButtonIcon}>🏭</div>
            <div>Factory</div>
            <div>(💶100, 🌲10)</div>
        </button>
        <button
            className={
                styles.buildButton +
                " " +
                (currentBlueprint === "house" ? styles.buildButtonActive : "")
            }
            title="Build house (💶20, 🌲10)"
            onClick={() =>
                dispatch?.({
                    type: "selectBlueprint",
                    value: "house",
                })
            }
        >
            <div className={styles.buildButtonIcon}>🏡</div>
            <div>House</div>
            <div>(💶20, 🌲10)</div>
        </button>
    </div>
);

export default BuildBar;
