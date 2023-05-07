"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsuario = void 0;
const user_schema_1 = require("../model/user.schema");
//obtener un usuario por su email
const getUsuario = (req, res) => {
    user_schema_1.UserSchema.find({ email: req.params.email })
        .then((result) => {
        res.send(result);
        res.end();
    }).catch((error) => console.error(error));
};
exports.getUsuario = getUsuario;
