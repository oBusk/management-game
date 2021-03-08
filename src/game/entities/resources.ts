import { Resources } from "../../resources";

export interface ResourcesEntity extends Resources {
    previous?: Resources;
}

const resourcesEntity: ResourcesEntity = {
    escudos: 300,
    wood: 10,
};

export default resourcesEntity;
