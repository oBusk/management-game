import { Dispatch } from "react-game-engine";
import { KeyboardControllerEntity } from "../../entities/keyboard-controller";
import { MouseControllerEntity } from "../../entities/mouse-controller";
import { ResourcesEntity } from "../../entities/resources";
import { UserStateEntity } from "../../entities/user-state";
import BottomBar from "./BottomBar";
import BuildBar from "./BuildBar";
import ResourceBar from "./ResourceBar";

export interface HudProps {
    keyboardController?: KeyboardControllerEntity;
    mouseController?: MouseControllerEntity;
    resources?: ResourcesEntity;
    dispatch?: Dispatch;
    userState?: UserStateEntity;
}

const Hud = ({
    keyboardController,
    mouseController,
    resources,
    dispatch,
    userState,
}: HudProps) => {
    return (
        <>
            <ResourceBar resources={resources} />
            <BuildBar
                dispatch={dispatch}
                currentBlueprint={userState?.currentBlueprint}
            />
            <BottomBar
                keyboardController={keyboardController}
                mouseController={mouseController}
            />
        </>
    );
};

export default Hud;
