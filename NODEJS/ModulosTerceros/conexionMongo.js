import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();
const uri = process.env.URL_BASE_DATOS;
const client = new MongoClient(uri);

export default async function run() {
  try {
    await client.connect();
    const db = await client.db("todolist");
    const collectionTask = db.collection("task");
    const query = await collectionTask.find({}).toArray();
    console.log(query);
  } catch (error) {
    console.error("error en la conexion", error);
  } finally {
    console.log("conexion exitosa");
    await client.close();
  }
}
run().catch(console.dir);
