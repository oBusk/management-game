import { DefaultRenderedEntity } from "react-game-engine";
import { KeyboardControllerEntity } from "../keyboard-controller";
import { MouseControllerEntity } from "../mouse-controller";
import { ResourcesEntity } from "../resources";
import BottomBar from "./BottomBar";
import BuildBar from "./BuildBar";
import ResourceBar from "./ResourceBar";

interface Props {
    keyboardController?: KeyboardControllerEntity;
    mouseController?: MouseControllerEntity;
    resources?: ResourcesEntity;
}

export type HudEntity = DefaultRenderedEntity<Props>;

const Hud = ({ keyboardController, mouseController, resources }: Props) => {
    return (
        <>
            <ResourceBar resources={resources} />
            <BuildBar />
            <BottomBar
                keyboardController={keyboardController}
                mouseController={mouseController}
            />
        </>
    );
};

const hudEntity: HudEntity = {
    renderer: <Hud />,
};

export default hudEntity;
