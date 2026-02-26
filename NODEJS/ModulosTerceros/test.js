console.log("prueba de archivo externo...");

import dotenv from "dotenv";

dotenv.config();

console.log("proyecto iniciado...");
console.log("usuario:", process.env.USUARIO);
console.log("PUERTO:", process.env.PUERTO);
console.log("URL BD:", process.env.URL_BASE_DATOS);
