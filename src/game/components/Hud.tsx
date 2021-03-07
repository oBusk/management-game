import { DefaultRenderedEntity } from "react-game-engine";
import { KeyboardControllerState } from "../systems/keyboard-controller";
import styles from "./Hud.module.css";

interface Props {
    keyboardController?: KeyboardControllerState;
}

export type HudEntity = DefaultRenderedEntity<Props>;

const Hud = ({ keyboardController }: Props) => {
    const pressedKeys = keyboardController
        ? Object.entries(keyboardController)
              .filter(([key, state]) => key !== "previous" && state)
              .map(([key]) => key)
        : [];

    return <div className={styles.hud}>{JSON.stringify(pressedKeys)}</div>;
};

const hudEntity: HudEntity = {
    renderer: <Hud />,
};

export default hudEntity;
