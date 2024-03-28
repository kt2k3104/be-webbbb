import db from "../models/index.model";

import { validationResult } from "express-validator";
// import uploadController from "./upload.controllers";

const contentController = {
  addContent: async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const err = new Error("Validation failed, entered data is incorrect.");
      err.statusCode = 422;
      err.data = errors.array();
      return next(err);
    }
    try {
      const { title, contents, imageURL, page } = req.body;

      const content = await db.Content.create({
        title,
        contents,
        page,
        imageURL,
      });

      res.status(201).json({
        message: "create content success",
        content,
      });
    } catch (error) {
      next(error);
    }
  },
  editContent: async (req, res, next) => {
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

      const content = await db.Content.findByPk(id);

      const contentUpdated = await content.update({
        title,
        contents,
        imageURL,
      });

      res.json({
        message: "update content success",
        contentUpdated,
      });
    } catch (error) {
      next(error);
    }
  },
  deleteContent: async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const err = new Error("Validation failed, entered data is incorrect.");
      err.statusCode = 422;
      err.data = errors.array();
      return next(err);
    }
    try {
      const id = req.params.id;

      //   const content = await db.Content.findByPk(id);

      const ContentDeleted = await db.Content.destroy({
        where: {
          id: id,
        },
      });

      //   const publicId =
      //     "res/images" + content.imageURL.split("res/images")[1].split(".")[0];

      //   await uploadController.deleteImg(publicId);

      res.json({
        message: "delete content success",
        ContentDeleted,
      });
    } catch (error) {
      next(error);
    }
  },
  getAllContentHomePage: async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const err = new Error("Validation failed, entered data is incorrect.");
      err.statusCode = 422;
      err.data = errors.array();
      return next(err);
    }
    try {
      const contents = await db.Content.findAll({
        where: {
          page: "home-page",
        },
      });

      res.json({
        message: "get all content home page success",
        contents,
      });
    } catch (error) {
      next(error);
    }
  },
  getAllContentPage2: async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const err = new Error("Validation failed, entered data is incorrect.");
      err.statusCode = 422;
      err.data = errors.array();
      return next(err);
    }
    try {
      const contents = await db.Content.findAll({
        where: {
          page: "page-2",
        },
      });

      res.json({
        message: "get all content page 2 success",
        contents,
      });
    } catch (error) {
      next(error);
    }
  },
  getAllContentPage2: async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const err = new Error("Validation failed, entered data is incorrect.");
      err.statusCode = 422;
      err.data = errors.array();
      return next(err);
    }
    try {
      const contents = await db.Content.findAll({
        where: {
          page: "page-3",
        },
      });

      res.json({
        message: "get all content page 3 success",
        contents,
      });
    } catch (error) {
      next(error);
    }
  },
  getAllContentPage2: async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const err = new Error("Validation failed, entered data is incorrect.");
      err.statusCode = 422;
      err.data = errors.array();
      return next(err);
    }
    try {
      const contents = await db.Content.findAll({
        where: {
          page: "page-4",
        },
      });

      res.json({
        message: "get all content page 4 success",
        contents,
      });
    } catch (error) {
      next(error);
    }
  },
  getAllContentPage2: async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const err = new Error("Validation failed, entered data is incorrect.");
      err.statusCode = 422;
      err.data = errors.array();
      return next(err);
    }
    try {
      const contents = await db.Content.findAll({
        where: {
          page: "page-5",
        },
      });

      res.json({
        message: "get all content page 5 success",
        contents,
      });
    } catch (error) {
      next(error);
    }
  },
  getAllContentPage2: async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const err = new Error("Validation failed, entered data is incorrect.");
      err.statusCode = 422;
      err.data = errors.array();
      return next(err);
    }
    try {
      const contents = await db.Content.findAll({
        where: {
          page: "page-6",
        },
      });

      res.json({
        message: "get all content page 6 success",
        contents,
      });
    } catch (error) {
      next(error);
    }
  },
  getAllContentPage2: async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const err = new Error("Validation failed, entered data is incorrect.");
      err.statusCode = 422;
      err.data = errors.array();
      return next(err);
    }
    try {
      const contents = await db.Content.findAll({
        where: {
          page: "page-7",
        },
      });

      res.json({
        message: "get all content page 7 success",
        contents,
      });
    } catch (error) {
      next(error);
    }
  },
};

export default contentController;
