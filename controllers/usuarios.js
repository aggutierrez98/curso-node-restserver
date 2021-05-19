const { response, request } = require("express");

const usuariosGet = (req = request, res = response) => {

    const { q, nombre = "No name", key } = req.query;

    res.json({
        msg: "get API-controlador",
        q,
        nombre,
        key
    });
};

const usuariosPost = (req, res = response) => {

    const { nombre, apellido, mail } = req.body;

    res.status(201).json({
        msg: "post API-controlador",
        nombre,
        apellido,
        mail
    });
};

const usuariosPut = (req, res = response) => {

    const { id } = req.params;

    res.status(400).json({
        msg: "put API-controlador",
        id
    });
};

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: "patch API-controlador",
    });
};

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: "delete API-controlador",
    });
};

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
    usuariosPost,
};