import  {validateRequest}  from "../middleware/validateRequest.js";
import joi from 'joi';
const Joi = joi
import passwordComplexity from 'joi-password-complexity';
import { UserModel } from "../models/user.model.js";


const complexityOptions = {
    min: 5,
    max: 250,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
    symbol: 1,
    requirementCount: 2,
};
export async function crearUsuario(req, res, next) {
    const schema = Joi.object({
        nombre: Joi.string().required().messages({
            'string.empty': 'El campo nombre es obligatorio.',

        }),
        apellido: Joi.string().required().messages({
            'string.empty': 'El campo apellido es obligatorio.',

        }),
        email: Joi.string().email().required().messages({
            'string.email': 'El campo email debe ser una dirección de correo electrónico válida.',
            'string.empty': 'El campo email es obligatorio.',
            'any.required': 'El campo email es obligatorio.'


        }),
        tipo_dni: Joi.string().required().messages({
            'string.empty': 'El campo tipo de documento es obligatorio.',

        }),
        dni: Joi.number().required().messages({
            'number.base': 'El campo dni debe ser un número.',
            'any.required': 'El campo dni es obligatorio.'
        }),
        password: passwordComplexity(complexityOptions).error(errors => {
            errors.forEach(err => {
                switch (err.code) {
                    case 'passwordComplexity.tooShort':
                        err.message = 'La contraseña es demasiado corta. Debe tener al menos 5 caracteres.';
                        break;
                    case 'passwordComplexity.tooLong':
                        err.message = 'La contraseña es demasiado larga. No debe tener más de 250 caracteres.';
                        break;
                    case 'passwordComplexity.lowercase':
                        err.message = 'La contraseña debe contener al menos una letra minúscula.';
                        break;
                    case 'passwordComplexity.uppercase':
                        err.message = 'La contraseña debe contener al menos una letra mayúscula.';
                        break;
                    case 'passwordComplexity.numeric':
                        err.message = 'La contraseña debe contener al menos un número.';
                        break;
                    case 'passwordComplexity.symbol':
                        err.message = 'La contraseña debe contener al menos un símbolo.';
                        break;
                    default:
                        break;
                }
            });
            return errors;
        }),
        confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
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
        direccion: Joi.string().required().messages({
            'string.empty': 'El campo direccion es obligatorio.',

        }),
    });
    validateRequest(req, next, schema);
}


export async function updateUser(req, res, next) {
    const schema = Joi.object({
        nombre: Joi.string().messages({
            'string.empty': 'El campo nombre es obligatorio.',
            'any.required': 'El campo nombre es obligatorio.'
        }),
        apellido: Joi.string().messages({
            'string.empty': 'El campo apellido es obligatorio.',
            'any.required': 'El campo apellido es obligatorio.'
        }),
        email: Joi.string().email().messages({
            'string.email': 'El campo email debe ser una dirección de correo electrónico válida.',
            'string.empty': 'El campo email es obligatorio.',
            'any.required': 'El campo email es obligatorio.'
        }),
        tipo_dni: Joi.string().messages({
            'string.empty': 'El campo tipo de documento es obligatorio.',
            'any.required': 'El campo tipo de documento es obligatorio.'
        }),
        dni: Joi.number().messages({
            'number.base': 'El campo dni debe ser un número.',
            'any.required': 'El campo dni es obligatorio.'
        }),
        password: passwordComplexity(complexityOptions).error(errors => {
            errors.forEach(err => {
                switch (err.code) {
                    case 'passwordComplexity.tooShort':
                        err.message = 'La contraseña es demasiado corta. Debe tener al menos 5 caracteres.';
                        break;
                    case 'passwordComplexity.tooLong':
                        err.message = 'La contraseña es demasiado larga. No debe tener más de 250 caracteres.';
                        break;
                    case 'passwordComplexity.lowercase':
                        err.message = 'La contraseña debe contener al menos una letra minúscula.';
                        break;
                    case 'passwordComplexity.uppercase':
                        err.message = 'La contraseña debe contener al menos una letra mayúscula.';
                        break;
                    case 'passwordComplexity.numeric':
                        err.message = 'La contraseña debe contener al menos un número.';
                        break;
                    case 'passwordComplexity.symbol':
                        err.message = 'La contraseña debe contener al menos un símbolo.';
                        break;
                    default:
                        break;
                }
            });
            return errors;
        }),
        confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
        telefono: Joi.number().messages({
            'number.base': 'El campo teléfono debe ser un número.',
            'any.required': 'El campo teléfono es obligatorio.'
        }),
        fotoPerfil: Joi.string().messages({
            'string.empty': 'El campo fotoPerfil es obligatorio.',
            'any.required': 'El campo fotoPerfil es obligatorio.'
        }),
        fecha_nacimiento: Joi.date().messages({
            'date.base': 'El campo fecha de nacimiento debe ser una fecha válida.',
            'any.required': 'El campo fecha de nacimiento es obligatorio.'
        }),
        direccion: Joi.string().messages({
            'string.empty': 'El campo direccion es obligatorio.',

        }),
    }).with('password', 'confirmPassword');
    validateRequest(req, next, schema);
}


export async function crearPrestador(req, res, next) {

    const schema = Joi.object({
        users_id: Joi.number().required().messages({
            'number.base': 'El campo users_id debe ser un número.',
            'any.required': 'El campo users_id es obligatorio.'
        }),

        cuit: Joi.number().required().messages({
            'number.base': 'El campo cuit debe ser un número.',
            'any.required': 'El campo cuit es obligatorio.'
        }),
        disponibilidad_horaria: Joi.string().required().messages({
            'string.empty': 'El campo disponibilidad_horario es obligatorio.',
            'any.required': 'El campo disponibilidad_horario es obligatorio.'
        }),

        descripcion: Joi.string().required().messages({
            'string.empty': 'El campo descripcion es obligatorio.',
            'any.required': 'El campo descripcion es obligatorio.'
        }),

        cobertura: Joi.string().required().messages({
            'string.empty': 'El campo cobertura es obligatorio.',
            'any.required': 'El campo cobertura es obligatorio.'
        }),

        fotos_trabajo: Joi.string().required().messages({
            'string.empty': 'El campo foto_trabajo es obligatorio.',
            'any.required': 'El campo foto_trabajo es obligatorio.'
        }),





    });
    validateRequest(req,res, next, schema);
}


export async function validarMailExistente(req, res, next) {
    const mail = req.body.email;
    return await UserModel.findOne({ where: { email: mail } })
        .then((usuario) => {
            return usuario
                ? res.status(400).json({ msg: 'Email ya registrado' })
                : next();
        })
        .catch((error) => {
            res.status(500).json(error);
        });
    }

    export async function validarDniExistente(req, res, next) {
        const dni = req.body.dni;
        return await UserModel.findOne({ where: { dni: dni } })
            .then((usuario) => {
                return usuario
                    ? res.status(400).json({ msg: 'DNI ya registrado' })
                    : next();
            })
            .catch((error) => {
                res.status(500).json(error);
            });
    }