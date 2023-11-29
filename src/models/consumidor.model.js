import {sequelize} from "../config/database.js";
import {DataTypes} from "sequelize";
import {UserModel} from "./user.model.js";


const ConsumidorModel = sequelize.define('consumidor', {

    users_id: {
        type: DataTypes.INTEGER,
        references: {
            model: UserModel,
            key: 'id',
            allowNull: false
        },

    }


}, {
    timestamps: false,
    freezeTableName: true,
});

UserModel.hasOne(ConsumidorModel, { foreignKey: 'users_id' });
ConsumidorModel.belongsTo(UserModel, { foreignKey: 'users_id' });

export {ConsumidorModel};