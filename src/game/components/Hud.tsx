import { DefaultRenderedEntity } from "react-game-engine";
import styles from "./Hud.module.css";
import { KeyboardControllerEntity } from "./keyboard-controller";
import { MouseControllerEntity } from "./mouse-controller";
import { ResourcesEntity } from "./resources";

interface Props {
    keyboardController?: KeyboardControllerEntity;
    mouseController?: MouseControllerEntity;
    resources?: ResourcesEntity;
}

export type HudEntity = DefaultRenderedEntity<Props>;

const Hud = ({ keyboardController, mouseController, resources }: Props) => {
    const pressedKeys = keyboardController
        ? Object.entries(keyboardController)
              .filter(([key, state]) => key !== "previous" && state)
              .map(([key]) => key)
        : [];

    return (
        <>
            <div className={styles.resourceBar}>
                💶 {Math.floor(resources?.escudos ?? 0)}
                🌲 {Math.floor(resources?.wood ?? 0)}
            </div>
            <div className={styles.buildBar}>
                <button
                    className={styles.buildButton}
                    title="Build factory (💶100, 🌲10)"
                >
                    <div className={styles.buildButtonIcon}>🏭</div>
                    <div>Factory</div>
                    <div>(💶100, 🌲10)</div>
                </button>
                <button
                    className={styles.buildButton}
                    title="Build house (💶20, 🌲10)"
                >
                    <div className={styles.buildButtonIcon}>🏡</div>
                    <div>House</div>
                    <div>(💶20, 🌲10)</div>
                </button>
            </div>
            <div className={styles.bottomBar}>
                {JSON.stringify(pressedKeys)} |{" "}
                {JSON.stringify(mouseController)}
            </div>
            ,
        </>
    );
};

const hudEntity: HudEntity = {
    renderer: <Hud />,
};

export default hudEntity;
