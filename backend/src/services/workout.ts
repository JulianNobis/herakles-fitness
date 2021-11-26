import * as database from "../database/index";

const collection = "workouts";

export function getWorkouts(){
    return database.getDocuments(collection);
}

export function getById(id: string){
    return database.getById(id, collection);
}

export function getByName(name: string){
    return database.getByName(name, collection);
}
