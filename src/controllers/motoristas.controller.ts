import { Request, Response } from "express";
import { MotoristaSchema } from "../model/motorista.schema";

//obtener todos los motoristas
export const getMotoristas = (req:Request, res:Response) => {
    MotoristaSchema.find()
    .then((result) => {
        res.send(result);
        res.end();
    }).catch((error) => console.error(error));
};

//obtener un motorista
export const getMotorista = (req:Request, res:Response) => {
    MotoristaSchema.findOne({_id: req.params.id})
    .then((result) => {
        res.send(result);
        res.end();
    }).catch((error) => console.error(error));
};

//registrar un motorista
export const addMotorista = (req:Request, res:Response) => {
    MotoristaSchema.create({
        email: req.body.email,
        password: req.body.password,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        telefono: req.body.telefono,
        cedula: req.body.cedula,
        placa: req.body.placa
    })
    .then((saveResponse: any) => {
        res.send(saveResponse);
        res.end();
    }).catch((error: any) => {
        res.send({message: 'Hubo un error al guardar', error});
        res.end();
    })
}