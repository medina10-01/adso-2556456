import {createPool} from 'mysql2/promise';
import dotenv from 'dotenv';
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../env/.env") });

export const pool = createPool({
	host: process.env.DB_HOST || 'localhost',
	user: process.env.DB_USER||'root',
	password: process.env.DB_PASSWORD || '',
	port: process.env.DB_PORT || 3306,
	database: process.env.DB_DATABASE || 'igs'
})

pool.getConnection().then(connect => {
console.log("Conexión a base de datos exitosa.");
connect.release();
})
.catch(error => {
	console.error("Conexion a base de datos fallida. " + error);
})