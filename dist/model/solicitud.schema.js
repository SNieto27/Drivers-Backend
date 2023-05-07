"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolicitudSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    _id: mongoose_1.default.Types.ObjectId,
    codigo: String,
    costo: Number,
    tiempo: Number,
    distancia: Number,
    empresa: String,
    logourl: String,
    producto: (Array),
}, { versionKey: false });
exports.SolicitudSchema = mongoose_1.default.model('solicitudes', schema);
