const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "categories",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subCategories: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
      },
    },
    {
      timestamps: false,
    },
  );
};
