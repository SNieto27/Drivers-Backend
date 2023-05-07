import mongoose, { Mixed }  from "mongoose";
import { Motorista } from "./motorista.model";

const schema = new mongoose.Schema<Motorista>({
    _id: mongoose.Types.ObjectId,
    email: String,
    password: String,
    nombre: String,
    apellido: String,
    telefono: String,
    cedula: String,
    placa: String,
}, {versionKey: false}
);

export const MotoristaSchema = mongoose.model('motoristas', schema);