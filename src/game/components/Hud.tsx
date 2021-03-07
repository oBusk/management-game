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
