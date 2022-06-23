const { response, request } = require("express");

const usuariosGet = (req = request, res = response) => {
    const { query, name, api_key } = req.query;

    res.json({
        msg: "get API - controlador usuarios",
        query,
        name,
        api_key,
    });
};

const usuariosPut = (req = request, res = response) => {
    const id = req.params.id;

    res.json({
        msg: "put API - controlador usuarios",
        id,
    });
};

const usuariosPost = (req = request, res = response) => {
    const { id, name, ability } = req.body;

    res.json({
        msg: "post API - controlador usuarios",
        id,
        name,
        ability,
    });
};

const usuariosDelete = (req = request, res = response) => {
    res.json({
        msg: "delete API - controlador usuarios",
    });
};

const usuariosPatch = (req = request, res = response) => {
    res.json({
        msg: "patch API - controlador usuarios",
    });
};

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch,
};