import { Resources } from "../resources";
import { BuildingProps } from "./components/Building";

export interface BuildingState extends BuildingProps {
    hotkey?: string;
    price?: Resources;
    income?: Resources;
}
