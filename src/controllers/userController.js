import { UserModel } from "../models/user.model.js";


export async function crearUsuario(req, res   ) {
        const {
            nombre,
            apellido,
            email,
            password,
            tipo_dni,
            dni,
            telefono,
            fotoPerfil,
            fecha_nacimiento,
            direccion,
            tipo_user
        } = req.body;

        return await UserModel.create({
            nombre,
            apellido,
            email,
            password,
            tipo_dni,
            dni,
            telefono,
            fotoPerfil,
            fecha_nacimiento,
            direccion,
            tipo_user
        }).then((user) => {
                res.status(200).json(user);
            })
            .catch((error) => {
                res.status(500).json(error);
            });
    }



export async function updateUser(req, res) {
    const { id } = req.params;
    const {
        nombre,
        apellido,
        email,
        password,
        tipo_dni,
        dni,
        telefono,
        foto_perfil,
        fecha_nacimiento,
        direccion
    } = req.body;

    try {
        const usuario = await UserModel.findByPk(id);
        if (!usuario) {
            return res.status(404).json({ msg: "Usuario no encontrado" });
        }

        usuario.nombre = nombre;
        usuario.apellido = apellido;
        usuario.password = password;
        usuario.dni = dni;
        usuario.telefono = telefono;
        usuario.tipo_dni = tipo_dni;
        usuario.fecha_nacimiento = fecha_nacimiento;
        usuario.foto_perfil = foto_perfil;

        await usuario.save();

        res.status(200).json({ msg: "Usuario actualizado: " + usuario.email });
    } catch (error) {
        res.status(500).json({ msg: "Error al actualizar el usuario: " + error });
    }
}


export async function obtenerUsuarioPorId(req, res) {
    const { id } = req.params;

    return await UserModel.findByPk(id)
        .then((usuario) => {
            if (!usuario) {
                return res.status(404).json({
                    msg: "Usuario no encontrado",
                });
            }

            res.status(200).json(usuario);
        })
        .catch((error) => {
            res.status(500).json(error);
        });
}
export async function obtenerUsuarios(req, res) {
    return await UserModel.findAll()
        .then((usuarios) => {
            res.status(200).json(usuarios);
        })
        .catch((error) => {
            res.status(500).json(error);
        })
}

export async function borrarUsuario(req, res) {
    const { id } = req.params;

    try {
        const usuario = await UserModel.findByPk(id);
        if (!usuario) {
            return res.status(404).json({ msg: "Usuario no encontrado" });
        }

        await usuario.destroy();

        res.status(200).json({ msg: "Usuario eliminado: " + usuario.email });
    } catch (error) {
        res.status(500).json({ msg: "Error al eliminar el usuario: " + error });
    }
}


