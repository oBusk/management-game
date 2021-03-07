import { Resources } from "../resources";

export interface BuildingState {
    type?: string;
    symbol?: string;
    x?: number;
    y?: number;
    income?: Resources;
}
