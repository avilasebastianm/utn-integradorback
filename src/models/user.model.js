import {DataTypes, Sequelize} from "sequelize";
import {sequelize} from "../config/database.js";


const UserModel = sequelize.define('users', {
        id: {
        type: Sequelize.INTEGER,
         primaryKey: true,
        autoIncrement: true,
        },

    nombre: {  type: DataTypes.STRING,},
    apellido: { type: DataTypes.STRING,},
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        uniqueKey: true,

    },
    password: { type: DataTypes.STRING,},
    tipo_dni: {type: DataTypes.STRING,},
    dni: {type: DataTypes.INTEGER,},
    telefono: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    foto_perfil: {
        type: DataTypes.STRING,

    },
    fecha_nacimiento: {
        type: DataTypes.DATE,

    },
    direccion: {
        type: DataTypes.STRING,

    },
   }, {
    timestamps: false,
    freezeTableName: true,
});


export {UserModel};