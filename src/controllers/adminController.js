import {User} from "../models/userModels.js";

export async function obtenerUsuarios(req, res) {
    return await User.findAll().then((users) => {
        res.status(200).json(users);

    }).catch((error) => {
        res.status(500).json(error);
    });

};

async function consultaruser() {
    const user = await User.findAll({
        attributes: ['id','nombre', 'apellido', 'email']
    })
    console.log( user.map(alumno => alumno.dataValues/**con esto nos trae los valores requeridos en json*/))
//JSON.stringify(alumnos,null,1) //con esto nos trae los valores requeridos en json

}

consultaruser()