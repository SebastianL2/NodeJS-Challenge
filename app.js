import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import morgan from "morgan";
import fileUpload from 'express-fileupload';
import userCollection from './database/mongoDb/index.js';
import routes from './v1/routes/index.js';
import swaggerDocs from './v1/swagger.js';

const app = express();
dotenv.config();

// Configuración de opciones de CORS
const corsOptions = {
    origin: true,
    credentials: true,
};

// Middleware para el manejo de archivos
app.use(fileUpload({
    useTempFiles: false
}));

// Configuración de mongoose
mongoose.set('strictQuery', false);

// Middleware para el manejo de solicitudes JSON y CORS
app.use(express.json());
app.use(cors(corsOptions));

// Rutas de la API
app.use('/v1', routes);

// Configuración del puerto y arranque del servidor
const PORT = process.env.PORT || 4500; // Puerto por defecto: 4500

if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        console.log(`Server listening on port: ${PORT}`);
        swaggerDocs(app, PORT); // Iniciar documentación Swagger
    });
}

export default app;
