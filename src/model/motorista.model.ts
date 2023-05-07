import mongoose from "mongoose";

export interface Motorista {
    _id?: mongoose.Types.ObjectId;
    email: string;
    password: string;
    nombre: string;
    apellido: string;
    telefono: string;
    cedula: string;
    placa: string;
}