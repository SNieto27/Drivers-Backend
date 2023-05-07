import express from 'express';
import { addMotorista, getMotorista, getMotoristas } from '../controllers/motoristas.controller';

const router = express.Router();

router.get("/", getMotoristas);
router.get("/:id", getMotorista);
router.post("/", addMotorista);

export default router;