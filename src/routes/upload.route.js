import express from "express";

import uploadController from "../controllers/upload.controllers.js";

const router = express.Router();

// /upload/img
router.post("/img", uploadController.addImg);

export default router;
