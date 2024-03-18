import express from "express";

import gameController from "../controllers/game.controllers.js";

const router = express.Router();
// /games
router.post("/", gameController.addGame);

// /games/:id
router.post("/:id", gameController.editGame);

// /games/:id
router.get("/:id", gameController.getGame);

// /games/:id
router.delete("/:id", gameController.deleteGame);

// /games
router.get("/", gameController.getAllGame);

export default router;
