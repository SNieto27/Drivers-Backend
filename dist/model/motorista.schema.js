"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MotoristaSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    _id: mongoose_1.default.Types.ObjectId,
    email: String,
    password: String,
    nombre: String,
    apellido: String,
    telefono: String,
    cedula: String,
    placa: String,
}, { versionKey: false });
exports.MotoristaSchema = mongoose_1.default.model('motoristas', schema);
