import { DefaultRenderedEntity } from "react-game-engine";
import { BuildingState } from "../../buildings";
import Building from "../../components/Building";

export type HouseEntity = DefaultRenderedEntity<BuildingState>;

const houseEntity = ({
    x = 200,
    y = 200,
}: BuildingState = {}): HouseEntity => ({
    type: "house",
    x,
    y,
    hotkey: "h",
    price: {
        escudos: 20,
        wood: 10,
    },
    renderer: <Building />,
});

export default houseEntity;
