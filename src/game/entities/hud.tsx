import { DefaultRenderedEntity } from "react-game-engine";
import Hud, { HudProps } from "../components/Hud";

export type HudEntity = DefaultRenderedEntity<HudProps>;

const hudEntity: HudEntity = {
    renderer: <Hud />,
};

export default hudEntity;
