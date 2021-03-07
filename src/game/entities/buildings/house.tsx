import { DefaultRenderedEntity } from "react-game-engine";
import House, { HouseProps } from "../../components/buildings/House";

export type HouseEntity = DefaultRenderedEntity<HouseProps>;

const houseEntity = ({ x = 200, y = 200 }: HouseProps = {}): HouseEntity => ({
    x,
    y,
    renderer: <House />,
});

export default houseEntity;
