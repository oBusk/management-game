import { DefaultRenderedEntity } from "react-game-engine";
import styles from "./Hud.module.css";
import { KeyboardControllerEntity } from "./keyboard-controller";
import { MouseControllerEntity } from "./mouse-controller";

interface Props {
    keyboardController?: KeyboardControllerEntity;
    mouseController?: MouseControllerEntity;
}

export type HudEntity = DefaultRenderedEntity<Props>;

const Hud = ({ keyboardController, mouseController }: Props) => {
    const pressedKeys = keyboardController
        ? Object.entries(keyboardController)
              .filter(([key, state]) => key !== "previous" && state)
              .map(([key]) => key)
        : [];

    return (
        <div className={styles.hud}>
            {JSON.stringify(pressedKeys)} | {JSON.stringify(mouseController)}
        </div>
    );
};

const hudEntity: HudEntity = {
    renderer: <Hud />,
};

export default hudEntity;
