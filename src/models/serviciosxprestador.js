import {sequelize} from "../config/database.js";
import {DataTypes} from "sequelize";
import {Servicio} from "./servicio.js";
import {Prestador} from "./prestador.js";


const Serviciosxprestador = sequelize.define('servicios_x_prestador', {
    prestador_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        refences: {
            model: Prestador,
            key: 'id',
            allowNull: false
        },
        servicios_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            refences: {
                model: Servicio,
                key: 'id',
                allowNull: false
            },
        }
    },

},{
    timestamps: false,
    freezeTableName: true,
})

Servicio.hasMany(Serviciosxprestador, {foreignKey: 'servicios_id'}); // 1:M
Serviciosxprestador.belongsTo(Prestador, {foreignKey: 'prestador_id'});// M:1
Prestador.hasMany(Serviciosxprestador, {foreignKey: 'prestador_id'});// 1:M
Serviciosxprestador.belongsTo(Servicio, {foreignKey: 'servicios_id'});// M:1

export {Serviciosxprestador};