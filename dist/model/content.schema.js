"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    _id: mongoose_1.default.Types.ObjectId,
    contentName: String,
    description: String,
    type: String,
    seasons: Number,
    duration: String,
    coverImage: String,
    videoTrailer: String,
    topTen: Boolean,
    ageLimit: String,
    tags: (Array),
    mainContent: Boolean
});
exports.ContentSchema = mongoose_1.default.model('contents', schema);
