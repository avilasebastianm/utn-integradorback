import {DataTypes} from "sequelize";
import {sequelize} from "../config/database.js";
import {PrestadorModel} from "./prestador.model.js";
import {ConsumidorModel} from "./consumidor.model.js";
import {EstadoModel} from "./estado.model.js";
import {CalificacionModel} from "./calificacion.model.js";


const TrabajoModel = sequelize.define('trabajo', {
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
    calificacion_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: CalificacionModel,
            key: 'id',
        }
    },
    consumidor_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: CalificacionModel,
            key: 'id',
        }
    },
    prestador_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: prestador,
            key: 'id',
        }
    },
    estado_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: estado,
            key: 'id',
        }
    },


},{
    timestamps: false,
    freezeTableName: true,
});

/*
* establece que un TrabajoModel pertenece a un ConsumidorModel. La clave foránea en el
*  modelo TrabajoModel que hace referencia al modelo ConsumidorModel es consumidor_id.
* */
TrabajoModel.belongsTo(ConsumidorModel, {foreignKey: 'consumidor_id'});
/*
* Esto establece que un PrestadorModel tiene un TrabajoModel. La clave foránea en
* el modelo TrabajoModel que hace referencia al modelo PrestadorModel es prestador_id.
* */
PrestadorModel.hasOne(TrabajoModel, {foreignKey: 'prestador_id'});
/*
Esto establece que un EstadoModel tiene un TrabajoModel. La clave foránea en el modelo
TrabajoModel que hace referencia al modelo EstadoModel es estado_id.
* */
EstadoModel.hasOne(TrabajoModel, {foreignKey: 'estado_id'});
/*
*  Esto establece que una CalificacionModel tiene un TrabajoModel. La clave foránea
* en el modelo TrabajoModel que hace referencia al modelo CalificacionModel es calificacion_id.
*
* */
CalificacionModel.hasOne(TrabajoModel, {foreignKey: 'calificacion_id'});
/*
*Esto establece que un TrabajoModel pertenece a un EstadoModel. La clave foránea
en el modelo TrabajoModel que hace referencia al modelo EstadoModel es estado_id.
* */

TrabajoModel.belongsTo(EstadoModel, {foreignKey: 'estado_id'});
/*
*Esto establece que un TrabajoModel pertenece a un PrestadorModel. La clave foránea
*  en el modelo TrabajoModel que hace referencia al modelo PrestadorModel es prestador_id.
* */
TrabajoModel.belongsTo(PrestadorModel, {foreignKey: 'prestador_id'});
/*
 Esto establece que un TrabajoModel pertenece a una CalificacionModel.
 La clave foránea en el modelo TrabajoModel que hace referencia al modelo CalificacionModel es calificacion_id.
* */
TrabajoModel.belongsTo(CalificacionModel, {foreignKey: 'calificacion_id'});
/*
* Esto establece que un ConsumidorModel tiene un TrabajoModel. La clave foránea en el
* modelo TrabajoModel que hace referencia al modelo ConsumidorModel es consumidor_id.
*
* */
ConsumidorModel.hasOne(TrabajoModel, {foreignKey: 'consumidor_id'});


export {TrabajoModel};