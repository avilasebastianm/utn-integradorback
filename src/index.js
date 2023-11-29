import express from 'express';
const app = express();
const port = 3000;
import {Router} from './router/routerWeb.js';
import morgan from 'morgan';
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(express.json());


app.use('/', Router);

app.listen(port,()=>{console.log("Servidor iniciado ");})