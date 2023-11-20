import {DataTypes} from "sequelize";
import {sequelize}  from "../config/database.js";


const Tipo = sequelize.define('tipo', {
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    }, {
    timestamps: false,
    freezeTableName: true,
})
//Tipo.hasone(user, { foreignKey: 'tipoId' });//??

export  {Tipo};