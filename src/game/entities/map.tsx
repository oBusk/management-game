import { DefaultRenderedEntity } from "react-game-engine";
import Map, { MapProps } from "../components/Map";

export type MapEntity = DefaultRenderedEntity<MapProps>;

const mapEntity: MapEntity = {
    width: 800,
    height: 800,
    renderer: <Map />,
};

export default mapEntity;
