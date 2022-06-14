
const { response, request } = require('express')


const usuariosGet = (req = request,res = response) => {

    const { q, nombre = "no name", apikey, limit } = req.query

    res.json({
        msg:'get API - controlador',
        q,
        nombre,
        apikey,
        limit
    })
}

const usuariosPut = (req,res = response) => {

    const id = req.params.id

    res.json({
        msg:'put API - Controlador',
        id
    })
}

const usuariosPost = (req,res = response) => {
    const { nombre, edad } = req.body
    res.json({
        msg:'post API- controlador',
        nombre,
        edad
    })
    
}

const usuariosDelete = (req,res = response) => {
    res.json({
        msg:'delete API - Controlador'
    })
}

const usuariosPatch = (req,res = response) => {
    res.json({
        msg:'patch API - Controlador'
    })
}



module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}