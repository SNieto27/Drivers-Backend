"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMotorista = exports.getMotorista = exports.getMotoristas = void 0;
const motorista_schema_1 = require("../model/motorista.schema");
//obtener todos los motoristas
const getMotoristas = (req, res) => {
    motorista_schema_1.MotoristaSchema.find()
        .then((result) => {
        res.send(result);
        res.end();
    }).catch((error) => console.error(error));
};
exports.getMotoristas = getMotoristas;
//obtener un motorista
const getMotorista = (req, res) => {
    motorista_schema_1.MotoristaSchema.findOne({ _id: req.params.id })
        .then((result) => {
        res.send(result);
        res.end();
    }).catch((error) => console.error(error));
};
exports.getMotorista = getMotorista;
//registrar un motorista
const addMotorista = (req, res) => {
    motorista_schema_1.MotoristaSchema.create({
        email: req.body.email,
        password: req.body.password,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        telefono: req.body.telefono,
        cedula: req.body.cedula,
        placa: req.body.placa
    })
        .then((saveResponse) => {
        res.send(saveResponse);
        res.end();
    }).catch((error) => {
        res.send({ message: 'Hubo un error al guardar', error });
        res.end();
    });
};
exports.addMotorista = addMotorista;
