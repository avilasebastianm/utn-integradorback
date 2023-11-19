import {DataTypes} from "sequelize";
import {sequelize}  from "../config/database.js";
const User = sequelize.define('users', {
    nombre:DataTypes.STRING,
    apellido:DataTypes.STRING,
    email:DataTypes.STRING,
    tipo_dni:DataTypes.STRING,
    dni:DataTypes.STRING,
    password:DataTypes.STRING,
    telefono:DataTypes.STRING,
    direccion:DataTypes.STRING,
    foto_perfil:DataTypes.STRING,
    fecha_nacimiento:DataTypes.DATE,

}, {
    timestamps: false,
    freezeTableName: true,
});
export  {User};