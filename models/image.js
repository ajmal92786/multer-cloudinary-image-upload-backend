module.exports = (Sequelize, DataTypes) => {
  Image.init(
    {
      url: DataTypes.STRING,
      secure_url: DataTypes.STRING,
      tags: DataTypes.STRING,
      uploadedAt: DataTypes.DATE,
      userId: DataTypes.INTEGER,
      isDeleted: DataTypes.BOOLEAN,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      Sequelize,
      modelName: "Image",
    }
  );
  return Image;
};

/** // Correct code (by chatGPT)

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {}

  Image.init(
    {
      url: DataTypes.STRING,
      secure_url: DataTypes.STRING,
      tags: DataTypes.STRING,
      uploadedAt: DataTypes.DATE,
      userId: DataTypes.INTEGER,
      isDeleted: DataTypes.BOOLEAN,
    },
    {
      sequelize, // lowercase `sequelize` instance
      modelName: "Image",
    }
  );

  return Image;
};

 */
