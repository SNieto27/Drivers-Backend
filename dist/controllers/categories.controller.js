"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategory = exports.getCategories = void 0;
const category_schema_1 = require("../model/category.schema");
//obtener todas las categorias
const getCategories = (req, res) => {
    category_schema_1.CategorySchema.find()
        .then((result) => {
        res.send(result);
        res.end();
    }).catch((error) => console.error(error));
};
exports.getCategories = getCategories;
//obtener una categoria
const getCategory = (req, res) => {
    category_schema_1.CategorySchema.findOne({ _id: req.params.id })
        .then((result) => {
        res.send(result);
        res.end();
    }).catch((error) => console.error(error));
};
exports.getCategory = getCategory;
