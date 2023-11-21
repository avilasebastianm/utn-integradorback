import {sequelize} from "../config/database.js";
import {DataTypes} from "sequelize";

const Estado = sequelize.define('estado', {
   nombre: {
       type: DataTypes.STRING,
       allowNull: false
   },
   }, {
    timestamps: false,
    freezeTableName: true,
});

export {Estado};