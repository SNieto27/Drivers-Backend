"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProfile = exports.getProfiles = void 0;
const profile_schema_1 = require("../model/profile.schema");
//obtener todos los perfiles
const getProfiles = (req, res) => {
    profile_schema_1.ProfileSchema.find()
        .then((result) => {
        res.send(result);
        res.end();
    }).catch((error) => console.error(error));
};
exports.getProfiles = getProfiles;
//obtener un perfil
const getProfile = (req, res) => {
    profile_schema_1.ProfileSchema.findOne({ _id: req.params.id })
        .then((result) => {
        res.send(result);
        res.end();
    }).catch((error) => console.error(error));
};
exports.getProfile = getProfile;
