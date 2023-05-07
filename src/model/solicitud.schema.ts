import mongoose, { Mixed }  from "mongoose";
import { Producto, Solicitud } from "./solicitud.model";

const schema = new mongoose.Schema<Solicitud>({
    _id: mongoose.Types.ObjectId,
    codigo: String,
    costo: Number,
    tiempo: Number,
    distancia: Number,
    empresa: String,
    logourl: String,
    producto: Array<Producto>,
}, {versionKey: false}
);

export const SolicitudSchema = mongoose.model('solicitudes', schema);