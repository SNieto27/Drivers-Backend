"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const profiles_controller_1 = require("../controllers/profiles.controller");
const router = express_1.default.Router();
router.get("/", profiles_controller_1.getProfiles);
router.get("/:id", profiles_controller_1.getProfile);
exports.default = router;
