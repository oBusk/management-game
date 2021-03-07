import { Resources } from "../resources";
import { BuildingProps } from "./components/Building";

export interface BuildingState extends BuildingProps {
    price?: Resources;
    income?: Resources;
}
