export default (sequelize, DataTypes) => {
  const Review = sequelize.define("review", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    contents: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    imageURL: {
      allowNull: true,
      type: DataTypes.STRING,
    },

    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  });
  return Review;
};
