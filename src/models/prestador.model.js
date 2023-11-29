import {DataTypes, Sequelize} from "sequelize";
import {sequelize} from "../config/database.js";
import {UserModel} from "./user.model.js";

const PrestadorModel = sequelize.define('prestador' ,{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    users_id: {
        type: DataTypes.INTEGER,
        // field: 'users_id',
        references: {
            model: UserModel,
            key: 'id', } },
    cuit: {
        type: DataTypes.STRING,
        allowNull: false},
    disponibilidad_horaria:{
        type: DataTypes.STRING,},
    descripcion: {
        type: DataTypes.STRING,},
    cobertura: {
        type: DataTypes.STRING,},
    fotos_trabajo: {
        type: DataTypes.STRING,
        },



}, {
    timestamps: false,
    freezeTableName: true,
    defaultScope: {
        attributes: {
            exclude: [ 'createdAt', 'updatedAt', 'users_id' ]
        }
    }

})
// UserModel.hasOne(PrestadorModel , {foreignKey: 'users_id'});
// PrestadorModel.hasMany(UserModel, {foreignKey: 'users_id'});


UserModel.hasMany(PrestadorModel , {foreignKey: 'users_id'});
PrestadorModel.belongsTo(UserModel, {foreignKey: 'users_id'});


export {PrestadorModel};