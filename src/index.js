import express from "express";
import { autenticar } from "config/database.js";

const app = express()
const port = 3000
import { crearUsuario } from "./controllers/userController.js";

autenticar();

app.post("/usuario", crearUsuario);
app.listen(port,()=>{console.log("Servidor iniciado en el puerto ${port}");})