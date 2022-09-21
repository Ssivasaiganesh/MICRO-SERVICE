import * as mongoDB from "mongodb"


export const collections:{users?: mongoDB.Collection}={}

export async function  connectToDatabase()  {
    const client:mongoDB.MongoClient=new mongoDB.MongoClient("mongodb://localhost:27017")
    await client.connect()

    const db:mongoDB.Db=client.db("db")

    const users:mongoDB.Collection=db.collection("users")
    

    collections.users=users

}