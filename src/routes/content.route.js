import express from "express";

import contentController from "../controllers/content.controllers.js";

const router = express.Router();

// /home-content
router.post("/", contentController.addContent);

// /home-content/:id
router.post("/:id", contentController.editContent);

// /home-content/:id
router.delete("/:id", contentController.deleteContent);

// /home-content/home-page
router.get("/home-page", contentController.getAllContentHomePage);

// /home-content/page-2
router.get("/page-2", contentController.getAllContentPage2);

// /home-content/page-3
router.get("/page-3", contentController.getAllContentPage3);

// /home-content/page-4
router.get("/page-4", contentController.getAllContentPage4);

// /home-content/page-5
router.get("/page-5", contentController.getAllContentPage5);

// /home-content/page-6
router.get("/page-6", contentController.getAllContentPage6);

// /home-content/page7
router.get("/page-7", contentController.getAllContentPage7);

export default router;
