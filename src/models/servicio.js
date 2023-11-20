import {sequelize} from "../config/database.js";
import {DataTypes} from "sequelize";

const Servicio = sequelize.define('servicios', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tareas: {
        type: DataTypes.STRING,
        allowNull: false
    },

})

export {Servicio};