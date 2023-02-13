const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("example", {
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
};
