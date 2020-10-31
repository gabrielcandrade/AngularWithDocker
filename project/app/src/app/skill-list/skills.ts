import { Character } from '../character-list/characters';

export interface Skill {
    id?:string;
    name?:string;
    character?:string;
    element?:string;
    poder?:number;
    aoe?:boolean;
}