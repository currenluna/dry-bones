import config from "../../cep.config";
export const ns = config.id;

export type Folder = {
    name: string;
    type: string;
    id: number;
}