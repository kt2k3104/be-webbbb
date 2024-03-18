import express from "express";

import reviewController from "../controllers/review.controllers.js";

const router = express.Router();

// /reviews
router.post("/", reviewController.addReview);

// /reviews/:id
router.post("/:id", reviewController.editReview);

// /reviews/:id
router.delete("/:id", reviewController.deleteReview);

// /reviews/:id
router.get("/:id", reviewController.getAllReviewByGameId);

// /reviews
router.get("/", reviewController.getAllReview);

export default router;
