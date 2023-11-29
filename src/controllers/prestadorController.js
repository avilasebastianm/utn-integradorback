import { PrestadorModel } from "../models/prestador.model.js";
import {UserModel} from "../models/user.model.js";
import {crearUsuario} from "./userController.js";
import * as userController from "./userController.js";






export async function crearPrestador(req, res) {

    console.log(req.body)
    const {
        users_id,
        cuit,
        descripcion,
        fotos_trabajo,
        disponibilidad_horaria,
        cobertura,

  } = req.body;

  //  const { user_id } = req.params;
  //  console.log(users_id)
    //const users_id = req.params.id;

    return await PrestadorModel.create({
        users_id,
        cuit,
        descripcion,
        fotos_trabajo,
        disponibilidad_horaria,
        cobertura,


    })
        .then((user) => {

            res.status(201).json(user);
        })
        .catch((error) => {
            res.status(500).json(error);
        });
}







export async function updatePrestador(req, res) {
    const {
        cuit,
        descripcion,
        fotos_trabajo,
        horarios_atencion,
        disponibilidad_horaria,
        radio_cobertura,
    } = req.body;

    try {
        const prestador = await Prestador.findByPk(id_prestador);
        if (!prestador) {
            return res.status(404).json({ msg: "Prestador no encontrado" });
        }

        prestador.cuit = cuit;
        prestador.descripcion = descripcion;
        prestador.fotos_trabajo = foto_trabajo;
        prestador.horarios_atencion = horarios_atencion;
        prestador.disponibilidad_horaria = disponibilidad_horaria,
            prestador.radio_cobertura = radio_cobertura;

        await prestador.save();

        res.status(200).json({ msg: "Prestador actualizado" });
    }

    catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error al actualizar el prestador: " + error });
    }
}


export async function getPrestadorid(req, res) {
    const { id } = req.params;

    return await PrestadorModel.findByPk(id, {include: [UserModel]})
        .then((prestador) => {
            if (!prestador) {
                return res.status(404).json({
                    msg: "Prestador no encontrado",
                });
            }

            res.status(200).json(prestador);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json(error);
        })

}