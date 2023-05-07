"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSingleContent = exports.getAllContent = void 0;
const content_schema_1 = require("../model/content.schema");
//obtener todos los contenidos
const getAllContent = (req, res) => {
    content_schema_1.ContentSchema.find()
        .then((result) => {
        res.send(result);
        res.end();
    }).catch((error) => console.error(error));
};
exports.getAllContent = getAllContent;
//obtener un contenido
const getSingleContent = (req, res) => {
    content_schema_1.ContentSchema.findOne({ _id: req.params.id })
        .then((result) => {
        res.send(result);
        res.end();
    }).catch((error) => console.error(error));
};
exports.getSingleContent = getSingleContent;
