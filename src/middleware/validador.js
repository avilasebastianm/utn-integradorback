import  {validateRequest}  from "../middleware/validateRequest.js";
import joi from 'joi';
const Joi = joi

export async function validarcrearUsuario(req, res, next) {
    const schema = Joi.object({
        nombre: Joi.string().required().messages({
            'string.empty': 'El campo nombre es obligatorio.',
            'any.required': 'El campo nombre es obligatorio.'
        }),
        apellido: Joi.string().required().messages({
            'string.empty': 'El campo apellido es obligatorio.',
            'any.required': 'El campo apellido es obligatorio.'
        }),
        email: Joi.string().email().required().messages({
            'string.email': 'El campo email debe ser una dirección de correo electrónico válida.',
            'string.empty': 'El campo email es obligatorio.',
            'any.required': 'El campo email es obligatorio.'
        }),
        dni: Joi.number().required().messages({
            'number.base': 'El campo dni debe ser un número.',
            'any.required': 'El campo dni es obligatorio.'
        }),
        telefono: Joi.number().required().messages({
            'number.base': 'El campo teléfono debe ser un número.',
            'any.required': 'El campo teléfono es obligatorio.'
        }),
        fotoPerfil: Joi.string().required().messages({
            'string.empty': 'El campo fotoPerfil es obligatorio.',
            'any.required': 'El campo fotoPerfil es obligatorio.'
        }),
        fecha_nacimiento: Joi.date().required().messages({
            'date.base': 'El campo fecha de nacimiento debe ser una fecha válida.',
            'any.required': 'El campo fecha de nacimiento es obligatorio.'
        }),
    });
    validateRequest(req, next, schema);
}