import { KeyboardControllerEntity } from "../keyboard-controller";
import { MouseControllerEntity } from "../mouse-controller";
import styles from "./BottomBar.module.css";

interface Props {
    keyboardController?: KeyboardControllerEntity;
    mouseController?: MouseControllerEntity;
}

const BottomBar = ({ keyboardController, mouseController }: Props) => {
    const pressedKeys = keyboardController
        ? Object.entries(keyboardController)
              .filter(([key, state]) => key !== "previous" && state)
              .map(([key]) => key)
        : [];

    return (
        <div className={styles.bottomBar}>
            {JSON.stringify(pressedKeys)} | {JSON.stringify(mouseController)}
        </div>
    );
};

export default BottomBar;
