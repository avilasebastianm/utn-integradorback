import express from 'express';
const app = express();
const port = 3000;
import {Router} from './router/routerWeb.js';
app.use(express.json());


app.use('/', Router);

app.listen(port,()=>{console.log("Servidor iniciado ");})