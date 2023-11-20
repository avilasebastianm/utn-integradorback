import sequelize from "../config/database.js";
import {DataTypes} from "sequelize";
import {User} from "./user.js";



const Consumidor = sequelize.define('consumidor', {

    users_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id',
            allowNull: false
        },

    }


});

User.hasOne(Consumidor, { foreignKey: 'usuarioId' });
Consumidor.belongsTo(User, { foreignKey: 'usuarioId' });

export {Consumidor};