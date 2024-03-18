import db from "../models/index.model";

import { validationResult } from "express-validator";
import uploadController from "./upload.controllers";

const reviewController = {
  addReview: async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const err = new Error("Validation failed, entered data is incorrect.");
      err.statusCode = 422;
      err.data = errors.array();
      return next(err);
    }
    try {
      const { title, contents, imageURL, gameid } = req.body;

      const review = await db.Review.create({
        title,
        contents,
        gameid,
        imageURL,
      });

      res.status(201).json({
        message: "create review success",
        review,
      });
    } catch (error) {
      next(error);
    }
  },
  editReview: async (req, res, next) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      const err = new Error("Validation failed, entered data is incorrect.");
      err.statusCode = 422;
      err.data = errors.array();
      return next(err);
    }
    try {
      const id = req.params.id;
      const { title, contents, imageURL } = req.body;

      const review = await db.Review.findByPk(id);

      const reviewUpdated = await review.update({
        title,
        contents,
        imageURL,
      });

      res.json({
        message: "update review success",
        reviewUpdated,
      });
    } catch (error) {
      next(error);
    }
  },
  deleteReview: async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const err = new Error("Validation failed, entered data is incorrect.");
      err.statusCode = 422;
      err.data = errors.array();
      return next(err);
    }
    try {
      const id = req.params.id;

      const review = await db.Review.findByPk(id);

      const ReviewDeleted = await db.Review.destroy({
        where: {
          id: id,
        },
      });

      const publicId =
        "res/images" + review.imageURL.split("res/images")[1].split(".")[0];

      await uploadController.deleteImg(publicId);

      res.json({
        message: "delete review success",
        ReviewDeleted,
      });
    } catch (error) {
      next(error);
    }
  },
  getAllReview: async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const err = new Error("Validation failed, entered data is incorrect.");
      err.statusCode = 422;
      err.data = errors.array();
      return next(err);
    }
    try {
      const reviews = await db.Review.findAll();

      res.json({
        message: "get all review success",
        reviews,
      });
    } catch (error) {
      next(error);
    }
  },

  getAllReviewByGameId: async (req, res, next) => {
    try {
      const gameid = req.params.id;

      // const reviews = await db.Review.findAll();
      const reviews = await db.Review.findAll({
        where: {
          gameid: gameid,
        },
      });

      res.json({
        message: "get all review by game id success",
        reviews,
      });
    } catch (error) {
      next(error);
    }
  },
};

export default reviewController;
