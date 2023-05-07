"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsuario = exports.getUsuarios = void 0;
const user_schema_1 = require("../model/user.schema");
//obtener todos los usuarios
const getUsuarios = (req, res) => {
    user_schema_1.UserSchema.find()
        .then((result) => {
        res.send(result);
        res.end();
    }).catch((error) => console.error(error));
};
exports.getUsuarios = getUsuarios;
//obtener un usuario
const getUsuario = (req, res) => {
    user_schema_1.UserSchema.findOne({ _id: req.params.id })
        .then((result) => {
        res.send(result);
        res.end();
    }).catch((error) => console.error(error));
};
exports.getUsuario = getUsuario;
