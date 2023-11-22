import express from 'express';

import * as userController from "../controllers/userController.js";
import * as validar from "../middleware/validador.js";


const Router = express.Router();


Router.post('/users', validar.validarcrearUsuario, userController.crearUsuario);
/*
router.get('/', usersController.getAllUsers);
router.get('/:id', usersController.getUserById);
router.post('/', usersController.createUser);
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);
*/
export   {Router};