"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    _id: mongoose_1.default.Types.ObjectId,
    email: String,
    password: String,
    plan: mongoose_1.default.SchemaTypes.Mixed,
    profiles: (Array),
});
exports.UserSchema = mongoose_1.default.model('users', schema);
