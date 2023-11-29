import express from 'express';
import * as prestadorController from "../controllers/prestadorController.js";
import * as userController from "../controllers/userController.js";
import * as validar from "../middleware/validador.js";
import {validarDniExistente} from "../middleware/validador.js";



const Router = express.Router();

//user
Router.post('/users', validar.crearUsuario,validar.validarMailExistente,validar.validarDniExistente, userController.crearUsuario);
Router.post('/users/:id', validar.updateUser, userController.updateUser);
Router.get('/users/:id', userController.obtenerUsuarioPorId);
Router.get('/users', userController.obtenerUsuarios);
Router.delete('/users/:id', userController.borrarUsuario);



Router.get('/prestador/:id', prestadorController.getPrestadorid);
Router.post('/prestador',  validar.validarMailExistente,prestadorController.crearPrestador);
/*
Router.post('/prestador', validar.validarcrearPrestador, userController.crearPrestador);
Router.post('/prestador/:id', validar.validarcrearUsuario, userController.updatePrestador);
Router.get('/prestador/:id', userController.obtenerPrestadorPorId);
Router.get('/prestador', userController.obtenerPrestadores);
Router.delete('/prestador/:id', userController.borrarPrestadores);

router.get('/', usersController.getAllUsers);
router.get('/:id', usersController.getUserById);
router.post('/', usersController.createUser);
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);
*/
export   {Router};