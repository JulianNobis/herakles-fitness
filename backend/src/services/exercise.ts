import * as database from "../database/index";

const collection = "exercises";

export function getExercises(){
    return database.getDocuments(collection);
}

export function getById(id: string){
    return database.getById(id, collection);
}

export function getByName(name: string){
    return database.getByName(name, collection);
}

