const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "companies",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    },
  );
};
