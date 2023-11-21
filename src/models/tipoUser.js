import {DataTypes} from "sequelize";
import {sequelize} from "../config/database.js";


const Tipo = sequelize.define('tipo_user', {
    rol: {
        type: DataTypes.STRING,
        allowNull: false
    },
    }, {
    timestamps: false,
    freezeTableName: true,
},{
    timestamps: false,
    freezeTableName: true,
})
//Tipo.hasone(user, { foreignKey: 'tipoId' });//??

export  {Tipo};