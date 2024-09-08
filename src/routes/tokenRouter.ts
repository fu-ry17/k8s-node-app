import express from "express";
import { tokenCtrl } from "../controller/tokenCtrl";

const router = express.Router();

router.get("/", tokenCtrl.healthCheck);

router.post("/generate", tokenCtrl.generateToken);

router.get("/validate", tokenCtrl.validateToken);

export default router;
