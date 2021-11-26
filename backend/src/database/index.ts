import { MongoClient, ObjectId } from "mongodb";

const url = 'mongodb://localhost/HeraklesDB';
const client = new MongoClient(url);

export async function getDocuments(collection: string){
    try {
        await client.connect();
        const database = client.db("HeraklesDB");
        return await database.collection(collection).find().toArray();
    } catch (ex){
        console.log(ex);
    } finally {
        await client.close();
    }
}

export async function getById(id: string, collection: string){
    try {
        await client.connect();
        const database = client.db("HeraklesDB");
        return await database.collection(collection).find(new ObjectId(id)).toArray();
    } catch(ex){
        console.log(ex);
    } finally {
        await client.close();
    }
}

export async function getByName(name: string, collection: string){
    try {
        await client.connect();
        const database = client.db("HeraklesDB");
        return await database.collection(collection).find({name: name}).toArray();
    } catch(ex){
        console.log(ex);
    } finally {
        await client.close();
    }
}