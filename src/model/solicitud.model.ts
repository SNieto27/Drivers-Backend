import mongoose from "mongoose";

export interface Solicitud {
    _id?: mongoose.Types.ObjectId;
    codigo: string;
    costo: number;
    tiempo: number;
    distancia: number;
    empresa: string;
    logourl: string;
    producto: Array<Producto>;
}

export interface Producto {
    _id?: mongoose.Types.ObjectId;
    cantidad: number;
}