const { response, request } = require('express')

const userGet = (req = request, res = response) => {
    const { q, nombre = 'No name', apikey, page = 1, limit } = req.query

    res.json({
        message: 'get API - controller',
        q,
        nombre,
        apikey,
        page,
        limit
    })
}

const userPost = (req = request, res) => {
    const { nombre, edad } = req.body

    res.json({
        message: 'post API - controller',
        nombre,
        edad
    })
}

const userPut = (req = request, res) => {
    const id = req.params.id

    res.json({
        message: 'put API - controller',
        id
    })
}

const userDelete = (req = request, res) => {
    res.json({
        message: 'delete API - controller'
    })
}

const userPatch = (req = request, res) => {
    res.json({
        message: 'patch API - controller'
    })
}

module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete,
    userPatch
}
