import { User } from "../models/user.js";
import Joi from 'joi';




export async function crearUsuario(req, res   ) {
        const {
            nombre,
            apellido,
            email,
            password,
            tipo_dni,
            dni,
            telefono,
            fotoPerfil,
            fecha_nacimiento,
        } = req.body;

        return await User.create({
            nombre,
            apellido,
            email,
            password,
            tipo_dni,
            dni,
            telefono,
            fotoPerfil,
            fecha_nacimiento,
        }).then((user) => {
                res.status(200).json(user);
            })
            .catch((error) => {
                res.status(500).json(error);
            });
    }




    //validarciones
// export async function validarcrearUsuario(req, res, next) {
//     const schema = Joi.object({
//         nombre: Joi.string().required().messages({
//             'string.empty': 'El campo nombre es obligatorio.',
//             'any.required': 'El campo nombre es obligatorio.'
//         }),
//         apellido: Joi.string().required().messages({
//             'string.empty': 'El campo apellido es obligatorio.',
//             'any.required': 'El campo apellido es obligatorio.'
//         }),
//         email: Joi.string().email().required().messages({
//             'string.email': 'El campo email debe ser una dirección de correo electrónico válida.',
//             'string.empty': 'El campo email es obligatorio.',
//             'any.required': 'El campo email es obligatorio.'
//         }),
//         dni: Joi.number().required().messages({
//             'number.base': 'El campo dni debe ser un número.',
//             'any.required': 'El campo dni es obligatorio.'
//         }),
//         telefono: Joi.number().required().messages({
//             'number.base': 'El campo teléfono debe ser un número.',
//             'any.required': 'El campo teléfono es obligatorio.'
//         }),
//         fotoPerfil: Joi.string().required().messages({
//             'string.empty': 'El campo fotoPerfil es obligatorio.',
//             'any.required': 'El campo fotoPerfil es obligatorio.'
//         }),
//         fecha_nacimiento: Joi.date().required().messages({
//             'date.base': 'El campo fecha de nacimiento debe ser una fecha válida.',
//             'any.required': 'El campo fecha de nacimiento es obligatorio.'
//         }),
//     });
//     validateRequest(req, next, schema);
// }


//
// export async function validarcrearUsuario(req, res,next ) {
//     const schema = Joi.object({
//         nombre: Joi.string().required(),
//         apellido: Joi.string().required(),
//         email: Joi.string().email().required(),
//        // password: Joi.string().min(6).required(),
//         //confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
//        // tipo_dni: Joi.string().valid('Admin', 'User', 'Prestador').required(),
//         dni: Joi.number().required(),
//         telefono: Joi.number().required(),
//         fotoPerfil: Joi.string().required(),
//         fecha_nacimiento: Joi.date().required(),
//
//     });
//     validateRequest(req, next, schema);
// }




    function updateUser(req, res, next) {
        const schema = Joi.object({
            nombre: Joi.string().required(),
            apellido: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(6).required(),
            confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
            tipo_dni: Joi.string().required(),
            dni: Joi.number().required(),
            telefono: Joi.number().required(),
            fotoPerfil: Joi.string().required(),
            fecha_nacimiento: Joi.date().required(),
        }).with('password', 'confirmPassword');
        validateRequest(req, next, schema);
    }




