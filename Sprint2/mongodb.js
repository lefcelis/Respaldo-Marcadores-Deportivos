import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


const bd_url = 'mongodb+srv://mariacamilaea:<ciclo4desarrollo*>@cluster0.36opdu7.mongodb.net/?retryWrites=true&w=majority';
export const db =  mongoose.connect(process.env.MONGO_DBURI).then(()=> {
    console.log(" ๐La conexion fue realizada ๐ดโโ๏ธ con exito a la bd:๐ ")
}).catch((error) => console.error("Problemas al conectar a la Base de datos de Mongodb๐",error));



export default db;
