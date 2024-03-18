import db from "../models/index.model";

import { validationResult } from "express-validator";
import uploadController from "./upload.controllers";

const gameController = {
  addGame: async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const err = new Error("Validation failed, entered data is incorrect.");
      err.statusCode = 422;
      err.data = errors.array();
      return next(err);
    }
    try {
      const { name, imageURL, description, link, rating } = req.body;

      const game = await db.Game.create({
        name,
        imageURL,
        description,
        link,
        rating,
      });

      res.status(201).json({
        message: "create game success",
        game,
      });
    } catch (error) {
      next(error);
    }
  },
  editGame: async (req, res, next) => {
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
      const { name, imageURL, description, link, rating } = req.body;

      const game = await db.Game.findByPk(id);

      const gameUpdated = await game.update({
        name,
        imageURL,
        description,
        link,
        rating,
      });

      res.json({
        message: "update game success",
        gameUpdated,
      });
    } catch (error) {
      next(error);
    }
  },
  deleteGame: async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const err = new Error("Validation failed, entered data is incorrect.");
      err.statusCode = 422;
      err.data = errors.array();
      return next(err);
    }
    try {
      const id = req.params.id;

      const game = await db.Game.findByPk(id);

      const GameDeleted = await db.Game.destroy({
        where: {
          id: id,
        },
      });

      const publicId =
        "res/images" + game.imageURL.split("res/images")[1].split(".")[0];

      await uploadController.deleteImg(publicId);

      res.json({
        message: "delete game success",
        GameDeleted,
      });
    } catch (error) {
      next(error);
    }
  },
  getGame: async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const err = new Error("Validation failed, entered data is incorrect.");
      err.statusCode = 422;
      err.data = errors.array();
      return next(err);
    }
    try {
      const id = req.params.id;
      const game = await db.Game.findByPk(id);

      res.json({
        message: "get game by id success",
        game,
      });
    } catch (error) {
      next(error);
    }
  },
  getAllGame: async (req, res, next) => {
    try {
      const games = await db.Game.findAll({
        include: [
          {
            model: db.Review,
            as: "game_reviews",
            // attributes: [
            //   "id",
            //   "title",
            //   "contents",
            //   "imageURL",
            //   "createAt",
            //   "updateAt",
            //   "gameid",
            // ],
          },
        ],
      });

      res.json({
        message: "get all game success",
        games,
      });
    } catch (error) {
      next(error);
    }
  },
};

export default gameController;
