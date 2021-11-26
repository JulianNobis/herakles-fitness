import * as database from "../database/index";

const collection = "templates";

export function getTemplates(){
    return database.getDocuments(collection);
}

export function getById(id: string){
    return database.getById(id, collection);
}

export function getByName(name: string){
    return database.getByName(name, collection);
}