const Role = require('../models/role')
const User = require('../models/user')

const esRoleValido = async (rol = '') => {
    const existeRol = await Role.findOne({ rol }).exec()
    if (!existeRol) {
        throw new Error('El rol no existe')
    }
}

const emailExiste = async (correo = '') => {
    const existeEmail = await User.findOne({ correo }).exec()
    if (existeEmail) {
        throw new Error('El correo ya existe')
    }
}

const existeUsuarioPorId = async (id = '') => {
    const existeUsuario = await User.findById(id)
    if (!existeUsuario) {
        throw new Error(`El id no existe ${id}`)
    }
}

module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioPorId
}
