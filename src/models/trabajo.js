import {DataTypes} from "sequelize";
import {sequelize} from "../config/database.js";

const Trabajo = sequelize.define('trabajo', {
nombre: {
    type: DataTypes.STRING,
    allowNull: false
},
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    tareas: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lugar: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rango: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    

});