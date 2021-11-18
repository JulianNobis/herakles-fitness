import Exericse from "./exercise";

export default class Template {
    id: number;
    name: string;
    exercises: Array<Exericse>;

    constructor(id: number, name: string, exercises: Array<Exericse>){
        this.id = id;
        this.name = name;
        this.exercises = exercises;
    }

}