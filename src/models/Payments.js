const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("customers", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    detail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    expirationDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
