export default (sequelize, DataTypes) => {
  const Content = sequelize.define("content", {
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
    page: {
      allowNull: false,
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
  return Content;
};
