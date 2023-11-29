import {sequelize} from "../config/database.js";
import {DataTypes} from "sequelize";
import {ServicioModel} from "./servicio.model.js";
import {PrestadorModel} from "./prestador.model.js";


const ServiciosxprestadorModel = sequelize.define('servicios_x_prestador', {
    prestador_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        refences: {
            model: PrestadorModel,
            key: 'id',
            allowNull: false
        },
        servicios_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            refences: {
                model: ServicioModel,
                key: 'id',
                allowNull: false
            },
        }
    },

},{
    timestamps: false,
    freezeTableName: true,
})

ServicioModel.hasMany(ServiciosxprestadorModel, {foreignKey: 'servicios_id'}); // 1:M
ServiciosxprestadorModel.belongsTo(PrestadorModel, {foreignKey: 'prestador_id'});// M:1
PrestadorModel.hasMany(ServiciosxprestadorModel, {foreignKey: 'prestador_id'});// 1:M
ServiciosxprestadorModel.belongsTo(ServicioModel, {foreignKey: 'servicios_id'});// M:1

export {ServiciosxprestadorModel};