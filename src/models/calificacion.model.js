import {DataTypes} from "sequelize";
import {sequelize} from "../config/database.js";


const CalificacionModel = sequelize.define('calificacion', {
    estrellas: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    resena: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: false,
    freezeTableName: true,
})


export {CalificacionModel};
