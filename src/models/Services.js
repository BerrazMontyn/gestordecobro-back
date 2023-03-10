const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "services",
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
