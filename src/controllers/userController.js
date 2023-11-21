import { User } from "../models/user.js";
export async function crearUsuario(req, res) {
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
    } = req.body;

    return await User.create({
        nombre,
        apellido,
        email,
        password,
        tipo_dni,
        dni,
        telefono,
        tipoDni,
        fotoPerfil,
        fecha_nacimiento,
    })
        .then((user) => {
            })
        .catch((error) => {
            res.status(500).json(error);
        });
}

