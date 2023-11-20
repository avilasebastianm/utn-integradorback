import {DataTypes} from "sequelize";
import {sequelize} from "../config/database.js";
import {Tipo} from './tipoUser.js';

const User = sequelize.define('users', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        uniqueKey: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipo_dni: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dni: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    telefono: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    foto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha_nacimiento: {
        type: DataTypes.DATE,
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipoId: {
        type: DataTypes.INTEGER,
        references: {
            model: Tipo,
            key: 'id',
        },

}}, {
    timestamps: false,
    freezeTableName: true,
});
Tipo.hasOne(User, {foreignKey: 'tipoId'});//relacion con tipo 1 a 1, un usuario tiene un tipo
User.belongsTo(Tipo, {foreignKey: 'tipoId'});

export {User};