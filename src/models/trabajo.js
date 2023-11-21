import {DataTypes} from "sequelize";
import {sequelize} from "../config/database.js";
import {Prestador} from "./prestador.js";
import {Consumidor} from "./consumidor.js";
import {Estado} from "./estado.js";
import {Calificacion} from "./calificacion.js";


const Trabajo = sequelize.define('trabajo', {
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
            model: Calificacion,
            key: 'id',
        }
    },
    consumidor_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Calificacion,
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
* establece que un Trabajo pertenece a un Consumidor. La clave foránea en el
*  modelo Trabajo que hace referencia al modelo Consumidor es consumidor_id.
* */
Trabajo.belongsTo(Consumidor, {foreignKey: 'consumidor_id'});
/*
* Esto establece que un Prestador tiene un Trabajo. La clave foránea en
* el modelo Trabajo que hace referencia al modelo Prestador es prestador_id.
* */
Prestador.hasOne(Trabajo, {foreignKey: 'prestador_id'});
/*
Esto establece que un Estado tiene un Trabajo. La clave foránea en el modelo
Trabajo que hace referencia al modelo Estado es estado_id.
* */
Estado.hasOne(Trabajo, {foreignKey: 'estado_id'});
/*
*  Esto establece que una Calificacion tiene un Trabajo. La clave foránea
* en el modelo Trabajo que hace referencia al modelo Calificacion es calificacion_id.
*
* */
Calificacion.hasOne(Trabajo, {foreignKey: 'calificacion_id'});
/*
*Esto establece que un Trabajo pertenece a un Estado. La clave foránea
en el modelo Trabajo que hace referencia al modelo Estado es estado_id.
* */

Trabajo.belongsTo(Estado, {foreignKey: 'estado_id'});
/*
*Esto establece que un Trabajo pertenece a un Prestador. La clave foránea
*  en el modelo Trabajo que hace referencia al modelo Prestador es prestador_id.
* */
Trabajo.belongsTo(Prestador, {foreignKey: 'prestador_id'});
/*
 Esto establece que un Trabajo pertenece a una Calificacion.
 La clave foránea en el modelo Trabajo que hace referencia al modelo Calificacion es calificacion_id.
* */
Trabajo.belongsTo(Calificacion, {foreignKey: 'calificacion_id'});
/*
* Esto establece que un Consumidor tiene un Trabajo. La clave foránea en el
* modelo Trabajo que hace referencia al modelo Consumidor es consumidor_id.
*
* */
Consumidor.hasOne(Trabajo, {foreignKey: 'consumidor_id'});


export {Trabajo};