const { response } = require('express')

const usuariosGet = (req, res = response) => {

    const { q, nombre, apikey } = req.query;

    res.json({

        msg: 'get api - Controlador',
        q,
        nombre,
        apikey
    })
}

const usuariosPut = (req, res = response) => {

    const { id } = req.params;

    res.json({

        msg: 'put api - Controlador',
        id
    })
}

const usuariosPost = (req, res = response) => {

    const { nombre, edad } = req.body;
    res.json({

        msg: 'post api',
        nombre,
        edad
    })
}

const usuariosDelete = (req, res = response) => {
    res.json({

        msg: 'delete api'
    })
}

const usuariosPatch = (req, res = response) => {
    res.json({

        msg: 'patch api'
    })
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}