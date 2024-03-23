
import { server, mongoDb, logger } from '../../config/production.js';

import mongoose from 'mongoose';

const userCollection = async function () {
    try {
        const uri = process.env.mongoURI;
       
        const cliente = await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        
        console.log("Conexión a MongoDB Atlas establecida con éxito");

        const db = cliente.connection.db;

        return db;
    } catch (error) {
        console.error("Error al conectar a MongoDB Atlas:", error);
        throw error;
    }
};

export default userCollection;
