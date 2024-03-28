import dbConfig from "../configs/dbConfig.js";

import { Sequelize, DataTypes } from "sequelize";

import gameModel from "./game.model.js";
import reviewModel from "./review.model.js";
import contentModel from "./content.model.js";

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  logging: false,
  port: dbConfig.PORT,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connected database.");
  })
  .catch((err) => {
    console.log("Error: " + err);
  });

const db = {
  Sequelize,
  sequelize,
  DataTypes,
};

db.Game = gameModel(sequelize, DataTypes);
db.Review = reviewModel(sequelize, DataTypes);
db.Content = contentModel(sequelize, DataTypes);

const createOneToManyRelation = function (manyModel, oneModel, foreignKey, as) {
  oneModel.hasMany(manyModel, {
    foreignKey: foreignKey,
    as: as,
  });

  manyModel.belongsTo(oneModel, {
    foreignKey: foreignKey,
    as: as,
  });
};

const createOneToOneRelation = function (model1, model2, foreignKey, as) {
  model1.hasOne(model2, {
    foreignKey: foreignKey,
    as: as,
  });

  model2.belongsTo(model1, {
    foreignKey: foreignKey,
    as: as,
  });
};

const createManyToManyRelation = function (model1, model2, modelRelation) {
  model1.belongsToMany(model2, { through: modelRelation });

  model2.belongsToMany(model1, { through: modelRelation });
};

createOneToManyRelation(db.Review, db.Game, "gameid", "game_reviews");

db.sequelize.sync({ alter: true }).then(() => {
  console.log("yes re-sync done!");
});

export default db;
