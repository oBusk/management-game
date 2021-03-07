import { KeyboardControllerEntity } from "../../entities/keyboard-controller";
import { MouseControllerEntity } from "../../entities/mouse-controller";
import { ResourcesEntity } from "../../entities/resources";
import BottomBar from "./BottomBar";
import BuildBar from "./BuildBar";
import ResourceBar from "./ResourceBar";

export interface HudProps {
    keyboardController?: KeyboardControllerEntity;
    mouseController?: MouseControllerEntity;
    resources?: ResourcesEntity;
}

const Hud = ({ keyboardController, mouseController, resources }: HudProps) => {
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

export default Hud;
