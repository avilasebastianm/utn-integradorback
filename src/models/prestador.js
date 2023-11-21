import {DataTypes} from "sequelize";
import {sequelize} from "../config/database.js";

import {User} from "./user.js";

const Prestador = sequelize.define('prestador', {
    cuit: {
        type: DataTypes.STRING,
        allowNull: false
    },
    disponibilidad_horario:{
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cobertura: {
        type: DataTypes.STRING,
        allowNull: false
    },
    foto_tranajo: {
        type: DataTypes.STRING,
        allowNull: false

    },
    users_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id',
            allowNull: false
        },

    }

}, {
    timestamps: false,
    freezeTableName: true,
})

User.hasOne(Prestador, {foreignKey: 'users_id'});
Prestador.belongsTo(User, {foreignKey: 'users_id'});


export {Prestador};