import express from "express";

import contentController from "../controllers/content.controllers.js";

const router = express.Router();

// /contents
router.post("/", contentController.addContent);

// /contents/:id
router.post("/:id", contentController.editContent);

// /contents/:id
router.delete("/:id", contentController.deleteContent);

// /contents/home-page
router.get("/home-page", contentController.getAllContentHomePage);

// /contents/page-2
router.get("/page-2", contentController.getAllContentPage2);

// /contents/page-3
router.get("/page-3", contentController.getAllContentPage3);

// /contents/page-4
router.get("/page-4", contentController.getAllContentPage4);

// /contents/page-5
router.get("/page-5", contentController.getAllContentPage5);

// /contents/page-6
router.get("/page-6", contentController.getAllContentPage6);

// /contents/page7
router.get("/page-7", contentController.getAllContentPage7);

export default router;
